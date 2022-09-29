function parametro_num(parametro) {
    document.querySelector("#form_01").reset();
    favDialog.showModal();
    favDialog.dataset.ciclo = parametro;
}
function parametros(parametros_votos){
    document.querySelector("#form_09").reset();
    console.log(parametros_votos);
    favDialog_09.showModal();
    favDialog_09.dataset.votos = parametros_votos;
}
function parametro_trans(parametros_plac) {
    document.querySelector("#dataTable_calco").innerHTML = "";
    document.querySelector("#form_11").reset();
    favDialog_11.showModal();
    favDialog_11.dataset.placas = parametros_plac;
}
function parametros2(parametros_votos2){
    document.querySelector("#form_12").reset();
    favDialog_12.showModal();
    favDialog_12.dataset.votos2 = parametros_votos2;
}
addEventListener("DOMContentLoaded", (e) => {
    const favDialog = document.getElementById('favDialog');
    const favDialog_09 = document.getElementById('favDialog_09');
    const favDialog_11 = document.getElementById('favDialog_11');
    const favDialog_ejer02 = document.getElementById('favDialog_ejer02');
    const favDialog_ejer03 = document.getElementById('favDialog_ejer03');
    const favDialog_ejer05 = document.getElementById('favDialog_ejer05');
    const favDialog_ejer07 = document.getElementById('favDialog_ejer07');
    const favDialog_ejer08 = document.getElementById('favDialog_ejer08');
    const favDialog_ejer10 = document.getElementById('favDialog_ejer10');
    const favDialog_12 = document.getElementById('favDialog_12');

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
    let calcular_ejer10 = document.querySelector("#btn_incio_ejer10");
    let formdialogo_ejer_10 = document.querySelector("#dialogo_10");
    let calcular_ejer11 = document.querySelector("#form_11");
    let formdialogo_ejer_11 = document.querySelector("#dialogo_11");
    let calcular_ejer12 = document.querySelector("#form_12");
    let formdialogo_ejer_12 = document.querySelector("#dialog_12");
    let count = 0;
    let cont = 1;
    let coun = 1;
    let sum_cali_huevo = 0;
    let dama = 1;
    let caballeros = 7;
    let A = 0, B = 0, C = 0;
    let num_votos = 0;
    let por_vot = (num_votos * 0.51);
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
        let parametros_votos = parseInt(document.querySelector("#parametros_09").value);
        parametros(parametros_votos);
    });
    formdialogo_ejer_9.addEventListener("submit", (e) => {
        e.preventDefault();
        var resultado = document.querySelector("#text_resultado_ejer09");
        let num = Number(favDialog_09.dataset.votos);
        let data = Object.fromEntries(new FormData(e.target));
        let num1 = Number(data.num_ejer9);
        if (num1 == 1) {
            A++;
        } else if (num1 == 2) {
            B++;
        } else if (num1 == 3) {
            C++;
        }
        num_votos++;
        num--;
        if (num) {
            formdialogo_ejer_9.reset();
            favDialog_09.dataset.votos = num;
            favDialog_09.close();
            setTimeout(() => {
                favDialog_09.showModal();
            }, 500);

        } else {
            formdialogo_ejer_9.reset();
            favDialog_09.close();
            let pa = A * 0.51;
            let pb = B * 0.51;
            let pc = C * 0.51;
            if (A > B && A > C) {
                if (pa >= por_vot) {
                    resultado.value = "EL CANDIDATO A GANA LAS ELECCIONES CON " + A + " BOTOS";
                }
            } else if (B > A && B > C) {
                if (pb >= por_vot) {
                    resultado.value = "EL CANDIDATO B GANA LAS ELECCIONES CON " + B + " BOTOS";
                }
            } else if (C > A && C > B) {
                if (pc >= por_vot) {
                    resultado.value = "EL CANDIDATO C GANA LAS ELECCIONES CON " + C + " BOTOS";
                }
            } else {
                resultado.value = "SE DEVE REALISAR UNA SEGUNDA BUELTA ", "\n";
            }
            A = 0, B = 0, C = 0;
        }
    });
    calcular_ejer10.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector("#dataTable_transito").innerHTML = "";
        favDialog_ejer10.showModal();
    });
    let turismo = 0;
    let autobus = 0;
    let camion = 0;
    let motocicleta = 0;
    formdialogo_ejer_10.addEventListener("submit", (e) => {
        e.preventDefault();
        let num = Number(formdialogo_ejer_10.dataset.transito);
        let opc = document.querySelector("#vehiculo").value;
        if (opc == "Turismo") {
            turismo++;
        } else if (opc == "Autobús") {
            autobus++;
        } else if (opc == "Camión") {
            camion++;
        } else if (opc == "Motocicleta") {
            motocicleta++;
        }

        if (num > cont) {
            formdialogo_ejer_10.reset();
            cont++;
        } else {
            favDialog_ejer10.close();
            formdialogo_ejer_10.reset();
            if (turismo >= 0) {
                let plantillas = `
            <tr>
                <td>${1}</td>
                <td>${'Turismo'}</td>
                <td>${turismo}</td>
            </tr>`;
                document.querySelector("#dataTable_transito").insertAdjacentHTML("beforeend", plantillas);
            }
            if (autobus >= 0) {
                let plantillas = `
            <tr>
                <td>${2}</td>
                <td>${'Autobús'}</td>
                <td>${autobus}</td>
            </tr>`;
                document.querySelector("#dataTable_transito").insertAdjacentHTML("beforeend", plantillas);
            }
            if (camion >= 0) {
                let plantillas = `
            <tr>
                <td>${3}</td>
                <td>${'Camión'}</td>
                <td>${camion}</td>
            </tr>`;
                document.querySelector("#dataTable_transito").insertAdjacentHTML("beforeend", plantillas);
            }
            if (motocicleta >= 0) {
                let plantillas = `
            <tr>
                <td>${4}</td>
                <td>${'Motocicleta'}</td>
                <td>${motocicleta}</td>
            </tr>`;
                document.querySelector("#dataTable_transito").insertAdjacentHTML("beforeend", plantillas);
            }
            cont = 1;
        }
    });
    let placas_1_2 = 0;
    let placas_3_4 = 0;
    let placas_5_6 = 0;
    let placas_7_8 = 0;
    let placas_9_0 = 0;
    calcular_ejer11.addEventListener("submit", (e) => {
        e.preventDefault();
        let parametros_plac = parseInt(document.querySelector("#parametro_placas").value);
        parametro_trans(parametros_plac);
    });
    formdialogo_ejer_11.addEventListener("submit", (e) => {
        e.preventDefault();
        let num = Number(favDialog_11.dataset.placas);
        let data = Object.fromEntries(new FormData(e.target));
        let placa = Number(data.num_placa);
        if(placa == 1 || placa == 2){
            placas_1_2++;
        }else if(placa == 3 || placa == 4){
            placas_3_4++;
        }else if(placa == 5 || placa == 6){
            placas_5_6++;
        }else if(placa == 7 || placa == 8){
            placas_7_8++;
        }else if(placa == 9 || placa == 0){
            placas_9_0++;
        }
        num--;
        if (num) {
            formdialogo_ejer_11.reset();
            favDialog_11.dataset.placas = num;
            favDialog_11.close();
            setTimeout(() => {
                favDialog_11.showModal();
            }, 500);

        } else {
            formdialogo_ejer_11.reset();
            favDialog_11.close();
            let plantillas = `
            <tr>
                <td>${1}</td>
                <td>${'Amarillo'}</td>
                <td>${'1 o 2'}</td>
                <td>${placas_1_2}</td>
            </tr>
            <tr>
                <td>${2}</td>
                <td>${'Rosa'}</td>
                <td>${'3 o 4'}</td>
                <td>${placas_3_4}</td>
            </tr>
            <tr>
                <td>${3}</td>
                <td>${'Roja'}</td>
                <td>${'5 o 6'}</td>
                <td>${placas_5_6}</td>
            </tr>
            <tr>
                <td>${4}</td>
                <td>${'Verde'}</td>
                <td>${'7 o 8'}</td>
                <td>${placas_7_8}</td>
            </tr>
            <tr>
                <td>${5}</td>
                <td>${'Azul'}</td>
                <td>${'9 o 0'}</td>
                <td>${placas_9_0}</td>
            </tr>
            `
            ;
            document.querySelector("#dataTable_calco").insertAdjacentHTML("beforeend", plantillas);
        }
    });

    calcular_ejer12.addEventListener("submit", (e) => {
        e.preventDefault();
        let parametros_votos2 = parseInt(document.querySelector("#parametros_12").value);
        parametros2(parametros_votos2);
    });
    formdialogo_ejer_12.addEventListener("submit", (e) => {
        e.preventDefault();
        var resultado = document.querySelector("#text_resultado_ejer12");
        let num = Number(favDialog_12.dataset.votos2);
        let data = Object.fromEntries(new FormData(e.target));
        let num1 = Number(data.num_ejer12);
        if (num1 == 1) {
            A++;
        } else if (num1 == 2) {
            B++;
        } else if (num1 == 3) {
            C++;
        }
        num_votos++;
        num--;
        if (num) {
            formdialogo_ejer_12.reset();
            favDialog_12.dataset.votos2 = num;
            favDialog_12.close();
            setTimeout(() => {
                favDialog_12.showModal();
            }, 500);

        } else {
            formdialogo_ejer_12.reset();
            favDialog_12.close();
            let pa = A * 0.51;
            let pb = B * 0.51;
            let pc = C * 0.51;
            if (A > B && A > C) {
                if (pa >= por_vot) {
                    resultado.value = "EL CANDIDATO A GANA LAS ELECCIONES CON " + A + " BOTOS";
                }
            } else if (B > A && B > C) {
                if (pb >= por_vot) {
                    resultado.value = "EL CANDIDATO B GANA LAS ELECCIONES CON " + B + " BOTOS";
                }
            } else if (C > A && C > B) {
                if (pc >= por_vot) {
                    resultado.value = "EL CANDIDATO C GANA LAS ELECCIONES CON " + C + " BOTOS";
                }
            } else {
                resultado.value = "SE DEVE REALISAR UNA SEGUNDA BUELTA ", "\n";
            }
            A = 0, B = 0, C = 0;
        }
    });
});