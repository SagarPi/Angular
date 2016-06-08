SavePatients = function (patientList, patId, patName, patAge, gender, add, city) {
        return patientList.push({
            patientId: patId,
            patientName: patName,
            patientAge: patAge,
            gender: gender,
            address: add,
            city: city
        });
    };