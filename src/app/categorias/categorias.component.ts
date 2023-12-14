import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})

export class CategoriasComponent {
  categoria = {id:0, nombre:"Cate de ejemplo", descripcion:"Texto de ejemplo"}

  categorias = [
    {id:55,nombre:"Zapateria",  descripcion:"Todo lo relacionado con zapatos"},
    {id:88,nombre:"Pesca",      descripcion:"Todo los relacionados con la Pesca"},
    {id:9, nombre:"Deportes",   descripcion:"Todo lo relacionado con deportes"},
    {id:4, nombre:"Hogar",      descripcion:"Todo lo relacionado con Hogar"},
    {id:34,nombre:"Electronica",descripcion:"Todo lo relacionado con pantallas y laptops"}
  ]

  agregarCategoria(){
    const posId=this.categorias.findIndex((cat)=>cat.id==this.categoria.id);
    if(this.categoria.id>0 && posId==-1){
        const categoriaSinVincular={
          id:this.categoria.id,
          nombre:this.categoria.nombre,
          descripcion:this.categoria.descripcion
        }
        this.categorias.push(categoriaSinVincular);
    }else{
      alert("Error: Verifica tus datos");
    }
  }

  eliminarCategoria(id:number){
    if(confirm("Esta seguro de que desea eliminar el registro")){
      const posId=this.categorias.findIndex((categoria)=>categoria.id==id)
      this.categorias.splice(posId,1)
    }
  }

  seleccionarCategoria(categoriaSeleccionada:{id:number,nombre:string,descripcion:string}){//Para saber que categoria actualizar
    this.categoria.id         =categoriaSeleccionada.id;
    this.categoria.nombre     =categoriaSeleccionada.nombre;
    this.categoria.descripcion=categoriaSeleccionada.descripcion;
  }

  actualizarCategoria(){//Para actualizar la categoria seleccionada
    const idActualizar = this.categorias.findIndex((cat)=>cat.id==this.categoria.id);
    if(idActualizar!=-1){
      this.categorias[idActualizar].id          = this.categoria.id;
      this.categorias[idActualizar].nombre      = this.categoria.nombre;
      this.categorias[idActualizar].descripcion = this.categoria.descripcion;
    }else
      alert("Registro no encontrado");
    }
}
