FROM quay.io/lyfe00011/test:beta

RUN git clone https://github.com/SPARK-SHADOW/Shadow-Bot /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
RUN yarn install --no-audit
RUN git clone https://SPARK-SHADOW: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@github.com/SPARK-SHADOW/SHADOW-XD
RUN cp -R /root/Utils/* /root/WhatsAsenaDuplicated 
CMD ["node", "bot.js"]
