import Link from 'next/link'
import Proveedor from '@/components/Proveedor'
import { getProveedores } from '@/lib/actions'


export default async function Home() {
    const proveedores = await getProveedores()
    // console.log(articulos);

    return (
        <div>
            <Link className='enlace' href="/proveedores/new"> Nuevo Proveedor </Link>
            {
                proveedores.map((proveedor) => (
                    <Proveedor key={proveedor.id} proveedor={proveedor} >
                        <Link
                            className='enlace'
                            href={{ pathname: '/proveedores/edit', query: { id: proveedor.id } }}>
                            Editar proveedor
                        </Link>
                        <Link
                            className='enlace'
                            href={{ pathname: '/proveedores/delete', query: { id: proveedor.id } }}>
                            Eliminar proveedor
                        </Link>
                    </Proveedor>
                ))
            }
        </div>
    )
}