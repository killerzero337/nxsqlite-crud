

function Proveedor({ children, proveedor}) {
  return (
      <div style={{ 'border': '1px solid lightgrey', 'padding': '50px' }}>
          <p><strong>{proveedor.nombre}</strong></p>
          <p>34+ {proveedor.telefono}</p>
          {children}
      </div>
  )
}

export default Proveedor