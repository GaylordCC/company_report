import React, { useEffect} from "react";
import './__style__/bodyReport.css';
import hmm from "./imagen/hmm.jpg";
import analizador from "./imagen/analizador.jpg";
import puntoConexion from "./imagen/puntoConexion.jpg";
import variacionTension from "./imagen/variacionTension.jpg";
import LineChart2 from "../chart/LineChart2";
import { getReport } from '../../controllers/lineCharts';

const BodyReport = () => {  

    const [id, setId] = React.useState(null);
    const [u1, setU_1] = React.useState("");
    const [u2, setU_2] = React.useState("");
    const [u3, setU_3] = React.useState("");
    const [h1, setHora] = React.useState("");
    const [P5_u1, setP5_u1] = React.useState("");
    const [D_u1, setD_u1] = React.useState("");
    const [D_u2, setD_u2] = React.useState("");
    const [D_u3, setD_u3] = React.useState("");
    const [D_i1, setD_i1] = React.useState("");
    const [D_i2, setD_i2] = React.useState("");
    const [D_i3, setD_i3] = React.useState("");
    const [i1, seti1] = React.useState("");
    const [i2, seti2] = React.useState("");
    const [i3, seti3] = React.useState("");
    const [In, setIn] = React.useState("");
    const [uper, setUper] = React.useState("");
    const [iper, setIper] = React.useState("");
    const [f, setF] = React.useState("");
    const [pf_i, setPf_i] = React.useState("");
    const [pa, setPa] = React.useState("");
    const [pr, setPr] = React.useState("");
    const [eqm, setEqm] = React.useState("");
    const [ct, setCt] = React.useState("");
    const [ind, setInd] = React.useState("");
    const [fd, setFd] = React.useState("");
    const [fa, setFa] = React.useState("");
    const [u_1_min, setU_1_min] = React.useState("");
    const [u_1_max, setU_1_max] = React.useState("");
    const [u_1_prom, setU_1_prom] = React.useState("");
    var n1pro = Number(u_1_prom);
    let prom_u1 = n1pro.toFixed(2);
    const [u_2_min, setU_2_min] = React.useState("");
    const [u_2_max, setU_2_max] = React.useState("");
    const [u_2_prom, setU_2_prom] = React.useState("");
    var n2pro = Number(u_2_prom);
    let prom_u2 = n2pro.toFixed(2);
    const [u_3_min, setU_3_min] = React.useState("");
    const [u_3_max, setU_3_max] = React.useState("");
    const [u_3_prom, setU_3_prom] = React.useState("");
    var n3pro = Number(u_3_prom);
    let prom_u3 = n3pro.toFixed(2);
    const [I_1_min, setI_1_min] = React.useState("");
    const [I_1_max, setI_1_max] = React.useState("");
    const [I_1_prom, setI_1_prom] = React.useState("");
    var n4pro = Number(I_1_prom);
    let prom_I1 = n4pro.toFixed(2);
    const [I_2_min, setI_2_min] = React.useState("");
    const [I_2_max, setI_2_max] = React.useState("");
    const [I_2_prom, setI_2_prom] = React.useState("");
    var n5pro = Number(I_2_prom);
    let prom_I2 = n5pro.toFixed(2);
    const [I_3_min, setI_3_min] = React.useState("");
    const [I_3_max, setI_3_max] = React.useState("");
    const [I_3_prom, setI_3_prom] = React.useState("");
    var n6pro = Number(I_3_prom);
    let prom_I3 = n6pro.toFixed(2);
    const [p_fetot_ind_min, setP_fetot_ind_min] = React.useState("");
    const [p_fetot_ind_max, setP_fetot_ind_max] = React.useState("");
    var n7pro = Number(p_fetot_ind_max);
    let fp_max = n7pro.toFixed(2);
    const [p_fetot_ind_prom, setP_fetot_ind_prom] = React.useState("");
    var n8pro = Number(p_fetot_ind_prom);
    let fp_prom = n8pro.toFixed(2);
    const [p_fund_tot_min, setP_fund_tot_min] = React.useState("");
    const [p_fund_tot_max, setP_fund_tot_max] = React.useState("");
    const [p_fund_tot_prom, setP_fund_tot_prom] = React.useState("");
    var n9pro = Number(p_fund_tot_prom);
    let pa_prom = n9pro.toFixed(2);
    const [q_tot_ind_min, setQ_tot_ind_min] = React.useState("");
    const [q_tot_ind_max, setQ_tot_ind_max] = React.useState("");
    const [q_tot_ind_prom, setQ_tot_ind_prom] = React.useState("");
    var n10pro = Number(q_tot_ind_prom);
    let pr_prom = n10pro.toFixed(2);

    const [u_1_percentil_99, setU_1_percentil_99] = React.useState("");
    const [u_1_percentil_95, setU_1_percentil_95] = React.useState("");
    const [u_1_percentil_5, setU_1_percentil_5] = React.useState("");
    
    const [u_2_percentil_99, setU_2_percentil_99] = React.useState("");
    const [u_2_percentil_95, setU_2_percentil_95] = React.useState("");
    const [u_2_percentil_5, setU_2_percentil_5] = React.useState("");
    
    const [u_3_percentil_99, setU_3_percentil_99] = React.useState("");
    const [u_3_percentil_95, setU_3_percentil_95] = React.useState("");
    const [u_3_percentil_5, setU_3_percentil_5] = React.useState("");
    
    const [I_1_percentil_99, setI_1_percentil_99] = React.useState("");
    const [I_1_percentil_95, setI_1_percentil_95] = React.useState("");
    const [I_1_percentil_5, setI_1_percentil_5] = React.useState("");

    const [I_2_percentil_99, setI_2_percentil_99] = React.useState("");
    const [I_2_percentil_95, setI_2_percentil_95] = React.useState("");
    const [I_2_percentil_5, setI_2_percentil_5] = React.useState("");
    
    const [I_3_percentil_99, setI_3_percentil_99] = React.useState("");
    const [I_3_percentil_95, setI_3_percentil_95] = React.useState("");
    const [I_3_percentil_5, setI_3_percentil_5] = React.useState("");
    
    const [p_fetot_ind_percentil_99, setP_fetot_ind_percentil_99] = React.useState("");
    const [p_fetot_ind_percentil_95, setP_fetot_ind_percentil_95] = React.useState("");
    const [p_fetot_ind_percentil_5, setP_fetot_ind_percentil_5] = React.useState("");
    
    const [p_fund_tot_percentil_99, setP_fund_tot_percentil_99] = React.useState("");
    const [p_fund_tot_percentil_95, setP_fund_tot_percentil_95] = React.useState("");
    const [p_fund_tot_percentil_5, setP_fund_tot_percentil_5] = React.useState("");
    
    const [q_tot_ind_percentil_99, setQ_tot_ind_percentil_99] = React.useState("");
    const [q_tot_ind_percentil_95, setQ_tot_ind_percentil_95] = React.useState("");
    const [q_tot_ind_percentil_5, setQ_tot_ind_percentil_5] = React.useState("");
    
    const [unom, setUnom] = React.useState("");

    const [u_percent_min, setU_percent_min] = React.useState("");
    const [u_percent_max, setU_percent_max] = React.useState("");
    const [u_percent_prom, setU_percent_prom] = React.useState("");
    const [u_percent_percentil_99, setU_percent_percentil_99] = React.useState("");
    const [u_percent_percentil_95, setU_percent_percentil_95] = React.useState("");
    const [u_percent_percentil_5, setU_percent_percentil_5] = React.useState("");
    
    const [i_percent_min, setI_percent_min] = React.useState("");
    const [i_percent_max, setI_percent_max] = React.useState("");
    const [i_percent_prom, setI_percent_prom] = React.useState("");
    const [i_percent_percentil_99, setI_percent_percentil_99] = React.useState("");
    const [i_percent_percentil_95, setI_percent_percentil_95] = React.useState("");
    const [i_percent_percentil_5, setI_percent_percentil_5] = React.useState("");
    
    const [thd_u_1_min, setThd_u_1_min] = React.useState("");
    const [thd_u_1_max, setThd_u_1_max] = React.useState("");
    const [thd_u_1_prom, setThd_u_1_prom] = React.useState("");
    var n11pro = Number(thd_u_1_prom);
    let DT1_prom = n11pro.toFixed(2);
    const [thd_u_1_percentil_99, setThd_u_1_percentil_99] = React.useState("");
    const [thd_u_1_percentil_95, setThd_u_1_percentil_95] = React.useState("");
    const [thd_u_1_percentil_5, setThd_u_1_percentil_5] = React.useState("");
    
    const [thd_u_2_min, setThd_u_2_min] = React.useState("");
    const [thd_u_2_max, setThd_u_2_max] = React.useState("");
    const [thd_u_2_prom, setThd_u_2_prom] = React.useState("");
    var n12pro = Number(thd_u_2_prom);
    let DT2_prom = n12pro.toFixed(2);
    const [thd_u_2_percentil_99, setThd_u_2_percentil_99] = React.useState("");
    const [thd_u_2_percentil_95, setThd_u_2_percentil_95] = React.useState("");
    const [thd_u_2_percentil_5, setThd_u_2_percentil_5] = React.useState("");
    
    const [thd_u_3_min, setThd_u_3_min] = React.useState("");
    const [thd_u_3_max, setThd_u_3_max] = React.useState("");
    const [thd_u_3_prom, setThd_u_3_prom] = React.useState("");
    var n13pro = Number(thd_u_3_prom);
    let DT3_prom = n13pro.toFixed(2);
    const [thd_u_3_percentil_99, setThd_u_3_percentil_99] = React.useState("");
    const [thd_u_3_percentil_95, setThd_u_3_percentil_95] = React.useState("");
    const [thd_u_3_percentil_5, sethd_u_3_percentil_5] = React.useState("");
    
    const [thd_i_1_min, setThd_i_1_min] = React.useState("");
    const [thd_i_1_max, setThd_i_1_max] = React.useState("");
    const [thd_i_1_prom, setThd_i_1_prom] = React.useState("");
    var n14pro = Number(thd_i_1_prom);
    let DI1_prom = n14pro.toFixed(2);
    const [thd_i_1_percentil_99, setThd_i_1_percentil_99] = React.useState("");
    const [thd_i_1_percentil_95, setThd_i_1_percentil_95] = React.useState("");
    const [thd_i_1_percentil_5, setThd_i_1_percentil_5] = React.useState("");
    
    const [thd_i_2_min, setThd_i_2_min] = React.useState("");
    const [thd_i_2_max, setThd_i_2_max] = React.useState("");
    const [thd_i_2_prom, setThd_i_2_prom] = React.useState("");
    var n15pro = Number(thd_i_2_prom);
    let DI2_prom = n15pro.toFixed(2);
    const [thd_i_2_percentil_99, setThd_i_2_percentil_99] = React.useState("");
    const [thd_i_2_percentil_95, setThd_i_2_percentil_95] = React.useState("");
    const [thd_i_2_percentil_5, setThd_i_2_percentil_5] = React.useState("");
    
    const [thd_i_3_min, setThd_i_3_min] = React.useState("");
    const [thd_i_3_max, setThd_i_3_max] = React.useState("");
    const [thd_i_3_prom, setThd_i_3_prom] = React.useState("");
    var n16pro = Number(thd_i_3_prom);
    let DI3_prom = n16pro.toFixed(2);
    const [thd_i_3_percentil_99, setThd_i_3_percentil_99] = React.useState("");
    const [thd_i_3_percentil_95, setThd_i_3_percentil_95] = React.useState("");
    const [thd_i_3_percentil_5, setThd_i_3_percentil_5] = React.useState("");





    const fetchChart = async (id) =>{
    const { succes, data } = await getReport(id);

        if (succes) {
            setU_1(data.u1)
            setU_2(data.u2)
            setU_3(data.u3)
            setHora(data.h1)
            setP5_u1(data.P5_u1)
            setD_u1(data.D_u1)
            setD_u2(data.D_u2)
            setD_u3(data.D_u3)
            setD_i1(data.D_i1)
            setD_i2(data.D_i2)
            setD_i3(data.D_i3)
            seti1(data.i1)
            seti2(data.i2)
            seti3(data.i3)
            setIn(data.In)
            setUper(data.uper)
            setIper(data.iper)
            setF(data.f)
            setPf_i(data.pf_i)
            setPa(data.pa)
            setPr(data.pr)
            setEqm(data.eqm)
            setCt(data.ct)
            setInd(data.ind)
            setFd(data.fd)
            setFa(data.fa)
            setU_1_min(data.indic.u_1_min)
            setU_1_max(data.indic.u_1_max)
            setU_1_prom(data.indic.u_1_prom)
            setU_2_min(data.indic.u_2_min)
            setU_2_max(data.indic.u_2_max)
            setU_2_prom(data.indic.u_2_prom)
            setU_3_min(data.indic.u_3_min)
            setU_3_max(data.indic.u_3_max)
            setU_3_prom(data.indic.u_3_prom)
            setI_1_min(data.indic.I_1_min)
            setI_1_max(data.indic.I_1_max)
            setI_1_prom(data.indic.I_1_prom)
            setI_2_min(data.indic.I_2_min)
            setI_2_max(data.indic.I_2_max)
            setI_2_prom(data.indic.I_2_prom)
            setI_3_min(data.indic.I_3_min)
            setI_3_max(data.indic.I_3_max)
            setI_3_prom(data.indic.I_3_prom)
            setP_fetot_ind_min(data.indic.p_fetot_ind_min)
            setP_fetot_ind_max(data.indic.p_fetot_ind_max)
            setP_fetot_ind_prom(data.indic.p_fetot_ind_prom)
            setP_fund_tot_min(data.indic.p_fund_tot_min)
            setP_fund_tot_max(data.indic.p_fund_tot_max)
            setP_fund_tot_prom(data.indic.p_fund_tot_prom)
            setQ_tot_ind_min(data.indic.q_tot_ind_min)
            setQ_tot_ind_max(data.indic.q_tot_ind_max)
            setQ_tot_ind_prom(data.indic.q_tot_ind_prom)
            setU_1_percentil_99(data.indic.u_1_percentil_99)
            setU_1_percentil_95(data.indic.u_1_percentil_95)
            setU_1_percentil_5(data.indic.u_1_percentil_5)
            setU_2_percentil_99(data.indic.u_2_percentil_99)
            setU_2_percentil_95(data.indic.u_2_percentil_95)
            setU_2_percentil_5(data.indic.u_2_percentil_5)
            setU_3_percentil_99(data.indic.u_3_percentil_99)
            setU_3_percentil_95(data.indic.u_3_percentil_95)
            setU_3_percentil_5(data.indic.u_3_percentil_5)
            setI_1_percentil_99(data.indic.I_1_percentil_99)
            setI_1_percentil_95(data.indic.I_1_percentil_95)
            setI_1_percentil_5(data.indic.I_1_percentil_5)
            setI_2_percentil_99(data.indic.I_2_percentil_99)
            setI_2_percentil_95(data.indic.I_2_percentil_95)
            setI_2_percentil_5(data.indic.I_2_percentil_5)
            setI_3_percentil_99(data.indic.I_3_percentil_99)
            setI_3_percentil_95(data.indic.I_3_percentil_95)
            setI_3_percentil_5(data.indic.I_3_percentil_5)
            setP_fetot_ind_percentil_99(data.indic.p_fetot_ind_percentil_99)
            setP_fetot_ind_percentil_95(data.indic.p_fetot_ind_percentil_95)
            setP_fetot_ind_percentil_5(data.indic.p_fetot_ind_percentil_5)
            setP_fund_tot_percentil_99(data.indic.p_fund_tot_percentil_99)
            setP_fund_tot_percentil_95(data.indic.p_fund_tot_percentil_95)
            setP_fund_tot_percentil_5(data.indic.p_fund_tot_percentil_5)
            setQ_tot_ind_percentil_99(data.indic.q_tot_ind_percentil_99)
            setQ_tot_ind_percentil_95(data.indic.q_tot_ind_percentil_95)
            setQ_tot_ind_percentil_5(data.indic.q_tot_ind_percentil_5)
            setUnom(data.unom)

            setU_percent_min(data.indic.u_percent_min)
            setU_percent_max(data.indic.u_percent_max)
            setU_percent_prom(data.indic.u_percent_prom)
            setU_percent_percentil_99(data.indic.u_percent_percentil_99)
            setU_percent_percentil_95(data.indic.u_percent_percentil_95)
            setU_percent_percentil_5(data.indic.u_percent_percentil_5)
            
            setI_percent_min(data.indic.i_percent_min)
            setI_percent_max(data.indic.i_percent_max)
            setI_percent_prom(data.indic.i_percent_prom)
            setI_percent_percentil_99(data.indic.i_percent_percentil_99)
            setI_percent_percentil_95(data.indic.i_percent_percentil_95)
            setI_percent_percentil_5(data.indic.i_percent_percentil_5)
            
            setThd_u_1_min(data.indic.thd_u_1_min)
            setThd_u_1_max(data.indic.thd_u_1_max)
            setThd_u_1_prom(data.indic.thd_u_1_prom)
            setThd_u_1_percentil_99(data.indic.thd_u_1_percentil_99)
            setThd_u_1_percentil_95(data.indic.thd_u_1_percentil_95)
            setThd_u_1_percentil_5(data.indic.thd_u_1_percentil_5)
            
            setThd_u_2_min(data.indic.thd_u_2_min)
            setThd_u_2_max(data.indic.thd_u_2_max)
            setThd_u_2_prom(data.indic.thd_u_2_prom)
            setThd_u_2_percentil_99(data.indic.thd_u_2_percentil_99)
            setThd_u_2_percentil_95(data.indic.thd_u_2_percentil_95)
            setThd_u_2_percentil_5(data.indic.thd_u_2_percentil_5)
            
            setThd_u_3_min(data.indic.thd_u_3_min)
            setThd_u_3_max(data.indic.thd_u_3_max)
            setThd_u_3_prom(data.indic.thd_u_3_prom)
            setThd_u_3_percentil_99(data.indic.thd_u_3_percentil_99)
            setThd_u_3_percentil_95(data.indic.thd_u_3_percentil_95)
            sethd_u_3_percentil_5(data.indic.thd_u_3_percentil_5)
            
            setThd_i_1_min(data.indic.thd_i_1_min)
            setThd_i_1_max(data.indic.thd_i_1_max)
            setThd_i_1_prom(data.indic.thd_i_1_prom)
            setThd_i_1_percentil_99(data.indic.thd_i_1_percentil_99)
            setThd_i_1_percentil_95(data.indic.thd_i_1_percentil_95)
            setThd_i_1_percentil_5(data.indic.thd_i_1_percentil_5)
            
            setThd_i_2_min(data.indic.thd_i_2_min)
            setThd_i_2_max(data.indic.thd_i_2_max)
            setThd_i_2_prom(data.indic.thd_i_2_prom)
            setThd_i_2_percentil_99(data.indic.thd_i_2_percentil_99)
            setThd_i_2_percentil_95(data.indic.thd_i_2_percentil_95)
            setThd_i_2_percentil_5(data.indic.thd_i_2_percentil_5)
            
            setThd_i_3_min(data.indic.thd_i_3_min)
            setThd_i_3_max(data.indic.thd_i_3_max)
            setThd_i_3_prom(data.indic.thd_i_3_prom)
            setThd_i_3_percentil_99(data.indic.thd_i_3_percentil_99)
            setThd_i_3_percentil_95(data.indic.thd_i_3_percentil_95)
            setThd_i_3_percentil_5(data.indic.thd_i_3_percentil_5)

         }
    }

    useEffect(()=> {
        const params = new URLSearchParams(window.location.search)
        var paramsId = window.location.pathname.toString().split("/").pop()
        if(paramsId) {
            setId(paramsId);
            fetchChart(paramsId);
        }
    }, [])

    return (
        <div>
            <div className="first-wrapper">
                <div className="header">
                    <img className="headerimag" src={hmm} />
                    <h3>NIT: 901407950-9</h3>
                </div>
                <div className="structureReport">
                    <h1 className="title">Titulo 01 del Informe </h1>
                    <h2 className="subtitle">Titulo 02 del Informe </h2>
                    <h3 className="connection-point">Punto de Conexión: </h3>
                    <h3>Equipo:</h3>
                    <h3>Fecha de Elaboración:</h3>
                    <h3>Elaboro por:</h3>
                    <h3>Revisado por:</h3>
                    <h3>Cliente Responsable:</h3>
                    <h3>Ciudad</h3>
                    <h3>Departamento</h3>
                    <h3>Año</h3>
                </div>
                <div className="footer">
                    <h3>HMM Ingeniería SAS </h3>
                    <h3>Calle 57 # 41B-54 Barranquilla Colombia </h3>
                    <h3>WWW.HMMINGENIERIA.COM</h3>
                </div>
            </div>
            <div className="wrapper-CT">
                <h1 className="content-table"> Tabla de Contenido</h1>
                <h2 className="contentsubtitle-TC"> 1. MEDICIONES.</h2>
                <h2 className="contentsubtitle-TC"> 2. CONCEPTOS.</h2>
                <h2 className="contentsubtitle-TC"> 3. EQUIPO DE MEDIDA UTILIZADO.</h2>
                <h2 className="contentsubtitle-TC"> 4. CRITERIOS DE SEGURIDAD UTILIZADOS.</h2>
                <h2 className="contentsubtitle-TC"> 5. PUNTO DE MEDICIÓN.</h2>
                <h2 className="contentsubtitle-TC"> 4. CRITERIOS DE SEGURIDAD UTILIZADOS.</h2>
                <h2 className="contentsubtitle-TC"> 6. RESULTADO DE LAS MEDIDAS.</h2>
                <h3 className="contentsubtitle-TC"> 6.1 Regulación de tensión.</h3>
                <h3 className="contentsubtitle-TC"> 6.2 Desbalance de tensión.</h3>
                <h3 className="contentsubtitle-TC"> 6.3 Desequilibrio de corriente.</h3>
                <h3 className="contentsubtitle-TC"> 6.3.1 Gráfico de corrientes.</h3>
                <h3 className="contentsubtitle-TC"> 6.3.2 Distorsiones Armónicas (THD).</h3>
                <h3 className="contentsubtitle-TC"> 6.3.3 Distorsiones en Voltaje (TDDV).</h3>
                <h3 className="contentsubtitle-TC"> 6.3.4 Distorsiones en Corrientes (TDDI).</h3>
                <h3 className="contentsubtitle-TC"> 6.4 Factor de Potencia.</h3>
                <h3 className="contentsubtitle-TC"> 6.5 Frecuencia.</h3>
                <h3 className="contentsubtitle-TC"> 6.6 Potencias.</h3>
                <h3 className="contentsubtitle-TC"> 6.7 Cargabilidad.</h3>
                <h3 className="contentsubtitle-TC"> 6.8 Anomalías.</h3>
                <h2 className="contentsubtitle-TC"> 7. CARGABILIDAD.</h2>
                <h2 className="contentsubtitle-TC"> 8. CONCLUSIONES.</h2>
            </div>
            <div className="wrapper">
                <h2 className="tittlepage"> 1. MEDICIONES.</h2>
                <p className="paragraph"> Contar con una energía de calidad permitirá minimizar las fallas de 
                    alimentación eléctrica aumentando la confiabilidad y optimizando la productividad de las empresas. <br/>
                    Cuando se posee una infraestructura eléctrica que garantice una adecuada calidad de la potencia se 
                    obtienen beneficios complementarios y que se cuenta con instalaciones seguras que minimizan riesgos 
                    eléctricos para personas y equipos.
                </p>
                <h3 className="contentsubtitle"> 1.1 Registro de Parámetros Eléctricos.</h3>
                <ul className="paragraph">
                    <li> Frecuencia.  </li>
                    <li> Tensión (Voltaje).  </li>
                    <li> Corriente.  </li>
                    <li> Potencia (Estudio de Carga).  </li>
                    <li> Factor de Potencia.  </li>
                    <li> Desbalance de corriente y tensión.  </li>
                    <li> Distorsión armónica.  </li>
                    <li> Registros de ondas de tensión, corriente y potencia.  </li>
                </ul>
                <h3 className="contentsubtitle"> 1.2 Normatividad.</h3>
                <ul className="paragraph">
                    <li> Norma IEEE 1159-1995, Recommended Practice for Monitoring Electric Power Quality.  </li>
                    <li> NormaIEEE519-1992,Recommended Practices and Requirements for Harmonic Control in Electrical Power Systems.  </li>
                    <li> 61000-2-5 Clasificación de los entornos electromagnéticos.  </li>
                    <li> 61000-2-1Descripcióndelosentornoselectromagnéticosensistemasdeenergíadebajatensión públicos.  </li>
                    <li> 61000-2-2 Niveles de compatibilidad en sistemas de energía de baja tensión públicos.  </li>
                    <li> 61000-2-4 Niveles de compatibilidad en instalaciones industriales.  </li>
                    <li> 61000-2-6 Evaluación de los niveles de emisión en instalaciones industriales.  </li>
                    <li> 61000-2-8 Huecos de tensión, interrupciones cortas.  </li>
                </ul>            
            </div>
            <div className="wrapper">
                <ul className="paragraph">
                    <li> 6072.Impedancia de referencia para líneas de energía de baja tensión 61010.  </li>
                    <li> Cualquier equipo de medida eléctrico, los analizadores de redes trifásicos deben cumplir
                        con los requisitos de esta importante Norma Europea de seguridad.
                    </li>
                </ul>  
                <h2 className="tittlepage"> 2. CONCEPTOS.</h2>
                <h2 className="tittlepage"> CALIDAD DE ENERGÍA:</h2>
                <p className="paragraph"> La calidad de la energía eléctrica (CEL), se define como la continuidad y confiabilidad del voltaje suministrada 
                    a un cliente en particular por el operador de red o su sistema de generación en sitio (o ambos cuando hay sincronismo), así como 
                    la calidad de la corriente de carga que el cliente demanda de este, de tal forma que se garantice la confiabilidad y eficiencia 
                    operativa de un sistema de potencia eléctrico en particular. <br/>
                    La evaluación de indicadores de calidad de la energía permite conocer que tan inmune es una instalación a fenómenos perturbadores 
                    de una óptima calidad de la energía, fenómenos en estado estable como armónicos de voltaje y corriente, variaciones de voltaje de corta 
                    y larga duración según IEEE1159-1995 o en estado transitorio como variaciones rápidas de voltaje, transitorios de alto contenido energético, 
                    etc. Mediante esta evaluación de indicadores actuales de la CEL, se logran estructurar las mejores soluciones técnicas que evitaran que la 
                    instalación eléctrica se vea afectada por estos fenómenos, garantizando así la continuidad y confiabilidad de la operación de todos los equipos 
                    eléctricos de la instalación.
                </p>
                <h3 className="contentsubtitle"> Armónicos:</h3>
                <p className="paragraph"> Son componentes sinusoidales de una onda periódica o cantidad que posee una frecuencia múltiplo de la frecuencia fundamental. <br/>
                </p>
                <h3 className="contentsubtitle"> Distorsión armónica total(THD):</h3>
                <p className="paragraph"> Es la relación entre el contenido armónico de la señal y la primera armónica o fundamental. Es el parámetro de medición de distorsión 
                    más conocido por lo que es Recomendable para medir la distorsión en parámetros individuales (I y V). <br/>
                </p> 
            </div>
            <div className="wrapper">
                <h3 className="contentsubtitle"> Distorsión de demanda total(TDD):</h3>
                <p className="paragraph"> Es la relación entre la corriente armónica y la demanda máxima de la corriente de carga <br/>
                </p>
                <h3 className="contentsubtitle"> Factor de potencia:</h3>
                <p className="paragraph"> Relación entre potencia activa y potencia aparente, del mismo sistema eléctrico o parte de él. <br/>
                </p> 
                <h3 className="paragraph"> Frecuencia:</h3>
                <p className="paragraph"> Número de períodos por segundo de uma onda. Se mide em Hertz o ciclos por segundo. <br/>
                </p>
                <h3 className="contentsubtitle"> Potencia activa:</h3>
                <p className="paragraph"> Potencia consumida por las bombillas, aparatos, artefactos y motores que se encuentran en el predio del usuario. Se mide en kilovatios [kW]. <br/>
                </p>
                <h3 className="contentsubtitle"> Potencia aparente:</h3>
                <p class="paragraph"> Potencia resultante de la suma geométrica de la potencia activa y la potencia reactiva, medida en kVA. <br/>
                </p>
                <h3 class="contentsubtitle"> Potencia reactiva:</h3>
                <p className="paragraph"> Potencia absorbida por cargas reactivas que se encuentran en las industrias, transformadores, redes o por motores, medida en kVAR. <br/>
                </p>
                <h3 className="contentsubtitle"> Potencia reactiva:</h3>
                <p className="paragraph"> Potencia absorbida por cargas reactivas que se encuentran en las industrias, transformadores, redes o por motores, medida en kVAR. <br/>
                </p>
                <h3 className="contentsubtitle"> Regulación de tensión:</h3>
                <p className="paragraph"> La regulación de tensión es la caída de tensión en una red debido a la impedancia serie de los conductores la cual se opone al paso de la corriente eléctrica. <br/>
                </p>
            </div>
            <div className="wrapper">
                <h2 className="tittlepage"> 3.0 EQUIPO DE MEDIDA UTILIZADO.</h2>
                <img className="imgAnalizer" src={analizador} />
                <span className="imgLabel">Imagen 1. Analizador de redes METREL 2892 Utilizado en el diagnóstico.</span>
        
                <p className="paragraph"> Para la ejecución del diagnóstico de calidad de la energía eléctrica en el punto solicitado, se implementó un analizador de redes eléctricas: <br/>
                </p>
                <ul className="tittlepage">
                    <li> MI 2892. </li>
                    <li> Con capacidad de detectar y registrar durante 15 días continuos en intervalos de 5 minutos y 
                        100 muestras por ciclo, todas las perturbaciones que pueden afectar 
                        la operación confiable de las instalaciones eléctricas. 
                    </li>
                    <li> Para la medición, se utilizó un Analizador de Redes Trifásico que fue instalado durante un 
                        periodo de 6 días continuos. 
                    </li>
                    <li> Se obtuvieron los datos de todos los parámetros eléctricos incluyendo la potencia Activa,
                        Reactiva y Aparente;<br/> y la energía total demandada por el sistema.
                    </li>
                </ul>
                <h2 className="tittlepage"> 4.0 CRITERIOS DE SEGURIDAD UTILIZADOS.</h2>
                <p className="paragraph"> Se tuvo en cuenta las respectivas medidas preventivas para realizar la instalación 
                    del analizador <br/> de red, se contó con la presencia de personal técnico especializado entrenado para 
                    este tipo labor. Asimismo, se consideraron las normas y procedimientos de seguridad industrial, con 
                    la finalidad de tener confiabilidad en el proceso de adquisición de datos y en la integridad física 
                    del personal operativo.
                </p>
            </div>
            <div className="wrapper">
                <h2 className="tittlepage"> 5.0 PUNTO DE MEDICIÓN.</h2>
                <img className="imgCP" src={puntoConexion} />
                <h3 className="imgLabel">Imagen 2. Punto de Conexión.</h3>
                <h2 className="tittlepage"> 6.0 RESULTADO DE LAS MEDIDAS.</h2>
                <p className="paragraph"> El presente informe contiene los resultados del diagnóstico de Calidad de Potencia 
                    realizado en la subestación eléctrica principal de: <br/>
                </p>
                <ul className="tittlepage">
                    <li> TRF 500KVA. </li>
                    <li> PALOMINO - GUAJIRA </li>
                </ul>
                <p className="paragraph"> En la Tabla No.1 se presentan las fechas, horas e intervalos entre registros.
                    El equipo se programó para capturar los siguientes datos:
                </p>
                <table>
                    <tr>
                    <th>Modelo</th>
                    <th>Conexión</th>
                    <th>Día de Inicio</th>
                    <th>Día de Final</th>
                    <th>Fase</th>
                    </tr>
                    <tr>
                    <td> {eqm} </td>
                    <td> {ct} </td>
                    <td> {ind} </td>
                    <td> {fd} </td>
                    <td> {fa} </td>
                    </tr>
                </table>
                <h5 className="imgLabel">Tabla No.1.</h5>
            </div>
            <div className="wrapper">
                <p className="paragraph"> Los resultados de las mediciones se presentan a continuación en forma de tablas y 
                    resumen. Posteriormente, se realiza una descripción del comportamiento de los parámetros registrados.
                </p>
                <p className="paragraph"> También se presenta las diferentes curvas del comportamiento de los parámetros eléctricos en el 
                    periodo de medición. 
                </p>
                <p className="paragraph">  En la Tabla No.2, se puede observar los valores máximos, mínimos y promedio de los parámetros medidos.
                    Cabe resaltar que, los datos presentados en cada fila no son necesariamente coincidentes en el tiempo. 
                </p>
                <table>
                    <tr>
                    <th colspan="3">Punto Medido</th>
                    <th colspan="3">Tensión [V]</th>
                    <th colspan="3">Corriente [A]</th>
                    <th>Factor de Potencia</th>
                    <th colspan="3">Potencias</th>
                    </tr>
                    <tr>
                        <td colspan="3"></td>
                        <td>V1</td>
                        <td>V2</td>
                        <td>V3</td>
                        <td>I1</td>
                        <td>I2</td>
                        <td>I3</td>
                        <td>COS (fi)</td>
                        <td>P[kW]</td>
                        <td>Q[kVA]</td>
                        <td>S[kVA]</td>
                    </tr>
                    <tr>
                    <td rowspan="6">Valores</td>
                    <td colspan="2">Maximo</td>
                    <td> {u_1_max} </td>
                    <td> {u_2_max} </td>
                    <td> {u_3_max} </td>
                    <td> {I_1_max} </td>
                    <td> {I_2_max} </td>
                    <td> {I_3_max} </td>
                    <td> {fp_max} </td>
                    <td> {p_fund_tot_max} </td>
                    <td> {q_tot_ind_max} </td>
                    <td>DP</td>
                    </tr>
                    <tr>
                        <td colspan="2">Minimo</td>
                        <td > {u_1_min} </td>
                        <td> {u_2_min} </td>
                        <td> {u_3_min} </td>
                        <td> {I_1_min} </td>
                        <td> {I_2_min} </td>
                        <td> {I_3_min} </td>
                        <td> {p_fetot_ind_min} </td>
                        <td> {p_fund_tot_min} </td>
                        <td> {q_tot_ind_min} </td>
                        <td>DP</td>
                    </tr>
                    <tr>
                        <td colspan="2">Promedio</td>
                        <td> {prom_u1} </td>
                        <td> {prom_u2} </td>
                        <td> {prom_u3} </td>
                        <td> {prom_I1} </td>
                        <td> {prom_I2} </td>
                        <td> {prom_I3} </td>
                        <td> {fp_prom} </td>
                        <td> {pa_prom} </td>
                        <td> {pr_prom} </td>
                        <td> DP </td>
                    </tr>
                    <tr>
                        <td colspan="2">Percentil 99</td>
                        <td> {u_1_percentil_99} </td>
                        <td> {u_2_percentil_99} </td>
                        <td> {u_3_percentil_99} </td>
                        <td> {I_1_percentil_99} </td>
                        <td> {I_2_percentil_99} </td>
                        <td> {I_3_percentil_99} </td>
                        <td> {p_fetot_ind_percentil_99} </td>
                        <td> {p_fund_tot_percentil_99} </td>
                        <td> {q_tot_ind_percentil_99} </td>
                        <td> DP </td>
                    </tr>
                    <tr>
                        <td colspan="2">Percentil 95</td>
                        <td> {u_1_percentil_95} </td>
                        <td> {u_2_percentil_95} </td>
                        <td> {u_3_percentil_95} </td>
                        <td> {I_1_percentil_95} </td>
                        <td> {I_2_percentil_95} </td>
                        <td> {I_3_percentil_95} </td>
                        <td> {p_fetot_ind_percentil_95} </td>
                        <td> {p_fund_tot_percentil_95} </td>
                        <td> {q_tot_ind_percentil_95} </td>
                        <td> DP </td>
                    </tr>
                    <tr>
                        <td colspan="2">Percentil 5</td>
                        <td> {u_1_percentil_5} </td>
                        <td> {u_2_percentil_5} </td>
                        <td> {u_3_percentil_5} </td>
                        <td> {I_1_percentil_5} </td>
                        <td> {I_2_percentil_5} </td>
                        <td> {I_3_percentil_5} </td>
                        <td> {p_fetot_ind_percentil_5} </td>
                        <td> {p_fund_tot_percentil_5} </td>
                        <td> {q_tot_ind_percentil_5} </td>
                        <td> DP </td>
                    </tr>
                </table>
                <span className="imgLabel">Tabla No.2. Valores Máximos, Promedios y Mínimos de Parámetros Medidos.</span>
                <p className="paragraph"> Los valores máximos y mínimos registrados corresponden a valores medidos durante 
                    el intervalo de las muestras. 
                </p>
            </div>
            <div className="wrapper">
                
                <h3 className="contentsubtitle"> 6.1 Regulación de tensión.</h3>
                <p className="paragraph"> En la Tabla No.3 se aprecia las variaciones de tensión con respecto al valor nominal.</p>
                <table className="table3">
                    <tr>
                    <th>Acometida Principal</th>
                    <th>Tensión Nominal</th>
                    <th>Máximo V [%]</th>
                    <th>Promedio V [%]</th>
                    <th>Minimo V [%]</th>
                    </tr>
                    <tr>
                    <td>Trafo</td>
                    <td>{unom}</td>
                    <td>9.9</td>
                    <td>0.2</td>
                    <td>-6.5</td>
                    </tr>
                </table>
                <span className="imgLabel">Tabla No.3. Variaciones de tensión con respecto al valor nominal.</span>


                
            </div>
            <div className="wrapper">
                <p className="paragraph"> La Norma Técnica Colombiana NTC 1340 establece los límites máximos de variación de
                    tensión, siendo estos de: +10% y -10%.
                </p>
                <p className="paragraph"> Nota: Los valores se encuentran dentro de los límites establecidos.
                </p>
                <div className="Chart-Voltage">
                    <LineChart2 x1={u1} x2={u2} x3={u3} y={h1} name="CV" title1="u1" title2="u2" title3="u3"/>
                </div>
                <h5 className="imgLabel">Comportamiento de la variación de la tensión del sistema.</h5>
                <h3 className="contentsubtitle"> 6.2 Desbalance de tensión.</h3>
                <h3 className="tableLabel">Tendencia de tensiones.</h3>
                <table className="table3">
                    <tr>
                    <th colspan="5">Desequilibrio de tensión [%]</th>
                    <th className="table3a">Norma: 2 %</th>
                    </tr>
                    <tr className="table3b">
                    <th>Maximo</th>
                    <th>Mínimo</th>
                    <th>Promedio</th>
                    <th>Percentil 99</th>
                    <th>Percentil 95</th>
                    <th>Percentil 5</th>
                    </tr>
                    <tr className="table3c">
                    <td>{u_percent_max}</td>
                    <td>{u_percent_min}</td>
                    <td>{u_percent_prom}</td>
                    <td>{u_percent_percentil_99}</td>
                    <td>{u_percent_percentil_95}</td>
                    <td>{u_percent_percentil_5}</td>
                    </tr>
                </table>
                <span className="imgLabel">Tabla No.4. Desbalances de tensión.</span>
            </div>
            <div className="wrapper">
                <div className="Chart-Voltage">
                    <LineChart2 x1={uper} y={h1} name="CU" title1="u_per" />
                </div>
                <h5 className="imgLabel">Tendencia Desequilibrio de tensión.</h5>
                <p className="paragraph"> Otro parámetro de la Calidad de Tensión es el desbalance. Estos se calculan como: 
                    La máxima diferencia entre las magnitudes de cada fase y el promedio de las fases, dividida sobre el 
                    promedio y expresada en tanto por cien. La tabla No. 4 presenta el resumen de estos desbalances 
                    registradas durante la medición. <br/>
                    El límite máximo admisible para desbalances en tensión es del 2%. Por lo tanto, 
                    los desbalances registrados durante la medición:
                </p>
                <ul className="paragraph">
                    <li> Si se encuentra dentro de los parametros recomendado por la Norma</li>
                </ul>
                <h3 className="contentsubtitle"> 6.3 Desequilibrio de corriente.</h3>
                <h3 className="tableLabel">Tendencia de corriente.</h3>
                <table className="table3">
                    <tr>
                    <th colspan="5">Desequilibrio de corrientes [%]</th>
                    <th className="table3a">Norma: 10 %</th>
                    </tr>
                    <tr className="table3b">
                    <th>Maximo</th>
                    <th>Mínimo</th>
                    <th>Promedio</th>
                    <th>Percentil 99</th>
                    <th>Percentil 95</th>
                    <th>Percentil 5</th>
                    </tr>
                    <tr className="table3c">
                    <td>{i_percent_max}</td>
                    <td>{i_percent_min}</td>
                    <td>{i_percent_prom}</td>
                    <td>{i_percent_percentil_99}</td>
                    <td>{i_percent_percentil_95}</td>
                    <td>{i_percent_percentil_5}</td>
                    </tr>
                </table>
                <span className="imgLabel">Tabla No.5. Desbalances de corrientes.</span>
            </div>
            <div className="wrapper">
                <p className="paragraph"> El desequilibrio promedio de la corriente es de 40.52 <br/>
                    Supera el límite establecido del (10%) que indica la Norma IEEE 1159-92. (No Cumple).
                </p>
                <div className="Chart-Voltage">
                    <LineChart2 x1={iper} y={h1} name="CDI" title1="D_i1" />
                </div>
                <h5 className="imgLabel">Tendencia Desequilibrio de corriente.</h5>
                <h3 className="contentsubtitle">6.3.1	Gráfico de corrientes.</h3>
                <p className="paragraph">CORRIENTE L1</p>
                <div className="Chart-Voltage">
                    <LineChart2 x1={i1} y={h1} name="I1" title1="i1" />
                </div>
            </div>
            <div className="wrapper">
                <p className="paragraph">CORRIENTE L2</p>
                <div className="Chart-Voltage">
                    <LineChart2 x1={i2} y={h1} name="I2" title1="i2" />
                </div>
                <p className="paragraph">CORRIENTE L3</p>
                <div className="Chart-Voltage">
                    <LineChart2 x1={i3} y={h1} name="I3" title1="i3" />
                </div>
            </div>
            <div className="wrapper">
                <p className="paragraph">CORRIENTE N</p>
                <div className="Chart-Voltage">
                    <LineChart2 x1={In} y={h1} name="In" title1="in" />
                </div>
                <h3 className="contentsubtitle">6.3.2	Distorsiones Armónicas (THD).</h3>
                <table className="table3">
                    <tr>
                    <th colspan="7">Armonicos en Tensión</th>
                    <th className="table3a">Norma: 5 %</th>
                    </tr>
                    <tr>
                    <th colspan="2">U1</th>
                    <th colspan="2">U2</th>
                    <th colspan="2">U3</th>
                    <th colspan="2">THDV Total</th>
                    </tr>
                    <tr>
                    <td>Máximo</td>
                    <td>{thd_u_1_max}</td>
                    <td>Máximo</td>
                    <td>{thd_u_2_max}</td>
                    <td>Máximo</td>
                    <td>{thd_u_3_max}</td>
                    <td>Máximo</td>
                    <td>40,52</td>
                    </tr>
                    <tr>
                    <td>Mínimo</td>
                    <td>{thd_u_1_min}</td>
                    <td>Mínimo</td>
                    <td>{thd_u_2_min}</td>
                    <td>Mínimo</td>
                    <td>{thd_u_3_min}</td>
                    <td>Mínimo</td>
                    <td>40,52</td>
                    </tr>
                    <tr>
                    <td>Promedio</td>
                    <td>{DT1_prom}</td>
                    <td>Promedio</td>
                    <td>{DT2_prom}</td>
                    <td>Promedio</td>
                    <td>{DT3_prom}</td>
                    <td>Promedio</td>
                    <td>40,52</td>
                    </tr>  
                    <tr>
                    <td>Percentil 99</td>
                    <td>{thd_u_1_percentil_99}</td>
                    <td>Percentil 99</td>
                    <td>{thd_u_2_percentil_99}</td>
                    <td>Percentil 99</td>
                    <td>{thd_u_3_percentil_99}</td>
                    <td>Percentil 99</td>
                    <td>40,52</td>
                    </tr>  
                    <tr>
                    <td>Percentil 95</td>
                    <td>{thd_u_1_percentil_95}</td>
                    <td>Percentil 95</td>
                    <td>{thd_u_2_percentil_95}</td>
                    <td>Percentil 95</td>
                    <td>{thd_u_3_percentil_95}</td>
                    <td>Percentil 95</td>
                    <td>40,52</td>
                    </tr>  
                    <tr>
                    <td>Percentil 5</td>
                    <td>{thd_u_1_percentil_5}</td>
                    <td>Percentil 5</td>
                    <td>{thd_u_2_percentil_5}</td>
                    <td>Percentil 5</td>
                    <td>{thd_u_3_percentil_5}</td>
                    <td>Percentil 5</td>
                    <td>40,52</td>
                    </tr>  
                </table>
                <span className="imgLabel">Tabla No. 6. Distorsión Armónica.</span>
            </div>
            <div className="wrapper">
                <p className="paragraph"> La distorsión armónica es causada por la presencia de señales con 
                    frecuencias múltiplo de la fundamental (60Hz), que se suman a la onda fundamental, 
                    deformándola. <br/> Las distorsiones armónicas se miden con los parámetros THDV en tensiones 
                    y TDDI en corrientes. Estos indicadores se denominan Distorsiones Totales Armónicas. 
                    El THD es la relación porcentual entre el contenido de distorsión armónica total y la 
                    componente fundamental. <br/> En corrientes, el THD se escala proporcionalmente a la 
                    corriente nominal del transformador. <br/> Este parámetro escalado se denomina TDD. 
                    En la Tabla No.6 se presentan los niveles de distorsión armónica registrados tanto 
                    en Tensión como en Corrientes durante las mediciones. A continuación, se presentará 
                    una explicación de los indicadores y un análisis de los resultados.
                    El THD en tensiones es una medida del nivel de distorsión de la señal de tensión 
                    (onda no sinusoidal pura) que entrega el operador de red en el punto de conexión 
                    del cliente. En este caso es la señal que proviene de la Subestación Eléctrica o 
                    punto Alimentador del Tablero en cuestión. <br/> Los armónicos son la componente 
                    sinusoidal de una onda periódica a una frecuencia múltiplo entero de la frecuencia 
                    fundamental (60Hz). Los armónicos puedan causar sobrecalentamiento en conductores 
                    afectando su nivel de aislamiento. En los devanados de los motores se puede originar 
                    incrementos de temperatura generando ruido y oscilaciones de torque en el rotor lo 
                    cual conduce a resonancias y vibraciones mecánicas. Sobre temperatura en capacitores 
                    y en los casos más severos, riesgo de explosión debido a la rotura del dieléctrico. <br/>
                    Las pantallas electrónicas y la iluminación sufren intermitencias, interruptores 
                    automáticos pueden presentarse disparos no deseados, fallo en computadores y falsas 
                    lecturas de medidores. <br/> Para identificar la carga que causa la distorsión, 
                    la THD de corriente se debe medir a la entrada y en cada una de las salidas de los 
                    diferentes circuitos. La THDI medida proporciona información sobre fenómenos observados 
                    en una instalación:
                </p>
                <ul className="paragraph">
                    <li> Un valor de THDI inferior al 10 % se considera normal. Prácticamente no existe 
                        riesgo de funcionamiento anómalo en los equipos.
                    </li>
                    <li> Un valor de THDI comprendido entre el 10 y el 50 % revela una distorsión 
                        armónica significativa. Existe el riesgo de que aumente la temperatura.
                    </li>
                    <li> Un valor de THDI superior al 50 % revela una distorsión armónica importante. 
                        El funcionamiento anómalo de los equipos es probable. Un análisis profundo y 
                        un sistema de atenuación son necesarios.
                    </li>
                </ul>
            </div>
            <div className="wrapper">
                <h3 className="contentsubtitle">6.3.3	Distorsiones en Voltaje (TDDV).</h3>
                <div className="Chart-Voltage">
                    <LineChart2 x1={D_u1} x2={D_u2} x3={D_u3} y={h1} name="DU" title1="D_u1" title2="D_u2" title3="D_u3"/>
                </div>
                <p className="paragraph"> La norma IEEE Std-519 limita al 5% el nivel de distorsión armónica en sistemas de
                    distribución con tensiones inferiores a 69kV. <br/> El THD registrado en tensión durante los períodos de medición:
                    No superaron el máximo permitido por la norma en valor promedio.    
                </p>
                <h3 className="contentsubtitle">6.3.4	Distorsiones en Corrientes (TDDI).</h3>
                <table className="table3">
                    <tr>
                    <th colspan="7">Armonicos en Tensión</th>
                    <th className="table3a">Norma: 10-15 %</th>
                    </tr>
                    <tr>
                    <th colspan="2">I1</th>
                    <th colspan="2">I2</th>
                    <th colspan="2">I3</th>
                    <th colspan="2">THDI Total</th>
                    </tr>
                    <tr>
                    <td>Máximo</td>
                    <td>{thd_i_1_max}</td>
                    <td>Máximo</td>
                    <td>{thd_i_2_max}</td>
                    <td>Máximo</td>
                    <td>{thd_i_3_max}</td>
                    <td>Máximo</td>
                    <td>40,52</td>
                    </tr>
                    <tr>
                    <td>Mínimo</td>
                    <td>{thd_i_1_min}</td>
                    <td>Mínimo</td>
                    <td>{thd_i_2_min}</td>
                    <td>Mínimo</td>
                    <td>{thd_i_3_min}</td>
                    <td>Mínimo</td>
                    <td>40,52</td>
                    </tr>
                    <tr>
                    <td>Promedio</td>
                    <td>{DI1_prom}</td>
                    <td>Promedio</td>
                    <td>{DI2_prom}</td>
                    <td>Promedio</td>
                    <td>{DI3_prom}</td>
                    <td>Promedio</td>
                    <td>40,52</td>
                    </tr>  
                    <tr>
                    <td>Percentil 99</td>
                    <td>{thd_i_1_percentil_99}</td>
                    <td>Percentil 99</td>
                    <td>{thd_i_2_percentil_99}</td>
                    <td>Percentil 99</td>
                    <td>{thd_i_3_percentil_99}</td>
                    <td>Percentil 99</td>
                    <td>40,52</td>
                    </tr>  
                    <tr>
                    <td>Percentil 95</td>
                    <td>{thd_i_1_percentil_95}</td>
                    <td>Percentil 95</td>
                    <td>{thd_i_2_percentil_95}</td>
                    <td>Percentil 95</td>
                    <td>{thd_i_3_percentil_95}</td>
                    <td>Percentil 95</td>
                    <td>40,52</td>
                    </tr>  
                    <tr>
                    <td>Percentil 5</td>
                    <td>{thd_i_1_percentil_5}</td>
                    <td>Percentil 5</td>
                    <td>{thd_i_2_percentil_5}</td>
                    <td>Percentil 5</td>
                    <td>{thd_i_3_percentil_5}</td>
                    <td>Percentil 5</td>
                    <td>40,52</td>
                    </tr>  
                </table>
            </div>
            <div className="wrapper">
                <div className="Chart-Voltage">
                    <LineChart2 x1={D_i1} x2={D_i2} x3={D_i3} y={h1} name="DI" title1="D_i1" title2="D_i2" title3="D_i3"/>
                </div>
                <p className="paragraph"> La distorsión armónica en corrientes es responsabilidad 
                    del usuario y, por lo tanto, las normas limitan el máximo contenido de 
                    distorsión armónica que un usuario puede entregar a la red. <br/> El 
                    parámetro de medición es el TDD y se calcula refiriendo el THDI a un
                    valor en por unidad, con base en la corriente máxima de carga.   
                </p>
                <p className="paragraph"> De acuerdo con la norma IEEE 519-92, el límite máximo
                    de TDDI depende de la relación entre el nivel de cortocircuito en el punto 
                    de conexión del usuario y la corriente máxima de carga. Este límite varía 
                    entre 10% y 15%.<br/>De acuerdo con la Tabla No.6 durante la medición 
                    se presentaron valores de TDDI. Este valor:<br/> 
                    Se encuentra dentro del rango permitido entre el 10 % y 15% por lo tanto, 
                    cumple con lo establecido por la Norma IEEE 519-92. 
                </p>
                <h3 className="contentsubtitle">6.4	Factor de Potencia.</h3>
                <div className="Chart-Voltage">
                    <LineChart2 x2={pf_i} y={h1} name="PF" title2="pf_i" />
                </div>
            </div>
            <div className="wrapper">
                <p className="paragraph"> El factor de potencia es un parámetro que indica el consumo
                    de energía reactiva, la cual se penaliza económicamente cuando sobrepasa el 
                    límite del 50% de la energía activa consumida, establecido por la Resolución
                    CREG No. 082 del 2002. En el Punto de Medición el Factor de Potencia promedio es:<br/>
                    Se encuentra dentro de los parámetros estipulados por la norma, teniendo en 
                    cuenta que el valor mínimo exigido es (cos = 0.90) y el máximo es (cos = 1.00).
                </p>
                <table className="table3">
                    <tr>
                    <th colspan="4">Factor de Potencia</th>
                    </tr>
                    <tr className="table3b">
                    <th>Maximo</th>
                    <th>Mínimo</th>
                    <th>Mediana</th>
                    <th>Promedio</th>
                    </tr>
                    <tr className="table3c">
                    <td>454,64</td>
                    <td>3,66</td>
                    <td>44,36</td>
                    <td>40,52</td>
                    </tr>
                </table>
                <h3 className="paragraph">6.5 Frecuencia.</h3>
                <table className="table3">
                    <tr>
                    <th colspan="4">Frecuencia del Sistema (Hz)</th>
                    </tr>
                    <tr className="table3b">
                    <th>Limites</th>
                    <th>Total</th>
                    <th>Medida</th>
                    </tr>
                    <tr className="table3c">
                    <td>Limite Superior</td>
                    <td>3,66</td>
                    <td>44,36</td>
                    </tr>
                    <tr className="table3c">
                    <td>Limite Inferior</td>
                    <td>3,66</td>
                    <td>44,36</td>
                    </tr>
                </table>
                <p className="paragraph"> De acuerdo con la Resolución CREG No. 025 de 1995, “La 
                    frecuencia objetivo del SIN (Sistema Interconectado Nacional) es 60,00 Hz 
                    y su rango de variación de operación está entre 59,80 y 60,20 Hz, excepto 
                    en estados de emergencia, fallas, déficit energético y períodos de 
                    restablecimiento”. Durante la medición, la frecuencia del sistema promedio 
                    en períodos de 1 minutos estuvo entre 59,99 Hz. Es importante destacar que, 
                    en Colombia, de acuerdo con la reglamentación vigente, el mantenimiento de 
                    la frecuencia del sistema es responsabilidad de los generadores y no de los 
                    distribuidores.<br/>
                </p>
            </div>
            <div className="wrapper">
                <p className="paragraph"> Los valores registrados se encuentran dentro del rango 
                    establecido.
                </p>
                <div className="Chart-Voltage">
                    <LineChart2 x1={f} y={h1} name="frecuencia" title1="f" />
                </div>
                <h3 className="paragraph">6.6 Potencias.</h3>
                <ul className="paragraph">
                    <li>Potencia Activa, Reactiva y Aparente</li>
                </ul>
                <h3 className="contentsubtitle">Potencia Activa (kW)</h3>
                <div className="Chart-Voltage">
                    <LineChart2 x2={pa} y={h1} name="activa" title2="Potencia Activa [kW]" />
                </div>
            </div>
            <div className="wrapper">
                <h3 className="contentsubtitle">Potencia Reactiva (kvar)</h3>
                <div className="Chart-Voltage">
                    <LineChart2 x2={pr} y={h1} name="reactiva" title2="Potencia Reactiva [Kvar]" />
                </div>
                <h3 className="paragraph">Potencia Aparente Se (KVA)</h3>
                <img className="imgDVoltage" src={variacionTension} />
                <table className="table3">
                    <tr className="table3b">
                    <th>Maxima Potencia Kvar</th>
                    <th>Maxima Potencia KW</th>
                    <th>Maxima Potencia KVA</th>
                    </tr>
                    <tr className="table3c">
                        <td>3,66</td>
                        <td>3,66</td>
                        <td>44,36</td>
                    </tr>
                    <tr className="table3b">
                    <th>Minima Potencia Kvar</th>
                    <th>Minima Potencia KW</th>
                    <th>Minima Potencia KVA</th>
                    </tr>
                    <tr className="table3c">
                        <td>3,66</td>
                        <td>3,66</td>
                        <td>44,36</td>
                    </tr>
                    <tr className="table3b">
                    <th>Promedio Potencia Kvar</th>
                    <th>Promedio Potencia KW</th>
                    <th>Promedio Potencia KVA</th>
                    </tr>
                    <tr className="table3c">
                    <td>3,66</td>
                    <td>3,66</td>
                    <td>44,36</td>
                    </tr>
                </table>
                <p className="paragraph"> Los límites establecidos en la Resolución CREG 108 de 1997;
                    la cual dicta que la reactiva no debe superar el 50% de la activa.
                </p>
            </div>
            <div className="wrapper">
                <h2 className="tittlepage">7. CARGABILIDAD.</h2>
                <img className="imgDVoltage" src={variacionTension} />
                <p className="paragraph"> La cargabilidad promedio es igulal a: 3.64 %.
                </p>
                <table className="table3">
                    <tr className="table3b">
                        <th colspan="5">Cargabilidad</th>
                    </tr>
                    <tr className="table3c">
                        <td>Máximo</td>
                        <td>3,66</td>
                        <td>%</td>
                        <td>44,36</td>
                        <td>kVa</td>
                    </tr>
                    <tr className="table3c">
                        <td>Mínimo</td>
                        <td>3,66</td>
                        <td>%</td>
                        <td>44,36</td>
                        <td>kVa</td>
                    </tr>
                    <tr className="table3c">
                    <td>Promedio</td>
                    <td>3,66</td>
                    <td>%</td>
                    <td>44,36</td>
                    <td>kVa</td>
                    </tr>            
                </table>
            </div>
            <div className="wrapper">
                <h2 className="tittlepage">8. CONCLUSIONES</h2>
                <div className="CONCLUSIONES"></div>
            </div>
        </div>
    )
}

export default BodyReport;