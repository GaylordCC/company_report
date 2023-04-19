import httpRequest from '../../services/http_request';

export const createReport = async(params) => {
    try {
        const formData = new FormData();
        formData.append('report[visit_id]', params.visitId);
        formData.append('report[report_title]', params.report_title);
        formData.append('report[report_subtitle]', params.report_subtitle);
        formData.append('report[connection_point]', params.connection_point);
        formData.append('report[initial_day]', params.initial_day);
        formData.append('report[final_day]', params.final_day);
        formData.append('report[total_days_service]', params.total_days);
        formData.append('report[author]', params.author);
        formData.append('report[reviewer]', params.reviewer);
        formData.append('report[client_responsible]', params.client_responsible);
        formData.append('report[equipment]', params.equipment);
        formData.append('report[equipment_model]', params.equipment_model);
        formData.append('report[working_voltage]', params.working_voltage);
        formData.append('report[connection_type]', params.connection_type);
        formData.append('report[phase_number]', params.phase_number);
        formData.append('report[total_power]', params.total_power);
        formData.append('report[city]', params.city);
        formData.append('report[department]', params.department);
        formData.append('report[year]', params.year);
        formData.append('report[company_photo_file]', params.companyPhotoFile);
        formData.append('report[connection_point_photo_file]', params.connectionPointPhotoFile);
 

        const response = await httpRequest ({
            method: "POST",
            url: '/reports',
            data: formData
        })
        
        return {
            succes: true,
            data: response,
        }

    }catch (error) {
        console.log("**ERROR  " + (error))
        return {
            succes: false,
            errors: error
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

export const updateReport = async(id, params) => {
    try {
        const formData = new FormData();
        formData.append('report[visit_id]', params.visitId);
        formData.append('report[report_title]', params.report_title);
        formData.append('report[report_subtitle]', params.report_subtitle);
        formData.append('report[connection_point]', params.connection_point);
        formData.append('report[initial_day]', params.initial_day);
        formData.append('report[final_day]', params.final_day);
        formData.append('report[total_days_service]', params.total_days);
        formData.append('report[author]', params.author);
        formData.append('report[reviewer]', params.reviewer);
        formData.append('report[client_responsible]', params.client_responsible);
        formData.append('report[equipment]', params.equipment);
        formData.append('report[equipment_model]', params.equipment_model);
        formData.append('report[working_voltage]', params.working_voltage);
        formData.append('report[connection_type]', params.connection_type);
        formData.append('report[phase_number]', params.phase_number);
        formData.append('report[total_power]', params.total_power);
        formData.append('report[city]', params.city);
        formData.append('report[department]', params.department);
        formData.append('report[year]', params.year);
        formData.append('report[company_photo_file]', params.companyPhotoFile);
        formData.append('report[connection_point_photo_file]', params.connectionPointPhotoFile);

        const response = await httpRequest ({
            method: "PUT",
            url: `/reports/${id}`,
            data: formData
            // data: {
            //     visit_id: params.visitId,
            //     report_title: params.report_title,
            //     report_subtitle: params.report_subtitle,
            //     connection_point: params.connection_point,
            //     initial_day: params.initial_day,
            //     final_day: params.final_day,
            //     total_days_service: params.total_days,
            //     author: params.author,
            //     reviewer: params.reviewer,
            //     client_responsible: params.client_responsible,
            //     equipment: params.equipment,
            //     equipment_model: params.equipment_model,
            //     working_voltage: params.working_voltage,
            //     connection_type: params.connection_type,
            //     phase_number: params.phase_number,
            //     total_power: params.total_power,
            //     city: params.city,
            //     department: params.department,
            //     year: params.year,
            // }
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

export const sendDetailReport = async(id, params) => {
    // params = {
    //     reportId: "",
    //     csvFile: ""
    // }
    try {
        const formData = new FormData();
        formData.append('detail_report[report_id]', params.reportId);
        formData.append('detail_report[csv_file]', params.csvFile);

        const response = await httpRequest ({
            method: "POST",
            // url: `/reports/${id}`,
            url: `/detail_reports`,
            data: formData
        })

        return {
            succes: true,
            data: response,
        }

    }catch (error) {
        console.log("**ERROR  " + (error))
        return {
            succes: false,
            errors: error
        }
    }
}

export const DeleteDetailReport = async(id) => {
    try {

        const response = await httpRequest ({
            method: "DELETE",
            url: `/detail_reports/${id}`,
        })

        return {
            succes: true,
        }
    }catch (error) {
        return {
            succes: false,
            errors: error
        }
    }
}