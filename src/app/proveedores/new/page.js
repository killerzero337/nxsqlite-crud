import Form from "@/components/FormularioProveedores"
import { newProveedores } from "@/lib/actions"

function page() {
  return (
    <div>
        <h3>Nuevo artículo</h3>
        <Form action={newProveedores} title='Crear proveedor' proveedor={null} disabled={false}  />
    </div>
  )
}

export default page