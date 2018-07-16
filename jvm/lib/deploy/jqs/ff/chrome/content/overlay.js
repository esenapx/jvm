/*===========================================================================
 * Licensed Materials - Property of IBM
 * "Restricted Materials of IBM"
 * 
 * IBM SDK, Java(tm) Technology Edition, v6
 * (C) Copyright IBM Corp. 2011, 2011. All Rights Reserved
 *
 * US Government Users Restricted Rights - Use, duplication or disclosure
 * restricted by GSA ADP Schedule Contract with IBM Corp.
 *===========================================================================
 */
// %W% %E%
//
// Copyright (c) 2007, Oracle and/or its affiliates. All rights reserved.
// ORACLE PROPRIETARY/CONFIDENTIAL.  Use is subject to license terms.
//

// get the JQS extension directory
const id = "jqs@sun.com";
var ext = Components.classes["@mozilla.org/extensions/manager;1"]
                    .getService(Components.interfaces.nsIExtensionManager)
                    .getInstallLocation(id)
                    .getItemLocation(id); 

// create an nsILocalFile for the executable
var file = Components.classes["@mozilla.org/file/local;1"]
                     .createInstance(Components.interfaces.nsILocalFile);

// construct command line                     
file.initWithPath(ext.path + "\\..\\..\\..\\..\\bin\\jqsnotify.exe");

// and launch it
file.launch();

