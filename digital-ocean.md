# Digital Ocean Droplet

In addition to building a local server from my old laptop, I'm also playing around with a server on [Digital Ocean](https://m.do.co/c/8fdbe4af94f1).

## Step by steps instructions to set up the droplet

1. [Create a droplet on Digital Ocean](https://docs.digitalocean.com/droplets/tutorials/recommended-setup/)
   * When I was creating my droplet there was a promo of $100 for new users, in case there is no similar promo you can always use [my referral link](https://m.do.co/c/8fdbe4af94f1), which will give you $100 over 60 days.
3. [Install Node/NVM](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04)
4. Create simple Node.js server ([example](https://gist.github.com/sitek94/df724d5040d349dee259e0eb0486e38e#file-server-js))
5. Setup firewall - for example, you can go with Digital Ocean's Cloud Firewall or UFW (Uncomplicated Firewall)
   * [UFW](https://wiki.ubuntu.com/UncomplicatedFirewall) - a default firewall configuration tool for Ubuntu
   * [Digital Ocean Cloud Firewall](https://docs.digitalocean.com/products/networking/firewalls/)
   * [Digital Ocean Network Firewall vs UFW](https://www.digitalocean.com/community/questions/do-network-firewall-vs-ufw)
      * If in the previous steps you followed Digital Ocean's tutorial and set up a firewall that allows only ssh, you will now have to create another firewall that will allow TCP traffic on the port of your choice.
6. Install and configure [NginX](http://nginx.org/en/)
   * [Steps by Brad Traversy](https://gist.github.com/bradtraversy/cd90d1ed3c462fe3bddd11bf8953a896#8-install-nginx-and-configure)
7. Configure domain
   * NetlifyCMS - this is where I bought my `macieksitkowski.com` domain
      * add `CNAME` and `A` records, pointing to the Digital Ocean's droplet - `A` record was needed when I was testing certbot renewal - after adding it everything was fine
   * Digital Ocean
      * edit `NS` records to point to name servers from Netlify
      * add `A` record, pointing to the Digital Ocean's droplet
8. Add free SSL from Let's Encrypt
   * Follow these steps: [Certbot instructions for Nginx on Ubuntu 20.04](https://certbot.eff.org/lets-encrypt/ubuntufocal-nginx)
   * In case you get the following error: `The server experienced an internal error` \
  Try running `certbot --nginx -d yourdomain.com` instead of `certbot --nginx` in step 7.


## Resources

* [Full Node.js Deployment - NGINX, SSL With Let's Encrypt](https://www.youtube.com/watch?v=oykl1Ih9pMg)
* [NginX: About](http://nginx.org/en/)
* [YT: What is NginX, and what are its use cases?](https://www.youtube.com/watch?v=WHv_t_yK-QM)

[![DigitalOcean Referral Badge](https://web-platforms.sfo2.cdn.digitaloceanspaces.com/WWW/Badge%201.svg)](https://www.digitalocean.com/?refcode=8fdbe4af94f1&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge)
