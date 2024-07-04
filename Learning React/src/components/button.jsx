function Button({ children }) {

  function handleClick(e) {
    alert(`You Clicked on ${e.target.firstChild.data} Button`);
  }
  
  return <button onClick={handleClick}>{children}</button>;
}
export default Button;
