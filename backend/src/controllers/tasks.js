import { connect } from "../database";

export const getTasks = async (req, res) => {
    const db = await connect();
    const [rows] = await db.query("SELECT * FROM tasksdb.tasks");
    res.json(rows);
}

export const getTask = async (req, res) => {
    const db = await connect();
    const [rows] = await db.query("SELECT * FROM tasksdb.tasks WHERE id = ?", [
        req.params.id
    ]);
    res.json(rows);
} 

export const getTaskCount = async (req, res) => {
    const db = await connect();
    const [rows] = await db.query("SELECT COUNT(*) FROM tasksdb.tasks");
    res.json(rows[0]["COUNT(*)"]);
} 

export const saveTask = async (req, res) => {
    const db = await connect();
    const [result] = await db.query("INSERT INTO tasksdb.tasks(title, descripcion) VALUES (?, ?)", [ 
        req.body.title, 
        req.body.descripcion 
    ]);
    res.json({
        id: result.insertId,
        ...req.body,
    });
} 

export const deleteTask = async (req, res) => {
    const db = await connect();
    await db.query("DELETE FROM tasksdb.tasks WHERE id = ?", [req.params.id]);
    res.sendStatus(204);
} 

export const updateTask = async (req, res) => {
    const db = await connect();
    await db.query("UPDATE tasksdb.tasks SET ? WHERE id = ?", [ req.body, req.params.id ]);
    res.sendStatus(204);
} 