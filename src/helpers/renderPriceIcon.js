const renderPriceIcon = rating => {
  if (rating === 1) {
    return `$`;
  } else if (rating === 2) {
    return `$$`;
  } else if (rating === 3) {
    return `$$$`;
  } else {
    return null;
  }
};

export default renderPriceIcon;
