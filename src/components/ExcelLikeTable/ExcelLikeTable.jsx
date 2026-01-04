/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../firebase";
import style from "./ExcelLikeTable.module.css";

function ExcelLikeTable() {
  const [rows, setRows] = useState([]);

  /* ✅ REAL-TIME FIREBASE SYNC (ONLY ONE EFFECT) */
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "products"), (snapshot) => {
      setRows(
        snapshot.docs.map((d) => ({
          id: d.id,
          ...d.data(),
        }))
      );
    });

    return () => unsubscribe();
  }, []);

  /* ✅ LOCAL STATE UPDATE */
  const handleChange = (index, field, value) => {
    const updated = [...rows];
    updated[index][field] = value;
    setRows(updated);
  };

  /* ✅ SAVE ROW */
  const saveRow = async (row) => {
    const { id, _priceChartText, ...data } = row;

    if (_priceChartText !== undefined) {
      data.priceChart = textToPriceChart(_priceChartText);
    }

    await updateDoc(doc(db, "products", id), data);
  };

  /* ✅ ADD ROW (NEW SCHEMA ONLY) */
  const addRow = async () => {
    await addDoc(collection(db, "products"), {
      productName: "",
      category: "",
      priceChart: {},
      description: "",
      imageUrl: "",
    });
  };

  /* ✅ DELETE ROW */
  const deleteRow = async (id) => {
    await deleteDoc(doc(db, "products", id));
  };

  /* ✅ CLOUDINARY UPLOAD */
  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "productImg");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dsuha2wwx/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();
    return data.secure_url;
  };

  const updatePriceChart = (rowIndex, size, price) => {
    const updated = [...rows];
    updated[rowIndex].priceChart = {
      ...(updated[rowIndex].priceChart || {}),
      [size]: Number(price),
    };
    setRows(updated);
  };

  const removePrice = (rowIndex, size) => {
    const updated = [...rows];
    delete updated[rowIndex].priceChart[size];
    setRows(updated);
  };

  const addPriceSize = (rowIndex) => {
    updatePriceChart(rowIndex, "", "");
  };

  const priceChartToText = (obj) => {
    if (!obj || typeof obj !== "object") return "";
    return Object.entries(obj)
      .map(([k, v]) => `${k}:${v}`)
      .join(", ");
  };

  const textToPriceChart = (text) => {
    const obj = {};
    text.split(",").forEach((pair) => {
      const [k, v] = pair.split(":");
      if (k && v) obj[k.trim()] = Number(v.trim());
    });
    return obj;
  };

  return (
    <div className={style.MainBox}>
      <button onClick={addRow} className={style.addButton}> New Product +</button>
    <div className={style.wrapper}>
      <table border="1" cellPadding="8" className={style.table}>
        <thead className={` ${style.heading}`}>
          <tr className={`${style.row} ${style.row}`}>
            <th className={style.col1}>Product Name</th>
            <th className={style.col2}>Category</th>
            <th className={style.col3}>Price Chart</th>
            <th className={style.col4}>Description</th>
            <th className={style.col5}>Image</th>
            <th className={style.col6}>Save</th>
            <th className={style.col7}>Delete</th>
          </tr>
        </thead>

        <tbody>
          {rows.map((row, i) => (
            <tr key={row.id}>
              <td className={style.col1}>
                <input
                  value={row.productName || ""}
                  onChange={(e) =>
                    handleChange(i, "productName", e.target.value)
                  }
                />
              </td>

              <td className={style.col2}>
                <input
                  value={row.category || ""}
                  onChange={(e) => handleChange(i, "category", e.target.value)}
                />
              </td>

              {/* ✅ PRICE CHART */}
              <td className={style.col3}>
                <input
                  placeholder="S:10, L:15"
                  value={
                    row._priceChartText ?? priceChartToText(row.priceChart)
                  }
                  onChange={(e) => {
                    const updated = [...rows];
                    updated[i]._priceChartText = e.target.value;
                    setRows(updated);
                  }}
                  style={{ width: "180px" }}
                />
              </td>

              <td className={style.col4}>
                <input
                  value={row.description || ""}
                  onChange={(e) =>
                    handleChange(i, "description", e.target.value)
                  }
                />
              </td>

              {/* ✅ IMAGE UPLOAD + AUTO SAVE */}
              <td className={style.col5}>
                <input
                  type="file"
                  accept="image/*"
                  onChange={async (e) => {
                    const file = e.target.files[0];
                    if (!file) return;

                    const url = await uploadToCloudinary(file);

                    await updateDoc(doc(db, "products", row.id), {
                      imageUrl: url,
                    });
                  }}
                />
              </td>

              <td className={style.col6}>
                <button onClick={() => saveRow(row)}>💾</button>
              </td>

              <td className={style.col7}>
                <button
                  onClick={() => deleteRow(row.id)}
                  style={{ background: "red", color: "white" }}
                >
                  ❌
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default ExcelLikeTable;
