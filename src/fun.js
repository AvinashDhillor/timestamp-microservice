const check = a => {
  const date = new Date(a);
  const unix1 = date.getTime();
  if (isNaN(unix1)) {
    return { error: 'Invalid Date' };
  }
  const utc1 = date.toUTCString();
  return {
    unix: unix1,
    utc: utc1
  };
};
 
module.exports = {
   check 
}
