export const occurrences = {
    "occurrences": [
        {
            "name": "projects/rode/occurrences/4ecde93a-6b28-42d7-8392-65d66988c497",
            "resource": {
                "name": "",
                "uri": "harbor.localhost/library/alpine@sha256:3747d4eb5e7f0825d54c8e80452f1e245e24bd715972c919d189a62da97af2ae",
                "contentHash": null
            },
            "noteName": "projects/rode/notes/harbor",
            "kind": "DISCOVERY",
            "remediation": "",
            "createTime": "2021-02-08T19:47:22Z",
            "updateTime": null,
            "discovered": {
                "discovered": {
                    "continuousAnalysis": "CONTINUOUS_ANALYSIS_UNSPECIFIED",
                    "lastAnalysisTime": null,
                    "analysisStatus": "SCANNING",
                    "analysisStatusError": null
                }
            }
        },
        {
            "name": "projects/rode/occurrences/8af77f8e-88b7-41d3-ae2e-ab3153fb9351",
            "resource": {
                "name": "",
                "uri": "harbor.localhost/library/alpine@sha256:3747d4eb5e7f0825d54c8e80452f1e245e24bd715972c919d189a62da97af2ae",
                "contentHash": null
            },
            "noteName": "projects/rode/notes/harbor",
            "kind": "DISCOVERY",
            "remediation": "",
            "createTime": "2021-02-08T19:47:38Z",
            "updateTime": null,
            "discovered": {
                "discovered": {
                    "continuousAnalysis": "CONTINUOUS_ANALYSIS_UNSPECIFIED",
                    "lastAnalysisTime": null,
                    "analysisStatus": "FINISHED_SUCCESS",
                    "analysisStatusError": null
                }
            }
        },
        {
            "name": "projects/rode/occurrences/4468adb3-0128-41ce-a785-48a23b63ba0d",
            "resource": {
                "name": "",
                "uri": "harbor.localhost/library/nginx@sha256:0b159cd1ee1203dad901967ac55eee18c24da84ba3be384690304be93538bea8",
                "contentHash": null
            },
            "noteName": "projects/rode/notes/harbor",
            "kind": "DISCOVERY",
            "remediation": "",
            "createTime": "2021-02-08T19:48:11Z",
            "updateTime": null,
            "discovered": {
                "discovered": {
                    "continuousAnalysis": "CONTINUOUS_ANALYSIS_UNSPECIFIED",
                    "lastAnalysisTime": null,
                    "analysisStatus": "SCANNING",
                    "analysisStatusError": null
                }
            }
        },
        {
            "name": "projects/rode/occurrences/3708fb7b-b23b-4bc5-b41e-9009afe84c09",
            "resource": {
                "name": "",
                "uri": "harbor.localhost/library/nginx@sha256:0b159cd1ee1203dad901967ac55eee18c24da84ba3be384690304be93538bea8",
                "contentHash": null
            },
            "noteName": "projects/rode/notes/harbor",
            "kind": "DISCOVERY",
            "remediation": "",
            "createTime": "2021-02-08T19:48:18Z",
            "updateTime": null,
            "discovered": {
                "discovered": {
                    "continuousAnalysis": "CONTINUOUS_ANALYSIS_UNSPECIFIED",
                    "lastAnalysisTime": null,
                    "analysisStatus": "FINISHED_SUCCESS",
                    "analysisStatusError": null
                }
            }
        },
        {
            "name": "projects/rode/occurrences/0d11a820-7403-4491-b8af-7beb981c5309",
            "resource": {
                "name": "",
                "uri": "harbor.localhost/library/nginx@sha256:0b159cd1ee1203dad901967ac55eee18c24da84ba3be384690304be93538bea8",
                "contentHash": null
            },
            "noteName": "projects/rode/notes/harbor",
            "kind": "VULNERABILITY",
            "remediation": "",
            "createTime": "2021-02-08T19:48:18Z",
            "updateTime": null,
            "vulnerability": {
                "type": "docker",
                "severity": "SEVERITY_UNSPECIFIED",
                "cvssScore": 0,
                "packageIssue": [
                    {
                        "affectedLocation": {
                            "cpeUri": "https://nvd.nist.gov/vuln/detail/CVE-2011-3374",
                            "package": "apt",
                            "version": {
                                "epoch": 0,
                                "name": "apt",
                                "revision": "",
                                "kind": "NORMAL"
                            }
                        },
                        "fixedLocation": null,
                        "severityName": ""
                    }
                ],
                "shortDescription": "It was found that apt-key in apt, all versions, do not correctly validate gpg keys with the master keyring, leading to a potential man-in-the-middle attack.",
                "longDescription": "",
                "relatedUrls": [
                    {
                        "url": "https://access.redhat.com/security/cve/cve-2011-3374",
                        "label": ""
                    },
                    {
                        "url": "https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=642480",
                        "label": ""
                    },
                    {
                        "url": "https://people.canonical.com/~ubuntu-security/cve/2011/CVE-2011-3374.html",
                        "label": ""
                    },
                    {
                        "url": "https://seclists.org/fulldisclosure/2011/Sep/221",
                        "label": ""
                    },
                    {
                        "url": "https://security-tracker.debian.org/tracker/CVE-2011-3374",
                        "label": ""
                    },
                    {
                        "url": "https://snyk.io/vuln/SNYK-LINUX-APT-116518",
                        "label": ""
                    },
                    {
                        "url": "https://ubuntu.com/security/CVE-2011-3374",
                        "label": ""
                    }
                ],
                "effectiveSeverity": "LOW"
            }
        },
        {
            "name": "projects/rode/occurrences/7b732c3f-6593-42fa-9249-d680cbed52d7",
            "resource": {
                "name": "",
                "uri": "harbor.localhost/library/nginx@sha256:0b159cd1ee1203dad901967ac55eee18c24da84ba3be384690304be93538bea8",
                "contentHash": null
            },
            "noteName": "projects/rode/notes/harbor",
            "kind": "VULNERABILITY",
            "remediation": "",
            "createTime": "2021-02-08T19:48:18Z",
            "updateTime": null,
            "vulnerability": {
                "type": "docker",
                "severity": "SEVERITY_UNSPECIFIED",
                "cvssScore": 0,
                "packageIssue": [
                    {
                        "affectedLocation": {
                            "cpeUri": "https://nvd.nist.gov/vuln/detail/CVE-2019-18276",
                            "package": "bash",
                            "version": {
                                "epoch": 0,
                                "name": "bash",
                                "revision": "",
                                "kind": "NORMAL"
                            }
                        },
                        "fixedLocation": null,
                        "severityName": ""
                    }
                ],
                "shortDescription": "An issue was discovered in disable_priv_mode in shell.c in GNU Bash through 5.0 patch 11. By default, if Bash is run with its effective UID not equal to its real UID, it will drop privileges by setting its effective UID to its real UID. However, it does so incorrectly. On Linux and other systems that support \"saved UID\" functionality, the saved UID is not dropped. An attacker with command execution in the shell can use \"enable -f\" for runtime loading of a new builtin, which can be a shared object that calls setuid() and therefore regains privileges. However, binaries running with an effective UID of 0 are unaffected.",
                "longDescription": "",
                "relatedUrls": [
                    {
                        "url": "http://packetstormsecurity.com/files/155498/Bash-5.0-Patch-11-Privilege-Escalation.html",
                        "label": ""
                    },
                    {
                        "url": "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-18276",
                        "label": ""
                    },
                    {
                        "url": "https://github.com/bminor/bash/commit/951bdaad7a18cc0dc1036bba86b18b90874d39ff",
                        "label": ""
                    },
                    {
                        "url": "https://security.netapp.com/advisory/ntap-20200430-0003/",
                        "label": ""
                    },
                    {
                        "url": "https://www.youtube.com/watch?v=-wGtxJ8opa8",
                        "label": ""
                    }
                ],
                "effectiveSeverity": "LOW"
            }
        },
        {
            "name": "projects/rode/occurrences/9cb8f2db-4fcf-42c1-84b6-da7260e567e1",
            "resource": {
                "name": "",
                "uri": "harbor.localhost/library/nginx@sha256:0b159cd1ee1203dad901967ac55eee18c24da84ba3be384690304be93538bea8",
                "contentHash": null
            },
            "noteName": "projects/rode/notes/harbor",
            "kind": "VULNERABILITY",
            "remediation": "",
            "createTime": "2021-02-08T19:48:18Z",
            "updateTime": null,
            "vulnerability": {
                "type": "docker",
                "severity": "SEVERITY_UNSPECIFIED",
                "cvssScore": 0,
                "packageIssue": [
                    {
                        "affectedLocation": {
                            "cpeUri": "https://nvd.nist.gov/vuln/detail/TEMP-0841856-B18BAF",
                            "package": "bash",
                            "version": {
                                "epoch": 0,
                                "name": "bash",
                                "revision": "",
                                "kind": "NORMAL"
                            }
                        },
                        "fixedLocation": null,
                        "severityName": ""
                    }
                ],
                "shortDescription": "",
                "longDescription": "",
                "relatedUrls": [],
                "effectiveSeverity": "LOW"
            }
        },
        {
            "name": "projects/rode/occurrences/e5645f1d-ae68-469d-b874-0a8db021e855",
            "resource": {
                "name": "",
                "uri": "harbor.localhost/library/nginx@sha256:0b159cd1ee1203dad901967ac55eee18c24da84ba3be384690304be93538bea8",
                "contentHash": null
            },
            "noteName": "projects/rode/notes/harbor",
            "kind": "VULNERABILITY",
            "remediation": "",
            "createTime": "2021-02-08T19:48:18Z",
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
        },
        {
            "name": "projects/rode/occurrences/dec44b52-e691-4533-86a0-75de02b2e85f",
            "resource": {
                "name": "",
                "uri": "harbor.localhost/library/nginx@sha256:0b159cd1ee1203dad901967ac55eee18c24da84ba3be384690304be93538bea8",
                "contentHash": null
            },
            "noteName": "projects/rode/notes/harbor",
            "kind": "VULNERABILITY",
            "remediation": "",
            "createTime": "2021-02-08T19:48:18Z",
            "updateTime": null,
            "vulnerability": {
                "type": "docker",
                "severity": "SEVERITY_UNSPECIFIED",
                "cvssScore": 0,
                "packageIssue": [
                    {
                        "affectedLocation": {
                            "cpeUri": "https://nvd.nist.gov/vuln/detail/CVE-2017-18018",
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
                "shortDescription": "In GNU Coreutils through 8.29, chown-core.c in chown and chgrp does not prevent replacement of a plain file with a symlink during use of the POSIX \"-R -L\" options, which allows local users to modify the ownership of arbitrary files by leveraging a race condition.",
                "longDescription": "",
                "relatedUrls": [
                    {
                        "url": "http://lists.gnu.org/archive/html/coreutils/2017-12/msg00045.html",
                        "label": ""
                    }
                ],
                "effectiveSeverity": "LOW"
            }
        },
        {
            "name": "projects/rode/occurrences/7a708c0c-73a6-4f24-99bf-376eeec45ff3",
            "resource": {
                "name": "",
                "uri": "harbor.localhost/library/nginx@sha256:0b159cd1ee1203dad901967ac55eee18c24da84ba3be384690304be93538bea8",
                "contentHash": null
            },
            "noteName": "projects/rode/notes/harbor",
            "kind": "VULNERABILITY",
            "remediation": "",
            "createTime": "2021-02-08T19:48:18Z",
            "updateTime": null,
            "vulnerability": {
                "type": "docker",
                "severity": "SEVERITY_UNSPECIFIED",
                "cvssScore": 0,
                "packageIssue": [
                    {
                        "affectedLocation": {
                            "cpeUri": "https://nvd.nist.gov/vuln/detail/CVE-2020-8169",
                            "package": "curl",
                            "version": {
                                "epoch": 0,
                                "name": "curl",
                                "revision": "",
                                "kind": "NORMAL"
                            }
                        },
                        "fixedLocation": null,
                        "severityName": ""
                    }
                ],
                "shortDescription": "curl 7.62.0 through 7.70.0 is vulnerable to an information disclosure vulnerability that can lead to a partial password being leaked over the network and to the DNS server(s).",
                "longDescription": "",
                "relatedUrls": [
                    {
                        "url": "https://curl.haxx.se/docs/CVE-2020-8169.html",
                        "label": ""
                    },
                    {
                        "url": "https://curl.se/docs/CVE-2020-8169.html",
                        "label": ""
                    },
                    {
                        "url": "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-8169",
                        "label": ""
                    },
                    {
                        "url": "https://hackerone.com/reports/874778",
                        "label": ""
                    },
                    {
                        "url": "https://usn.ubuntu.com/usn/usn-4402-1",
                        "label": ""
                    }
                ],
                "effectiveSeverity": "HIGH"
            }
        }
    ],
    "nextPageToken": ""
};