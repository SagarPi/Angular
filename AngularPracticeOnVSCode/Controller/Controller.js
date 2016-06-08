/// <reference path="../Module/Module.js" />

app.controller('myController', function ($scope, crudService, UIService) {
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

        $scope.patient = {
            patientId: 0,
            patientName: '',
            patientAge: 0,
            gender: '',
            address: '',
            city: ''
        };
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