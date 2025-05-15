# Subresource Integrity (SRI) Hash Reference

This document provides a reference of all SRI hashes generated for the Capture App's external resources. These hashes help ensure the integrity of resources loaded from external sources.

## JavaScript Files

| Filename | SRI Hash (sha384) |
|----------|-------------------|
| jquery-3.5.1.min.dc5e7f18c8.js | sha384-ZvpUoO/+PpLXR1lu4jmpXWu80pZlYUAfxl5NsBMWOEPSjUn/6Z/hRTt8+pR6L4N2 |
| moment.min.js | sha384-Uz1UHyakAAz121kPY0Nx6ZGzYeUTy9zAtcpdwVmFCEwiTGPA2K6zSGgkKJEQfMhK |
| moment-timezone-with-data-10-year-range.min.js | sha384-U88YDmPjFo9NFv/tOOXgMFc856dZ9CavT0KKbtEmU01JNsmxpXzmqbUx2fX4iAS/ |
| scrolldisable.js | sha384-0K3V7R6NOVeXPpdL8PkMBc1btqYlkNYcwybuQ1Hd0cYS1FlcdNptoXd7ChI53ygW |
| autovideo.js | sha384-sjcJLsPP08TiwC38DV4UMNtnXimufoG9lTQxiEwEPNf2hMfAPnt803Qs6snh9oKP |
| capture-eye.bundled.js | sha384-hlwb8L0AhsrXqk9ilUbsVRXszqiccdUjpcoyN+LPRQT+XmcnsBJ4nOZ+a35rO4Dy |
| webbrain-widget.min.js | sha384-sgSkbaGTx0msqRTALX+vsv7V9RG8/nn7/2wF8Skqzo5wIO15fBiJDv+vP+MLV2Px |

## CSS Files

| Filename | SRI Hash (sha384) |
|----------|-------------------|
| capture-testing.webflow.0ac0be8a2.min.css | sha384-LRuPadVba4kk3iEfpybUzW3JFhM6VfuvsxJjtdV+hb+bGPoymdkkZUqnQirCc31I |

## How to Use SRI Hashes

When including external resources in your HTML, add the `integrity` and `crossorigin` attributes to the script or link tags:

### For JavaScript:

```html
<script src="path/to/script.js" 
        integrity="sha384-your-hash-here" 
        crossorigin="anonymous"></script>
```

### For CSS:

```html
<link rel="stylesheet" href="path/to/style.css" 
      integrity="sha384-your-hash-here" 
      crossorigin="anonymous">
```

## Generating New SRI Hashes

To generate SRI hashes for new resources, use the provided script:

```bash
node scripts/generate-sri.js path/to/resource
```

## Security Benefits

1. **Protection Against CDN Compromises**: Even if a CDN is compromised, modified scripts will fail to execute
2. **Content Verification**: Ensures the exact version of a resource is being used
3. **Defense in Depth**: Adds an extra layer of security to your web application
