{{/*
Copyright 2020 IBM Corporation

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/}}

{{- /*
"<chart>.sch.chart.config.values" contains the default configuration values used by
the Shared Configurable Helpers overridden for this chart.
*/ -}}
{{- define "uawebapp.sch.chart.config.values" -}}
sch:
  appName: uawebapp
  chart:
    podAntiAffinity:
      preferredDuringScheduling:
        uawebapp:
          weight: 100
          key: app.kubernetes.io/name
          operator: In
          topologyKey: topology.kubernetes.io/zone
      preferredDuringScheduling:
        uawebapp:
          weight: 100
          key: app.kubernetes.io/name
          operator: In
          topologyKey: kubernetes.io/hostname
    nodeAffinity:
      nodeAffinityRequiredDuringScheduling:
        key: beta.kubernetes.io/arch
        operator: In
        values:
          - amd64
      nodeAffinityPreferredDuringScheduling:
        {{ default "application" $.Values.affinityValue }}:
          key: {{ default "worker-type" $.Values.affinityKey }}
          operator: In
          weight: 100
    labelType: "prefixed"
    metering:
      productName: "IBM Curam Universal Access"
      productVersion: "7.0.10"
      productID: "4d7d3640638b478ba11ad1b9db716fd5"
    podSecurityContext:
      hostIPC: false
      hostNetwork: false
      hostPID: false
      securityContext:
        runAsNonRoot: true
    containerSecurityContext:
      securityContext:
        privileged: false
        readOnlyRootFilesystem: false
        allowPrivilegeEscalation: false
        capabilities:
          drop:
            - ALL
{{- end -}}
