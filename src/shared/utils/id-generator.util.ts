const h = 16;
const d = Date;
const m = Math;
const x = (x: number) => m.floor(x).toString(h);
const u = (u: number) => ' '.repeat(u).replace(/./g, () => x(m.random() * h));

export const ObjectId = () => `${x(+new d(new d().toISOString()) / 1000)}${u(h)}`;
export const uuidv4 = () => `${u(8)}-${u(4)}-${u(4)}-${u(4)}-${u(12)}`;