
function Fingerprint() {
}

Fingerprint.prototype.show = function (params, successCallback, errorCallback) {
  cordova.exec(
    successCallback,
    errorCallback,
    "Fingerprint",
    "authenticate",
    [ params ]
  );
};

Fingerprint.prototype.isAvailable = function (successCallback, errorCallback) {
  cordova.exec(
    successCallback,
    errorCallback,
    "Fingerprint",
    "isAvailable",
    [{}]
  );
};

Fingerprint = new Fingerprint();
module.exports = Fingerprint;

