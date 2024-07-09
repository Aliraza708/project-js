import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBjOuL3B3nRaCO9Fo2IvJrkXq3AOdqjg9g",
  authDomain: "my-first-project-8596d.firebaseapp.com",
  projectId: "my-first-project-8596d",
  storageBucket: "my-first-project-8596d.appspot.com",
  messagingSenderId: "549023476953",
  appId: "1:549023476953:web:d356f595e611585e0f62c8",
  measurementId: "G-3LX0PV9JT7"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const todosCollection = collection(db, "todos");

const todo_input = document.getElementById("input");
const add_todo = document.getElementById("todoadd_button");
const todo_list = document.getElementById("todolist");

getTodosFromDb();
add_todo.addEventListener("click", addTodoToDb);

async function addTodoToDb() {
  try {
    const obj = {
      todo: todo_input.value,
      createdAt: new Date().toISOString(),
    };

    const docRef = await addDoc(todosCollection, obj);
    console.log("Document written with ID: ", docRef.id);
    getTodosFromDb();
    todo_input.value = "";
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

async function getTodosFromDb() {
  try {
    const querySnapshot = await getDocs(todosCollection);
    todo_list.innerHTML = "";
    querySnapshot.forEach((doc) => {
      const { todo, createdAt } = doc.data();
      const ele = document.createElement("li");
      ele.id = doc.id;
      ele.innerHTML = `${todo} -  ${new Date(createdAt).toLocaleDateString()}`;
      ele.addEventListener("click", deleteTodo);
      todo_list.appendChild(ele);
    });
  } catch (e) {
    console.error("Error getting documents: ", e);
  }
}

async function deleteTodo() {
  try {
    const docId = this.id;
    const docRef = doc(db, "todos", docId);
    await deleteDoc(docRef);
    console.log("Document deleted with ID: ", docId);
    getTodosFromDb();
  } catch (e) {
    console.error("Error deleting document: ", e);
  }
}
