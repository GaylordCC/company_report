import httpRequest from '../../services/http_request';

export const createVisit = (params) => {
    try {
        const response = httpRequest ({
            method: "POST",
            url: '/visits',
            data: {
                fecha_visita:   params.fecha_visita,
                profesion:      params.profesion,
                coordinador:    params.coordinador,
                id_empresa:     params.id_empresa,
                numero_dias:    params.numero_dias,
                descripcion:    params.descripcion,
                contacto:       params.contacto,
                fase:           params.fase,
                fecha_ini:      params.fecha_ini,
                fecha_fin:      params.fecha_fin
            }
        })
        return {
            succes: true,
            data: response,
        }
    }catch (error) {
        return {
            succes: false,
            error:error
        }
    }
}