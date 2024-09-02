export const formatNumber = (value: string) => {
  let onlyNums = value.replace(/[^0-9]/g, "");

  if (onlyNums.length > 1 && onlyNums.startsWith("0")) {
    onlyNums = onlyNums.replace(/^0+/, "");
  }

  return onlyNums;
};

export const formatMoney = (value: string) => {
  let onlyNums = value.replace(/[^0-9]/g, "");
  if (onlyNums.length > 1 && onlyNums.startsWith("0")) {
    onlyNums = onlyNums.replace(/^0+/, "");
  }
  onlyNums = onlyNums.replace(/\B(?=(\d{3})+(?!\d))/g, ","); // 수정된 부분

  return onlyNums;
};
export const formatPercent = (value: string) => {
  let onlyNums = value.replace(/[^0-9.]/g, "");

  // 0이 맨앞에 있을 때 바로 뒤에 .만 오게 하고, .이 연속으로 오지 않게 하는 로직
  if (
    onlyNums.length > 1 &&
    onlyNums.startsWith("0") &&
    !onlyNums.startsWith("0.")
  ) {
    onlyNums = onlyNums.replace(/^0+/, "0.");
  }

  // .이 연속으로 오지 않게 하는 로직
  if (onlyNums.includes("..")) {
    onlyNums = onlyNums.replace(/\.{2,}/g, ".");
  }

  return onlyNums;
};

export const truncateDecimal = (value: string) => {
  const parts = value.split(".");
  if (parts.length > 1 && parts[1].length > 5) {
    return `${parts[0]}.${parts[1].slice(0, 5)}..`;
  }
  return value;
};
