function Button({ children, changeCount, count }) {
  function handleClick(e) {
    if (e.target.innerHTML == "Increment ++") {
      count++;
      changeCount(count);
    } else {
      if (count == 0) {
        alert('Count Can not be negative');
      } else {
        count--;
        changeCount(count);
      }
    }
  }
  return <button onClick={handleClick}>{children}</button>;
}
export default Button;
