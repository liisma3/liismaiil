export const isEmpty = (value) => {
  return (
    value === undefined ||
    value === null ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0)
  );
};

export const isValidImage = (value) => {
  if (!value) return true;
  if (typeof value !== 'string') return false;
  const img = ['jpg', 'jpeg', 'png', 'svg'];
  const ext = value.split('.').pop();
  return img.includes(ext);
};

export const isSameAs = (getValues, field) => (value) => {
  if (!value) return true;
  if (typeof value !== 'string') return false;

  const comparedValue = getValues()[field];

  return comparedValue === value;
};

export const snapShotLooper = (snapshot) => {
  let data = {};
  snapshot.forEach((doc) => {
    const id = doc.id;
    data[id] = doc.data();
  });
  return data;
};
export const callsnapShotLooper = (snapshot) => {
  let data = {};
  console.log({ snapshot: snapshot.docs });
  snapshot[0].forEach((doc) => {
    const id = doc.id;
    data[id] = doc.data();
  });
  return data;
};
