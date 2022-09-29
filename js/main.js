function parametro_num(parametros) {
    document.querySelector("#form_01").reset();
    favDialog.showModal();
    favDialog.dataset.ciclo = parametro;
}
function parametro_num(parametros) {
    document.querySelector("#form_09").reset();
    favDialog_09.showModal();
    favDialog_09.dataset.votos = parametros;
}
addEventListener("DOMContentLoaded", (e) => {
    const favDialog = document.getElementById('favDialog');
    const favDialog_09 = document.getElementById('favDialog_09');
    const favDialog_ejer02 = document.getElementById('favDialog_ejer02');
    const favDialog_ejer03 = document.getElementById('favDialog_ejer03');
    const favDialog_ejer05 = document.getElementById('favDialog_ejer05');
    const favDialog_ejer07 = document.getElementById('favDialog_ejer07');
    const favDialog_ejer08 = document.getElementById('favDialog_ejer08');
    let calcular_ejer1 = document.querySelector("#form_01");
    let formdialogo_ejer_1 = document.querySelector("#dialog");
    let calcular_ejer02 = document.querySelector("#btn_incio_ejer02");
    let formdialogo_ejer_02 = document.querySelector("#dialogo_02");
    let calcular_ejer03 = document.querySelector("#btn_incio_ejer03");
    let formdialogo_ejer_03 = document.querySelector("#dialogo_03");
    let calcular_ejer04 = document.querySelector("#btn_incio_ejer04");
    let calcular_ejer05 = document.querySelector("#btn_incio_ejer05");
    let formdialogo_ejer_05 = document.querySelector("#dialogo_05");
    let calcular_ejer06 = document.querySelector("#btn_incio_ejer06");
    let limpiar_ejer06 = document.querySelector("#btn_limpiar_ejer06");
    let calcular_ejer07 = document.querySelector("#btn_incio_ejer07");
    let formdialogo_ejer_07 = document.querySelector("#dialogo_07");
    let calcular_ejer08 = document.querySelector("#form_08");
    let formdialogo_ejer_08 = document.querySelector("#dialogo_08");
    let calcular_ejer9 = document.querySelector("#form_09");
    let formdialogo_ejer_9 = document.querySelector("#dialog_09");
    let count = 0;
    let cont = 1;
    let coun = 1;
    let sum_cali_huevo = 0;
    let dama = 1;
    let caballeros = 7;
    let A = 0, B = 0, C = 0;
    calcular_ejer1.addEventListener("submit", (e) => {
        e.preventDefault();
        let parametro = parseInt(document.querySelector("#parametro").value);
        parametro_num(parametro);
    });
    formdialogo_ejer_1.addEventListener("submit", (e) => {
        e.preventDefault();
        var resultado = document.querySelector("#text_resultado_ejer01");
        let num = Number(favDialog.dataset.ciclo);
        let data = Object.fromEntries(new FormData(e.target));
        let peso = Number(data.peso);
        let altura = Number(data.altura);
        let huevos = Number(data.huevos);
        console.log(data);
        let calidad = (peso * altura) / huevos;
        sum_cali_huevo += calidad;
        count++;
        num--;
        if (num) {
            formdialogo_ejer_1.reset();
            favDialog.dataset.ciclo = num;
            favDialog.close();
            setTimeout(() => {
                favDialog.showModal();
            }, 500);

        } else {
            formdialogo_ejer_1.reset();
            favDialog.close();
            let pro_kilo = sum_cali_huevo / count;
            let total = pro_kilo * 450;
            resultado.value = "EL presio del huevo por kilo es de: " + total;
        }
    });

    calcular_ejer02.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector("#dataTable_oprac").innerHTML = "";
        favDialog_ejer02.showModal();
    });
    formdialogo_ejer_02.addEventListener("submit", (e) => {
        e.preventDefault();
        let data = Object.fromEntries(new FormData(e.target))
        let num = Number(formdialogo_ejer_02.dataset.opreract);
        let num1 = Number(data.num_1);
        let num2 = Number(data.num_2);
        let sum = num1 + num2;
        let rest = num1 - num2;
        let mult = num1 * num2;
        let div = num1 / num2;
        let plantillas = `
            <tr>
                <td>${cont}</td>
                <td>${sum}</td>
                <td>${rest}</td>
                <td>${mult}</td>
                <td>${div}</td>
            </tr>`;
        document.querySelector("#dataTable_oprac").insertAdjacentHTML("beforeend", plantillas);
        if (num > cont) {
            formdialogo_ejer_02.reset();
            cont++;
        } else {
            favDialog_ejer02.close();
            formdialogo_ejer_02.reset();
            cont = 1;
        }
    });

    calcular_ejer03.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector("#dataTable").innerHTML = "";
        favDialog_ejer03.showModal();
    });
    formdialogo_ejer_03.addEventListener("submit", (e) => {
        e.preventDefault();
        let data = Object.fromEntries(new FormData(e.target))
        let num = Number(formdialogo_ejer_03.dataset.notas);
        let plantilla = `
            <tr>
                <td>${coun}</td>
                <td>${data.nom_estu}</td>
                <td>${data.ape_estu}</td>
                <td>${data.edad_estu}</td>
                <td>${data.calif_estu}</td>
            </tr>`;
        document.querySelector("#dataTable").insertAdjacentHTML("beforeend", plantilla);
        if (num > coun) {
            formdialogo_ejer_03.reset();
            coun++;
        } else {
            favDialog_ejer03.close();
            formdialogo_ejer_03.reset();
            coun = 1;
        }
    });

    calcular_ejer04.addEventListener("click", (e) => {
        e.preventDefault();
        let resultado = document.querySelector("#text_resultado_ejer04");

        while (dama + caballeros < 42) {
            dama += 1;
            caballeros += 1;
        }
        console.log(dama)
        resultado.value = "LAS DAMAS QUE HABIAN EN EL BAILE SON " + dama
            + "\nLOS CABALLEROS QUE ABIAN EN EL BAILE SON " + caballeros
    });

    calcular_ejer05.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector("#dataTable_examen").innerHTML = "";
        favDialog_ejer05.showModal();
    });
    formdialogo_ejer_05.addEventListener("submit", (e) => {
        e.preventDefault();
        let data = Object.fromEntries(new FormData(e.target))
        let num = Number(formdialogo_ejer_05.dataset.examen);
        let nom = data.nom_estu;
        let apell = data.ape_estu;
        let num1 = Number(data.nota1);
        let num2 = Number(data.nota2);
        let num3 = Number(data.nota3);
        let num4 = Number(data.nota4);
        let num5 = Number(data.nota5);
        let notapro = (num1 + num2 + num3 + num4 + num5) / 5
        if (notapro < 3) {
            let plantillas = `
            <tr>
                <td>${cont}</td>
                <td>${nom}</td>
                <td>${apell}</td>
                <td>${notapro}</td>
            </tr>`;
            document.querySelector("#dataTable_examen").insertAdjacentHTML("beforeend", plantillas);
        }
        if (num > cont) {
            formdialogo_ejer_05.reset();
            cont++;
        } else {
            favDialog_ejer05.close();
            formdialogo_ejer_05.reset();
            cont = 1;
        }
    });
    calcular_ejer06.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector("#dataTable_distancia").innerHTML = "";
        let ace_proy = 10;
        let ace_avi = 20;
        let vel_avion = 222.22;
        let vel_proy = 222.22;
        let dist = 0;
        let seg = 1;
        while (dist < 10000) {
            dist = Math.sqrt(Math.pow(vel_avion, 2) + Math.pow(vel_proy, 2));
            vel_avion += 20;
            vel_proy += 10;
            console.log(dist);
            let plantillas = `
            <tr>
                <td>${seg}</td>
                <td>${vel_avion}</td>
                <td>${vel_proy}</td>
            </tr>`;
            document.querySelector("#dataTable_distancia").insertAdjacentHTML("beforeend", plantillas);
            seg++;
        }
    });
    limpiar_ejer06.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector("#dataTable_distancia").innerHTML = "";
    });
    calcular_ejer07.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector("#dataTable_empleado").innerHTML = "";
        favDialog_ejer07.showModal();
    });
    formdialogo_ejer_07.addEventListener("submit", (e) => {
        e.preventDefault();
        let data = Object.fromEntries(new FormData(e.target))
        let num = Number(formdialogo_ejer_07.dataset.empleado);
        let nom = data.nom_vend;
        let sueldo_b = Number(data.sueldo_base);
        let ven1 = Number(data.venta1);
        let ven2 = Number(data.venta2);
        let ven3 = Number(data.venta3);
        let com1 = (ven1 * 10) / 100;
        let com2 = (ven2 * 10) / 100;
        let com3 = (ven3 * 10) / 100;
        sul_t = sueldo_b + com1 + com2 + com3;
        let plantillas = `
            <tr>
                <td>${cont}</td>
                <td>${nom}</td>
                <td>${sueldo_b}</td>
                <td>${com1}</td>
                <td>${com2}</td>
                <td>${com3}</td>
                <td>${sul_t}</td>
            </tr>`;
        document.querySelector("#dataTable_empleado").insertAdjacentHTML("beforeend", plantillas);
        if (num > cont) {
            formdialogo_ejer_07.reset();
            cont++;
        } else {
            favDialog_ejer07.close();
            formdialogo_ejer_07.reset();
            cont = 1;
        }
    });

    calcular_ejer08.addEventListener("submit", (e) => {
        e.preventDefault();
        document.querySelector("#dataTable_prueva").innerHTML = "";
        favDialog_ejer08.showModal();
    });
    formdialogo_ejer_08.addEventListener("submit", (e) => {
        e.preventDefault();
        let cred_fund = parseInt(document.querySelector("#cred_fund").value);
        let cred_bd = parseInt(document.querySelector("#cred_bd").value);
        let cred_etc = parseInt(document.querySelector("#cred_etc").value);
        let data = Object.fromEntries(new FormData(e.target));
        let num = Number(formdialogo_ejer_08.dataset.notas);
        let nom = data.nom_estud;
        let not_fund = Number(data.not_funt);
        let not_bd = Number(data.not_base);
        let not_etc = Number(data.not_etc);

        let notfin_fund = (not_fund * cred_fund);
        let notfin_bd = (not_bd * cred_bd);
        let notfin_etc = (not_etc * cred_etc);
        let prom_pond = (notfin_fund + notfin_bd + notfin_etc) / 3;
        let plantillas = `
            <tr>
                <td>${cont}</td>
                <td>${nom}</td>
                <td>${prom_pond}</td>
            </tr>`;
        document.querySelector("#dataTable_prueva").insertAdjacentHTML("beforeend", plantillas);
        if (num > cont) {
            formdialogo_ejer_08.reset();
            cont++;
        } else {
            favDialog_ejer08.close();
            formdialogo_ejer_08.reset();
            cont = 1;
        }
    });

    calcular_ejer9.addEventListener("submit", (e) => {
        e.preventDefault();
        let parametros = parseInt(document.querySelector("#parametro_09").value);
        parametro_num(parametros);
    });
    formdialogo_ejer_9.addEventListener("submit", (e) => {
        e.preventDefault();
        var resultado = document.querySelector("#text_resultado_ejer09");
        let num = Number(favDialog_09.dataset.votos);
        let data = Object.fromEntries(new FormData(e.target));
        let num1 = Number(data.num_ejer9);
        if(num1 == 1){

        }else if(num1 == 2){

        }else if(num1 == 3)
        num--;
        if (num) {
            formdialogo_ejer_9.reset();
            favDialog_09.dataset.ciclo = num;
            favDialog_09.close();
            setTimeout(() => {
                favDialog_09.showModal();
            }, 500);

        } else {
            formdialogo_ejer_9.reset();
            favDialog_09.close();
        }
    });
});