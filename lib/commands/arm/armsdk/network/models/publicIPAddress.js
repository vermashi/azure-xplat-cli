/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Public IP address resource.
 *
 * @extends models['Resource']
 */
class PublicIPAddress extends models['Resource'] {
  /**
   * Create a PublicIPAddress.
   * @member {object} [sku] The public IP address SKU.
   * @member {string} [sku.name] Name of a public IP address SKU. Possible
   * values include: 'Basic', 'Standard'
   * @member {string} [publicIPAllocationMethod] The public IP allocation
   * method. Possible values are: 'Static' and 'Dynamic'. Possible values
   * include: 'Static', 'Dynamic'
   * @member {string} [publicIPAddressVersion] The public IP address version.
   * Possible values are: 'IPv4' and 'IPv6'. Possible values include: 'IPv4',
   * 'IPv6'
   * @member {object} [ipConfiguration] The IP configuration associated with
   * the public IP address.
   * @member {string} [ipConfiguration.privateIPAddress] The private IP address
   * of the IP configuration.
   * @member {string} [ipConfiguration.privateIPAllocationMethod] The private
   * IP allocation method. Possible values are 'Static' and 'Dynamic'. Possible
   * values include: 'Static', 'Dynamic'
   * @member {object} [ipConfiguration.subnet] The reference of the subnet
   * resource.
   * @member {string} [ipConfiguration.subnet.addressPrefix] The address prefix
   * for the subnet.
   * @member {object} [ipConfiguration.subnet.networkSecurityGroup] The
   * reference of the NetworkSecurityGroup resource.
   * @member {array}
   * [ipConfiguration.subnet.networkSecurityGroup.securityRules] A collection
   * of security rules of the network security group.
   * @member {array}
   * [ipConfiguration.subnet.networkSecurityGroup.defaultSecurityRules] The
   * default security rules of network security group.
   * @member {array}
   * [ipConfiguration.subnet.networkSecurityGroup.networkInterfaces] A
   * collection of references to network interfaces.
   * @member {array} [ipConfiguration.subnet.networkSecurityGroup.subnets] A
   * collection of references to subnets.
   * @member {string}
   * [ipConfiguration.subnet.networkSecurityGroup.resourceGuid] The resource
   * GUID property of the network security group resource.
   * @member {string}
   * [ipConfiguration.subnet.networkSecurityGroup.provisioningState] The
   * provisioning state of the public IP resource. Possible values are:
   * 'Updating', 'Deleting', and 'Failed'.
   * @member {string} [ipConfiguration.subnet.networkSecurityGroup.etag] A
   * unique read-only string that changes whenever the resource is updated.
   * @member {object} [ipConfiguration.subnet.routeTable] The reference of the
   * RouteTable resource.
   * @member {array} [ipConfiguration.subnet.routeTable.routes] Collection of
   * routes contained within a route table.
   * @member {array} [ipConfiguration.subnet.routeTable.subnets] A collection
   * of references to subnets.
   * @member {string} [ipConfiguration.subnet.routeTable.provisioningState] The
   * provisioning state of the resource. Possible values are: 'Updating',
   * 'Deleting', and 'Failed'.
   * @member {string} [ipConfiguration.subnet.routeTable.etag] Gets a unique
   * read-only string that changes whenever the resource is updated.
   * @member {array} [ipConfiguration.subnet.serviceEndpoints] An array of
   * service endpoints.
   * @member {array} [ipConfiguration.subnet.ipConfigurations] Gets an array of
   * references to the network interface IP configurations using subnet.
   * @member {array} [ipConfiguration.subnet.resourceNavigationLinks] Gets an
   * array of references to the external resources using subnet.
   * @member {string} [ipConfiguration.subnet.provisioningState] The
   * provisioning state of the resource.
   * @member {string} [ipConfiguration.subnet.name] The name of the resource
   * that is unique within a resource group. This name can be used to access
   * the resource.
   * @member {string} [ipConfiguration.subnet.etag] A unique read-only string
   * that changes whenever the resource is updated.
   * @member {object} [ipConfiguration.publicIPAddress] The reference of the
   * public IP resource.
   * @member {string} [ipConfiguration.provisioningState] Gets the provisioning
   * state of the public IP resource. Possible values are: 'Updating',
   * 'Deleting', and 'Failed'.
   * @member {string} [ipConfiguration.name] The name of the resource that is
   * unique within a resource group. This name can be used to access the
   * resource.
   * @member {string} [ipConfiguration.etag] A unique read-only string that
   * changes whenever the resource is updated.
   * @member {object} [dnsSettings] The FQDN of the DNS record associated with
   * the public IP address.
   * @member {string} [dnsSettings.domainNameLabel] Gets or sets the Domain
   * name label.The concatenation of the domain name label and the regionalized
   * DNS zone make up the fully qualified domain name associated with the
   * public IP address. If a domain name label is specified, an A DNS record is
   * created for the public IP in the Microsoft Azure DNS system.
   * @member {string} [dnsSettings.fqdn] Gets the FQDN, Fully qualified domain
   * name of the A DNS record associated with the public IP. This is the
   * concatenation of the domainNameLabel and the regionalized DNS zone.
   * @member {string} [dnsSettings.reverseFqdn] Gets or Sets the Reverse FQDN.
   * A user-visible, fully qualified domain name that resolves to this public
   * IP address. If the reverseFqdn is specified, then a PTR DNS record is
   * created pointing from the IP address in the in-addr.arpa domain to the
   * reverse FQDN.
   * @member {string} [ipAddress] The IP address associated with the public IP
   * address resource.
   * @member {number} [idleTimeoutInMinutes] The idle timeout of the public IP
   * address.
   * @member {string} [resourceGuid] The resource GUID property of the public
   * IP resource.
   * @member {string} [provisioningState] The provisioning state of the
   * PublicIP resource. Possible values are: 'Updating', 'Deleting', and
   * 'Failed'.
   * @member {string} [etag] A unique read-only string that changes whenever
   * the resource is updated.
   * @member {array} [zones] A list of availability zones denoting the IP
   * allocated for the resource needs to come from.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of PublicIPAddress
   *
   * @returns {object} metadata of PublicIPAddress
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PublicIPAddress',
      type: {
        name: 'Composite',
        className: 'PublicIPAddress',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          location: {
            required: false,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          tags: {
            required: false,
            serializedName: 'tags',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          sku: {
            required: false,
            serializedName: 'sku',
            type: {
              name: 'Composite',
              className: 'PublicIPAddressSku'
            }
          },
          publicIPAllocationMethod: {
            required: false,
            serializedName: 'properties.publicIPAllocationMethod',
            type: {
              name: 'String'
            }
          },
          publicIPAddressVersion: {
            required: false,
            serializedName: 'properties.publicIPAddressVersion',
            type: {
              name: 'String'
            }
          },
          ipConfiguration: {
            required: false,
            readOnly: true,
            serializedName: 'properties.ipConfiguration',
            type: {
              name: 'Composite',
              className: 'IPConfiguration'
            }
          },
          dnsSettings: {
            required: false,
            serializedName: 'properties.dnsSettings',
            type: {
              name: 'Composite',
              className: 'PublicIPAddressDnsSettings'
            }
          },
          ipAddress: {
            required: false,
            serializedName: 'properties.ipAddress',
            type: {
              name: 'String'
            }
          },
          idleTimeoutInMinutes: {
            required: false,
            serializedName: 'properties.idleTimeoutInMinutes',
            type: {
              name: 'Number'
            }
          },
          resourceGuid: {
            required: false,
            serializedName: 'properties.resourceGuid',
            type: {
              name: 'String'
            }
          },
          provisioningState: {
            required: false,
            serializedName: 'properties.provisioningState',
            type: {
              name: 'String'
            }
          },
          etag: {
            required: false,
            serializedName: 'etag',
            type: {
              name: 'String'
            }
          },
          zones: {
            required: false,
            serializedName: 'zones',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = PublicIPAddress;