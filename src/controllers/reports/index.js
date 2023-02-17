import httpRequest from '../../services/http_request';

export const createReport = (params) => {
    try {
        const response = httpRequest ({
            method: "POST",
            url: '/reports',
            data: {
                visit_id: params.visitId,
                report_title: params.report_title,
                report_subtitle: params.report_subtitle,
                connection_point: params.connection_point,
                initial_day: params.initial_day,
                final_day: params.final_day,
                total_days_service: params.total_days,
                author: params.author,
                reviewer: params.reviewer,
                client_responsible: params.client_responsible,
                equipment: params.equipment,
                equipment_model: params.equipment_model,
                working_voltage: params.working_voltage,
                connection_type: params.connection_type,
                phase_number: params.phase_number,
                total_power: params.total_power,
                city: params.city,
                department: params.department,
                year: params.year,
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

export const reportList = async () => {
    try {
        const response = await httpRequest ({
            method: "GET",
            url: '/reports',
        })

        return {
            succes: true,
            data: response.data,
        }
    }catch (error) {

        return {
            succes: false,
            error:error,
            data: []
        }
    }
}

export const deleteReport = async (id) => {
    try {
        const response = await httpRequest ({
            method: "DELETE",
            url: `/reports/${id}`,
        })

        return {
            succes: true,
            data: response.data,
        }
    }catch (error) {
        return {
            succes: false,
            error:error,
            data: []
        }
    }
}

export const getReport = async (id) => {
    try {
        const response = await httpRequest({
            method: "GET",
            url: `/reports/${id}`,
        })

        return {
            succes: true,
            data: response.data,
        }

    }catch (error) {

        return {
            succes: false,
            error: error,
            data: []
        }
    }
}

export const updateReport = (id, params) => {
    try {
        const response = httpRequest ({
            method: "PUT",
            url: `/reports/${id}`,
            data: {
                visit_id: params.visitId,
                report_title: params.report_title,
                report_subtitle: params.report_subtitle,
                connection_point: params.connection_point,
                initial_day: params.initial_day,
                final_day: params.final_day,
                total_days_service: params.total_days,
                author: params.author,
                reviewer: params.reviewer,
                client_responsible: params.client_responsible,
                equipment: params.equipment,
                equipment_model: params.equipment_model,
                working_voltage: params.working_voltage,
                connection_type: params.connection_type,
                phase_number: params.phase_number,
                total_power: params.total_power,
                city: params.city,
                department: params.department,
                year: params.year,
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