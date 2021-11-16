FROM quay.io/lyfe00011/test:beta

RUN git clone https://SPARK-SHADOW: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@github.com/SPARK-SHADOW/BETA-MOD /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
RUN yarn install --no-audit
RUN git clone https://github.com/SPARK-SHADOW/uploads
RUN cp -R /root/Utils/* /root/WhatsAsenaDuplicated 
CMD ["node", "bot.js"]
