var Observation, massObservation, calcificationObservation, asymetryObservation, architecturalDistortionObservation, questionObservation, annotationObservation;
Observation = {
    "resourceType": "Observation",
    "identifier": [{
        "system": "",
        "value": ""
    }],
    "status": "",
    "code": {
        "coding": [{
            //"system": "http://www.radlex.org",
            //"code": "RID39055"http://hl7.org/fhir/ValueSet/observation-codes
            "system": "http://hl7.org/fhir/STU3/valueset-observation-codes.html",
            "code": "",//10193-1
            "Display": "Physical findings of Breasts Narrative"
        }]
    },
    "subject": {
        "reference": ""
    }
}
massObservation =
{
    "valueCodeableConcept": {
        "coding": [{
            "system": "http://hl7.org/fhir/valueset-bodysite-laterality.html",
            "code": "",
            "display": ""
        }]
    },
    "derivedFrom":
        [{
            "reference": "",
        }]
    ,
    "component": [{
        "code": {
            "fhir_comments": ["Location"],
            "coding": [{
                "system": "http://203.64.84.218/mammoDicomWebviewer/newCodeSystem/LocationCS.html",
                "code": "",
                "display": "WindowCenter"
            }, {
                "fhir_comments": [" One view Only "],
                "system": "HemisphereCS",
                "code": "",
                "display": ""
            }]
        }
    }, {
        "code": {
            "coding": [{
                "system": "SizeCS",
                "code": "",
                "display": ""
            }]
        }
    }, {
        "code": {
            "coding": [{
                "system": "http://hl7.org/fhir/us/breast-radiology/2019Sep/ValueSet-breastrad-ShapeVS.html",
                "code": "",
                "display": ""
            }]
        }
    }, {
        "code": {
            "coding": [{
                "system": "http://hl7.org/fhir/us/breast-radiology/2019Sep/ValueSet-breastrad-MarginVS.html",
                "code": "",
                "display": ""
            }]
        }
    }, {
        "code": {
            "coding": [{
                "system": "http://hl7.org/fhir/us/breast-radiology/2019Sep/ValueSet-breastrad-AbnormalityDensityVS.html",
                "code": "",
                "display": ""
            }]
        }
    }]
}
calcificationObservation =
{
    "derivedFrom":
        [{
            "reference": "",
        }]
    ,
    "valueCodeableConcept": {
        "coding": [{
            "system": "http://hl7.org/fhir/valueset-bodysite-laterality.html",
            "code": "",
            "display": ""
        }]
    },
    "component": [{
        "code": {
            "fhir_comments": ["Location"],
            "coding": [{
                "system": "http://203.64.84.218/mammoDicomWebviewer/newCodeSystem/LocationCS.html",
                "code": "",
                "display": "WindowCenter"
            }, {
                "fhir_comments": [" One view Only "],
                "system": "HemisphereCS",
                "code": "",
                "display": ""
            }]
        }
    }, {
        "code": {
            "coding": [{
                "system": "http://hl7.org/fhir/us/breast-radiology/2020MAY/CodeSystem-CalcificationDistributionCS.html",
                "code": "",
                "display": ""
            }]
        }
    }, {
        "code": {
            "coding": [{
                "system": "http://dicom.nema.org/medical/dicom/2016b/output/chtml/part16/sect_CID_6011.html",
                "code": "",
                "display": ""
            }]
        }
    }]
}
asymetryObservation =
{
    "derivedFrom":
        [{
            "reference": "",
        }]
    ,
    "valueCodeableConcept": {
        "coding": [{
            "system": "http://hl7.org/fhir/valueset-bodysite-laterality.html",
            "code": "",
            "display": ""
        }]
    },
    "component": [{
        "code": {
            "fhir_comments": ["Location"],
            "coding": [{
                "system": "http://203.64.84.218/mammoDicomWebviewer/newCodeSystem/LocationCS.html",
                "code": "",
                "display": "WindowCenter"
            }, {
                "fhir_comments": [" One view Only "],
                "system": "HemisphereCS",
                "code": "",
                "display": ""
            }]
        }
    }]
}
architecturalDistortionObservation =
{
    "derivedFrom":
        [{
            "reference": "",
        }]
    ,
    "valueCodeableConcept": {
        "coding": [{
            "system": "http://hl7.org/fhir/valueset-bodysite-laterality.html",
            "code": "",
            "display": ""
        }]
    },
    "component": [{
        "code": {
            "fhir_comments": ["Location"],
            "coding": [{
                "system": "http://203.64.84.218/mammoDicomWebviewer/newCodeSystem/LocationCS.html",
                "code": "",
                "display": ""
            }, {
                "fhir_comments": [" One view Only "],
                "system": "HemisphereCS",
                "code": "",
                "display": ""
            }]
        }
    }]
}
questionObservation =
{
    "derivedFrom":
        [{
            "reference": "",
        }]
    ,
    "component": [{
        "code": {
            "coding": [{
                "system": "http://hl7.org/fhir/us/breastcancer/CodeSystem/RetractionSkin_Right",
                "code": "",
            }]
        }
    }, {
        "code": {
            "coding": [{
                "system": "http://hl7.org/fhir/us/breastcancer/CodeSystem/RetractionSkin_Left",
                "code": "",
            }]
        }
    }, {
        "code": {
            "coding": [{
                "system": "http://hl7.org/fhir/us/breastcancer/CodeSystem/ThickeningSkin_Right",
                "code": "",
            }]
        }
    }, {
        "code": {
            "coding": [{
                "system": "http://hl7.org/fhir/us/breastcancer/CodeSystem/ThickeningSkin_Left",
                "code": "",
            }]
        }
    }, {
        "code": {
            "coding": [{
                "system": "http://hl7.org/fhir/us/breastcancer/CodeSystem/DilatedLactiferous_Right",
                "code": "",
            }]
        }
    }, {
        "code": {
            "coding": [{
                "system": "http://hl7.org/fhir/us/breastcancer/CodeSystem/DilatedLactiferous_Left",
                "code": "",
            }]
        }
    }, {
        "code": {
            "coding": [{
                "system": "http://hl7.org/fhir/us/breast-radiology/2019Sep/CodeSystem-breastrad-LymphNodeQualifiersCS.json.html",
                "code": "",
            }]
        }
    }, {
        "code": {
            "coding": [{
                "system": "http://hl7.org/fhir/us/breast-radiology/2019Sep/CodeSystem-breastrad-LymphNodeQualifiersCS.json.html",
                "code": "",
            }]
        }
    }, {
        "code": {
            "coding": [{
                "system": "http://hl7.org/fhir/us/breast-radiology/2019Sep/CodeSystem-breastrad-answer",
                "code": "",
            }]
        }
    }
    ]
}
annotationObservation =
{
    "basedOn": [{
        "identifier": {
            "system": "http://127.0.0.1:5500/study_22.html",
            "value": "1.2.1840.113681.2198909122.3931.3228559234.102.1"
        }
    }],
    "category": [{
        "coding": [{
            "system": "http://hl7.org/fhir/observation-category",
            "code": "imaging"
        }]
    }],
    "code": {
        "coding": [{
            "system": "https://www.dicom.org.tw/cs/imaging",
            "code": "MR"
        }]
    },
    "component": [{
        "code": {
            "coding": [{
                "system": "https://www.dicom.org.tw/",
                "code": "SVG.Annotation",
                "display": "SVG Annotation"
            }]
        },
        "valueString": ""
    }, {
        "code": {
            "coding": [{
                "system": "https://www.dicom.org.tw/",
                "code": "viewPort.sx",
                "display": "viewPort.sx"
            }]
        },
        "valueString": "0"
    }, {
        "code": {
            "coding": [{
                "system": "https://www.dicom.org.tw/",
                "code": "viewPort.sy",
                "display": "viewPort.sy"
            }]
        },
        "valueString": "0"
    }, {
        "code": {
            "coding": [{
                "system": "https://www.dicom.org.tw/",
                "code": "WindowCenter",
                "display": "WindowCenter"
            }]
        },
        "valueString": "2047"
    }, {
        "code": {
            "coding": [{
                "system": "https://www.dicom.org.tw/",
                "code": "WindowWidth",
                "display": "WindowWidth"
            }]
        },
        "valueString": "4096"
    }, {
        "code": {
            "coding": [{
                "system": "https://www.dicom.org.tw/PixelData",
                "code": "PixelData"
            }]
        },
        "valueString": "11376"
    }, {
        "code": {
            "coding": [{
                "system": "https://www.dicom.org.tw/",
                "code": "DCM File",
                "display": "DCM File"
            }]
        },
        "valueString": "203.64.84.86/DicomWebViewer/Study2/DCMfiles/mammo1.dcm"
    }]
}
var DiagnosticReport = {
    "resourceType": "DiagnosticReport",
    "status": "final",
    "category": [{
        "coding": [{
            "system": "http://terminology.hl7.org/CodeSystem/v2-0074",
            "code": "IMG",
            "display": "Diagnostic Imaging"
        }]
    }],
    "code": {
        "coding": [{
            "system": "http://loinc.org",
            "code": "57023-4",
        }],
    },
    "subject": {
        "reference": ""
    },
    "encounter": {
        "reference": "Encounter/760"
    },
    "resultsInterpreter": [
        {
            "reference": "Practitioner/TCUMI106-radiologist1"
        }
    ],
    "issued": "",
    "result": [],
    "imagingStudy": {
        "reference": ""
    },
    "conclusionCode": [{
        "coding": []
    }]
}
// var fhir = {
//     //"url": "http://203.64.84.218t:8045/fhir/"
//     "url": "http://hapi.fhir.org/baseR4/"
// }
// var result = {
//     "url": "http://hapi.fhir.org/baseDstu3/"
// }

