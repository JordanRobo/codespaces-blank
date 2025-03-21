import { Database } from "bun:sqlite";
import { Xid } from 'xid-ts';

// const db = new Database("data.sqlite");

const newXid = new Xid().toString();

console.log(newXid);