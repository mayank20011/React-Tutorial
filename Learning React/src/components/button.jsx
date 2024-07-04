function Button({ children ,func}) {

  function handleClick(e) {
    func();
  }

  return <button onClick={handleClick}>{children}</button>;
}
export default Button;
