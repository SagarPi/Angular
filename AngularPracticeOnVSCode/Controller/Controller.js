/// <reference path="../Module/Module.js" />

app.controller('myController', function ($scope) {
    $scope.patient = {
        patientId: 0,
        patientName: '',
        patientAge: 0,
        gender: '',
        address: '',
        city: ''
    }; 
    
    $scope.Patients = [
        { patientId: 101, patientName: 'abhi', patientAge: 40, gender: 'M', address: 'kothrud', city: 'pune' },
        { patientId: 102, patientName: 'sagar', patientAge: 25, gender: 'M', address: 'wakad', city: 'pune' },
        { patientId: 103, patientName: 'priyanka', patientAge: 30, gender: 'F', address: 'bavdhan', city: 'pune' },
        { patientId: 104, patientName: 'ravi', patientAge: 22, gender: 'M', address: 'miyapur', city: 'hyderadbad' },
        { patientId: 105, patientName: 'ajinkya', patientAge: 50, gender: 'M', address: 'birdi', city: 'nagpur' }
    ];

    $scope.save = function () {
        $scope.Patients.push({
            patientId: $scope.patient.patientId,
            patientName: $scope.patient.patientName,
            patientAge: $scope.patient.patientAge,
            gender: $scope.patient.gender,
            address: $scope.patient.address,
            city: $scope.patient.city
        });

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