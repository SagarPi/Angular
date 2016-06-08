///<reference path="Module.js"/>

app.service('crudService', function()
{
    this.savePatient = function (patientList, patient) {
        return patientList.push({
            patientId: patient.patientId,
            patientName: patient.patientName,
            patientAge: patient.patientAge,
            gender: patient.gender,
            address: patient.address,
            city: patient.city
        });
    };

    this.getPatientsList = [
        { patientId: 101, patientName: 'abhi', patientAge: 40, gender: 'M', address: 'kothrud', city: 'pune' },
        { patientId: 102, patientName: 'sagar', patientAge: 25, gender: 'M', address: 'wakad', city: 'pune' },
        { patientId: 103, patientName: 'priyanka', patientAge: 30, gender: 'F', address: 'bavdhan', city: 'pune' },
        { patientId: 104, patientName: 'ravi', patientAge: 22, gender: 'M', address: 'miyapur', city: 'hyderadbad' },
        { patientId: 105, patientName: 'ajinkya', patientAge: 50, gender: 'M', address: 'birdi', city: 'nagpur' }
    ];
});