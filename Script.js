let btn = document.getElementById("plus");
btn.addEventListener("click", create)
//btn.addEventListener("click",()=>{})
let note = document.getElementById("cuerpo");
note.innerHTML = " ";
let date = new Date().toISOString().split('T')[0];

let notas = [];

function create() {
    note.innerHTML += `<div class="nota bg_nota m-3">
                    <div class="d-flex justify-content-between">
                    <div class="text-start py-2">
                    <button class="btn dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown"><i
                            class=" fa  fa-ellipsis-h"></i></button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li class="dropdown-item"><button class="btn"onclick="save()"><span><i class="fa fa-save"></i></span> save</button></li>
                            <li class="dropdown-item"><button class="btn" ><span><i class="fas fa-copy"></i></span> copy </button></li>
                            <li class="dropdown-item"> <button class="btn" onclick="remove()"><span><i class="fas fa-trash-alt"></i></span> delete </button></li>
                        </ul>
                </div>
                <div class="text-end py-2">
                    <button class="btn btn-close"></button>
                </div>
                </div>
                
                <textarea name="" id="Descripcion" cols="30" rows="7" placeholder="Tome una nota..."
                    class="bg_nota p-3"></textarea>
                <div class="config d-flex justify-content-between p-3">
                    <div class="d-flex gap-3">
                        <div><i class="fas fa-bold"></i></div>
                        <div><i class="fas fa-italic"></i></div>
                        <div><i class="fas fa-underline"></i></div>
                        <div><i class="fas fa-images"></i></div>
                    </div>
                    <div>${date}</div>
                </div>

            </div>`
}

function save() {
    let descript = document.getElementById("Descripcion").value;
    let nota = {
        "id": get_id(),
        "descripcion": descript,
        "fecha": date,
        "color": "#ffc107",
        "color_fuente": "#000000",
    }

    notas.push(nota)
    localStorage.setItem('notas', JSON.stringify(notas));
    

}

function update() {

}
function remove(id) {
   
}

function get_id() {
    return Math.floor(Math.random() * (10000000 - 1000000) + 1000000)
}

function listar() {
    localStorage.getItem('notas')
}