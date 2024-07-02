import "./exports.css";
const css="export2css"
export function Export1()
{
  return <h1>Export 1</h1>
}
export function Export2()
{
  return <h1 className={css}>Export 2</h1>
}
export function Export3()
{
  return <h1 style={{backgroundColor:'red', color:'black'}}>Export 3</h1>
}
export function Export4()
{
  return <h1 style={{color:'green', backgroundColor:'white'}}>Export 4</h1>
}