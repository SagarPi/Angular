/// <reference path="../Module/Module.js" />
/// <reference path="../Module/Service.js" />

app.controller('myController', function ($scope, crudService) {
    $scope.patient = {
        patientId: 0,
        patientName: '',
        patientAge: 0,
        gender: '',
        address: '',
        city: ''
    }; 
    
    $scope.Patients = crudService.getPatientsList;

    $scope.save = function () {
        crudService.savePatient($scope.Patients, $scope.patient);
    };

    $scope.clear = function () {
        crudService.clearPatient($scope.patient);
    };


    $scope.select = function (patient) {
        $scope.patient = {
            patientId: patient.patientId,
            patientName: patient.patientName,
            patientAge: patient.patientAge,
            gender: patient.gender,
            address: patient.address,
            city: patient.city
        };
    };

});