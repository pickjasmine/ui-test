export const mapToCollection = (response) => {
    if (response && response.occurrences.length) {
        return response.occurrences;
    } else {
        return [];
    }
}

export const mapToModel = (response) => {
    if (response && response.occurrence) {
        return response.occurrence;
    } else {
        return [];
    }
}


/*
    {
            "name": "projects/rode/occurrences/4eb8202c-8ed2-4d0b-9048-b5172de19325",
            "resource": {
                "name": "",
                "uri": "harbor.localhost/library/alpine@sha256:3747d4eb5e7f0825d54c8e80452f1e245e24bd715972c919d189a62da97af2ae",
                "contentHash": null
            },
            "noteName": "projects/rode/notes/harbor",
            "kind": "DISCOVERY",
            "remediation": "",
            "createTime": "2021-02-08T17:13:17Z",
            "updateTime": null,
            "discovered": {
                "discovered": {
                    "continuousAnalysis": "CONTINUOUS_ANALYSIS_UNSPECIFIED",
                    "lastAnalysisTime": null,
                    "analysisStatus": "FINISHED_SUCCESS",
                    "analysisStatusError": null
                }
            }
        }


         {
            "name": "projects/rode/occurrences/7e725f04-954e-44a3-8ac7-e0e7938c7a77",
            "resource": {
                "name": "",
                "uri": "harbor.localhost/test/nginx@sha256:0b159cd1ee1203dad901967ac55eee18c24da84ba3be384690304be93538bea8",
                "contentHash": null
            },
            "noteName": "projects/rode/notes/harbor",
            "kind": "VULNERABILITY",
            "remediation": "",
            "createTime": "2021-02-08T17:27:56Z",
            "updateTime": null,
            "vulnerability": {
                "type": "docker",
                "severity": "SEVERITY_UNSPECIFIED",
                "cvssScore": 0,
                "packageIssue": [
                    {
                        "affectedLocation": {
                            "cpeUri": "https://nvd.nist.gov/vuln/detail/CVE-2016-2781",
                            "package": "coreutils",
                            "version": {
                                "epoch": 0,
                                "name": "coreutils",
                                "revision": "",
                                "kind": "NORMAL"
                            }
                        },
                        "fixedLocation": null,
                        "severityName": ""
                    }
                ],
                "shortDescription": "chroot in GNU coreutils, when used with --userspec, allows local users to escape to the parent session via a crafted TIOCSTI ioctl call, which pushes characters to the terminal's input buffer.",
                "longDescription": "",
                "relatedUrls": [
                    {
                        "url": "http://seclists.org/oss-sec/2016/q1/452",
                        "label": ""
                    },
                    {
                        "url": "http://www.openwall.com/lists/oss-security/2016/02/28/2",
                        "label": ""
                    },
                    {
                        "url": "http://www.openwall.com/lists/oss-security/2016/02/28/3",
                        "label": ""
                    },
                    {
                        "url": "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2016-2781",
                        "label": ""
                    },
                    {
                        "url": "https://lore.kernel.org/patchwork/patch/793178/",
                        "label": ""
                    }
                ],
                "effectiveSeverity": "LOW"
            }
        }
 */