var fs = require('fs');
//var callback = sinon.spy();

var readFileStub = sinon.stub(fs, 'readFile', (path,cb) => {
  return cb(null, 'filecontent');
});

expect(readFileStub).to.be.called;
readFileStub.restore();