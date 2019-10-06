import * as pulumi from "@pulumi/pulumi";
import * as azure from "@pulumi/azure";

const resourceGroup = new azure.core.ResourceGroup("pulumi-workshop", {
    name: "pulumi-workshop",
    location: azure.Locations.WestUS,
});

const storageAccount = new azure.storage.Account("storage", {
    resourceGroupName: resourceGroup.name,
    accountReplicationType: "LRS",
    accountTier: "Standard",
});

const plan = new azure.appservice.Plan("asp", {
    resourceGroupName: resourceGroup.name,
    kind: "FunctionApp",
    sku: {
        tier: "Dynamic",
        size: "Y1",
    },
});
