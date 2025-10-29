// hooks/useOrders.ts
import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
  getDoc,
} from "firebase/firestore";

// Configura tu Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDsO7hRIDvHmdA-m2RjvhEzWq6kQX53A4U",
  authDomain: "restaurant-manager-7c481.firebaseapp.com",
  projectId: "restaurant-manager-7c481",
  storageBucket: "restaurant-manager-7c481.firebasestorage.app",
  messagingSenderId: "377003379429",
  appId: "1:377003379429:web:3ddc497d3640ce2528e20c",
  measurementId: "G-GRH3RXP8NZ",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export function useOrders() {
  const [orders, setOrders] = useState<any[]>([]);

  // Escucha cambios en tiempo real
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "orders"), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setOrders(data);
    });
    return () => unsub();
  }, []);

  // Agregar producto o actualizar cantidad si ya existe
  const addOrder = async (order: any) => {
    const snapshot = await getDocs(collection(db, "orders"));
    const existing = snapshot.docs.find(
      (doc) =>
        doc.data().name === order.name && doc.data().details === order.details
    );

    if (existing) {
      const currentQuantity = existing.data().quantity || 1;
      await updateDoc(doc(db, "orders", existing.id), {
        quantity: currentQuantity + order.quantity,
      });
    } else {
      await addDoc(collection(db, "orders"), order);
    }
  };

  // Disminuir cantidad o eliminar si llega a 0
  const decreaseOrder = async (id: string) => {
    const orderRef = doc(db, "orders", id);
    const orderSnap = await getDoc(orderRef);

    if (orderSnap.exists()) {
      const currentQuantity = orderSnap.data().quantity || 1;
      if (currentQuantity > 1) {
        await updateDoc(orderRef, { quantity: currentQuantity - 1 });
      } else {
        await deleteDoc(orderRef);
      }
    }
  };

  // Eliminar un producto directamente
  const removeOrder = async (id: string) => {
    await deleteDoc(doc(db, "orders", id));
  };

  // Limpiar todos los pedidos
  const clearOrders = async () => {
    orders.forEach(async (order) => {
      await deleteDoc(doc(db, "orders", order.id));
    });
  };

  return { orders, addOrder, decreaseOrder, removeOrder, clearOrders };
}
