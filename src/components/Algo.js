export const FCFS = (arr) => {
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

export const SJF = (arr) => {
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

export const LJF = (arr) => {
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

export const SRTF = (arr) => {
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

export const LRTF = (arr) => {
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

export const Priority_based = (arr) => {
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
      if (a[3] == b[3]) return a[1] - b[1];
      else return b[3] - a[3];
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

export const Round_robin = (arr) => {
  let newarr = JSON.parse(JSON.stringify(arr));
  let finalarr = [];

  let currarr = [];
  let currmax = 100000;
  for (let i = 0; i < newarr.length; i++) {
    if (newarr[i][1] < currmax) {
      currmax = JSON.parse(JSON.stringify(newarr[i][1]));
    }
  }
  for (let i = 0; i < newarr.length; i++) {
    if (newarr[i][1] === currmax) {
      currarr.push(JSON.parse(JSON.stringify(newarr[i])));
      newarr.splice(i, 1);
      i--;
    }
  }
  while (currarr.length) {
    let curr = JSON.parse(JSON.stringify(currarr[0]));
    finalarr.push(JSON.parse(JSON.stringify(curr)));
    currarr.splice(0, 1);
    for (let i = 0; i < newarr.length; i++) {
      if (newarr[i][1] <= ++currmax) {
        currarr.push(JSON.parse(JSON.stringify(newarr[i])));
        newarr[i][2]--;
        if (newarr[i][2] == 0) {
          newarr.splice(i, 1);
          i--;
        }
      }
    }
    curr[2]--;
    if (currarr[2] > 0) currarr.push(JSON.parse(JSON.stringify(curr)));
  }
  console.log(finalarr);
  return finalarr;
};
