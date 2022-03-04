let arr = [
  ["P1", 0, 2, 2],
  ["P2", 1, 3, 1],
  ["P3", 0, 1, 2],
  ["P4", 5, 1, 0],
  ["P5", 2, 4, 0],
  ["P6", 5, 2, 6],
  ["P7", 19, 5, 6],
];

export const FCFS = () => {
  let newarr = JSON.parse(JSON.stringify(arr));
  newarr.sort(function (a, b) {
    return a[1] - b[1];
  });

  let newarr2 = [];
  for (let i = 0; i < newarr.length; i++) {
    while (newarr[i][2]) {
      newarr2.push(JSON.parse(JSON.stringify(newarr[i])));
      newarr[i][2]--;
    }
  }
  console.log(newarr2);
  return newarr2;
};

export const SJF = () => {
  let newarr = JSON.parse(JSON.stringify(arr));
  let finalarr = [];

  let t = 0;
  while (newarr.length) {
    console.log(JSON.parse(JSON.stringify(t)));
    let check_arr = [];
    for (let i = 0; i < newarr.length; i++) {
      if (newarr[i][1] <= t) {
        check_arr.push(JSON.parse(JSON.stringify(newarr[i])));
      }
    }
    if (check_arr.length === 0) {
      t++;
      continue;
    }
    check_arr.sort(function (a, b) {
      return a[2] - b[2];
    });
    let flag = 0;
    finalarr.push(JSON.parse(JSON.stringify(check_arr[0])));
    for (let i = 0; i < newarr.length; i++) {
      if (newarr[i][0] === check_arr[0][0]) {
        t += check_arr[0][2];
        newarr.splice(i, 1);
        flag = 1;
        break;
      }
    }
    if (flag) continue;
    t++;
  }
  let newarr2 = [];
  for (let i = 0; i < finalarr.length; i++) {
    while (finalarr[i][2]) {
      newarr2.push(JSON.parse(JSON.stringify(finalarr[i])));
      finalarr[i][2]--;
    }
  }
  console.log(newarr2);
  return newarr2;
};

export const LJF = () => {
  let newarr = JSON.parse(JSON.stringify(arr));
  let finalarr = [];

  let t = 0;
  while (newarr.length) {
    let check_arr = [];
    for (let i = 0; i < newarr.length; i++) {
      if (newarr[i][1] <= t) {
        check_arr.push(JSON.parse(JSON.stringify(newarr[i])));
      }
    }
    if (check_arr.length === 0) {
      t++;
      continue;
    }
    check_arr.sort(function (a, b) {
      return b[2] - a[2];
    });
    finalarr.push(JSON.parse(JSON.stringify(check_arr[0])));
    let flag = 0;
    for (let i = 0; i < newarr.length; i++) {
      if (newarr[i][0] === check_arr[0][0]) {
        t += check_arr[0][2];
        newarr.splice(i, 1);
        flag = 1;
        break;
      }
    }
    if (flag) continue;
    t++;
  }
  let newarr2 = [];
  for (let i = 0; i < finalarr.length; i++) {
    while (finalarr[i][2]) {
      newarr2.push(JSON.parse(JSON.stringify(finalarr[i])));
      finalarr[i][2]--;
    }
  }
  console.log(newarr2);
  return newarr2;
};

export const SRTF = () => {
  let newarr = JSON.parse(JSON.stringify(arr));
  let finalarr = [];
  let t = 0;
  while (newarr.length) {
    let check_arr = [];
    for (let i = 0; i < newarr.length; i++) {
      if (newarr[i][1] <= t) {
        let currval = JSON.parse(JSON.stringify(newarr[i]));
        check_arr.push(currval);
      }
    }
    check_arr.sort(function (a, b) {
      if (a[2] == b[2]) return a[1] - b[1];
      else return a[2] - b[2];
    });
    if (check_arr.length == 0) {
      t++;
      continue;
    }
    finalarr.push(check_arr[0]);

    for (let i = 0; i < newarr.length; i++) {
      if (newarr[i][0] === check_arr[0][0]) {
        newarr[i][2]--;
        if (newarr[i][2] === 0) newarr.splice(i, 1);
        break;
      }
    }

    t++;
  }
  console.log(finalarr);
  return finalarr;
};

export const LRTF = () => {
  let newarr = JSON.parse(JSON.stringify(arr));
  let finalarr = [];
  let t = 0;
  while (newarr.length) {
    let check_arr = [];
    for (let i = 0; i < newarr.length; i++) {
      if (newarr[i][1] <= t) {
        let currval = JSON.parse(JSON.stringify(newarr[i]));
        check_arr.push(currval);
      }
    }
    check_arr.sort(function (a, b) {
      if (a[2] == b[2]) return a[1] - b[1];
      else return a[2] - b[2];
    });
    if (check_arr.length == 0) {
      t++;
      continue;
    }
    finalarr.push(check_arr[0]);

    for (let i = 0; i < newarr.length; i++) {
      if (newarr[i][0] === check_arr[0][0]) {
        newarr[i][2]--;
        if (newarr[i][2] === 0) newarr.splice(i, 1);
        break;
      }
    }

    t++;
  }
  console.log(finalarr);
  return finalarr;
};
