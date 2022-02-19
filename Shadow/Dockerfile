FROM quay.io/lyfe00011/test:beta

RUN git clone https://github.com/SPARK-SHADOW/Shadow-Bot /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
RUN yarn install --no-audit
RUN git clone https://SPARK-SHADOW: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@github.com/SPARK-SHADOW/uploads
RUN cp -R /root/Utils/* /root/WhatsAsenaDuplicated 
CMD ["node", "bot.js"]
