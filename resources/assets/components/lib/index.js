(function (cjs, an) {
  var p; // shortcut to reference prototypes
  var lib = {};
  var ss = {};
  var img = {};
  lib.ssMetadata = [];

  // symbols:

  (lib.Image = function () {
    this.initialize(img.Image);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1154, 1058);

  (lib.Image_1 = function () {
    this.initialize(img.Image_1);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1836, 1465); // helper functions:

  function mc_symbol_clone() {
    var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
    clone.gotoAndStop(this.currentFrame);
    clone.paused = this.paused;
    clone.framerate = this.framerate;
    return clone;
  }

  function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
    var prototype = cjs.extend(symbol, cjs.MovieClip);
    prototype.clone = mc_symbol_clone;
    prototype.nominalBounds = nominalBounds;
    prototype.frameBounds = frameBounds;
    return prototype;
  }

  (lib.VideoDownload = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#000000")
      .s()
      .p(
        "AhNMXIpxqfQgeggACgsQABgsAhgeQAggeAsACQAtABAeAgIG6HYIAAyMQAAgsAfgfQAgggArAAQAsAAAfAgQAfAfAAAsIAASMIG3nYQAfggArgBQAsgCAgAeQAhAeABArQABAtgeAgIpyKfQgfAiguAAQguAAgfgig"
      );
    this.shape.setTransform(309.3474, 355.275);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f()
      .s("#000000")
      .ss(24)
      .p(
        "AVQAAQAAEVhrD9QhnD0i9C7Qi8C9j0BnQj9BrkUAAQkUAAj9hrQj0hni8i9Qi8i7hnj0Qhrj9AAkVQAAkTBrj9QBnj0C8i8QC8i9D0hnQD9hrEUAAQEUAAD9BrQD0BnC8C9QC9C8BnD0QBrD9AAETg"
      );
    this.shape_1.setTransform(309.5, 354.7);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AoQTlQj0hni8i9Qi9i8hnj0Qhrj9AAkUQAAkUBrj9QBnj0C9i8QC8i8D0hnQD8hrEUAAQEVAAD8BrQD1BnC7C8QC9C8BnD0QBrD9AAEUQAAEUhrD9QhnD0i9C8Qi7C9j1BnQj8BrkVAAQkUAAj8hrg"
      );
    this.shape_2.setTransform(309.5, 354.7);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#010002").s().p("An+r7IP9L7Iv9L8g");
    this.shape_3.setTransform(94.575, 254.575);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f("#010002").s().p("AuBL1IAA3pIcCAAIAAXpg");
    this.shape_4.setTransform(194.85, 253.875);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f().s("#000000").ss(24, 1).p("AIQIqIqPAAQimAAh1h1Qh1h1AAimIAArD");
    this.shape_5.setTransform(271, 60.85);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f()
      .s("#000000")
      .ss(24, 1)
      .p("AZyvNMAAAAoNQAADPiTCSQiSCTjPAAMgj7AAAQjPAAiTiTQiSiSAAjPMAAAgx/QAAjQCSiSQCTiSDPAAIatAAQAVAAAPAPIQQQ0QAOAPAAAUg");
    this.shape_6.setTransform(165, 210);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f("#FFFFFF").s().p("EgR9Ag0QjPAAiSiSQiTiTAAjPMAAAgx/QAAjPCTiTQCSiSDPAAIatAAQAWAAAOAPIQQQ0QAOAPAAAUMAAAAoNQAADPiTCTQiSCSjPAAg");
    this.shape_7.setTransform(165, 210);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-12, -12, 489.6, 534.8);

  (lib.an_Video = function (options) {
    this._element = new $.an.Video(options);
    this._el = this._element.create();
    var $this = this;
    this.addEventListener("added", function () {
      $this._lastAddedFrame = $this.parent.currentFrame;
      $this._element.attach($("#dom_overlay_container"));
    });
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 400, 300);

  p._tick = _tick;
  p._handleDrawEnd = _handleDrawEnd;
  p._updateVisibility = _updateVisibility;

  (lib.Tween16 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#333333").s().p("AgGAKIADgTIAKAAIgDATg");
    this.shape.setTransform(-32.125, 127.65);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#333333")
      .s()
      .p(
        "AgSBWQgDgCgEgDQgCgDgCgEQgBgEABgGIARhgIgSAAIABgKIASAAIAJgsIALAAIgIAsIAfAAIgCAKIgeAAIgQBdQgBAHAEAEQAFAEAGAAQAHAAAFgDIAIgDIACAKIgEABIgGADIgJACIgJABQgFAAgFgBg"
      );
    this.shape_1.setTransform(-36.65, 120.125);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#333333")
      .s()
      .p(
        "AAhBBIANhGQAEgZgFgLQgFgMgQAAQgIAAgJADQgHADgIAGQgIAEgHAIQgGAHgFAJIgOBOIgMAAIAWh/IAMAAIgFAeQAFgHAHgGQAHgGAIgFQAIgEAIgCQAJgDAJAAQAVAAAGAPQAHAPgFAcIgNBIg"
      );
    this.shape_2.setTransform(-48.8913, 122.15);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#333333")
      .s()
      .p(
        "AgjA9QgLgFgHgJQgHgJgDgNQgDgMADgNQACgNAHgMQAHgMAKgJQALgJAMgGQANgFAMAAQAOAAALAGQALAFAHAJQAHAJADAMQACAMgCANIgBACIAAADIhyAAQgBALADAJQACAKAGAHQAGAHAIAEQAJAEAKAAQAHAAAFgCQAHgCAGgDQAHgDAFgFIAJgKIAKADQgEAHgGAGQgHAGgIAEQgHAEgJACQgJADgJAAQgNAAgLgGgAgJg0QgKAEgIAHQgIAHgGAJQgGAKgDALIBmAAQACgMgDgJQgDgJgFgHQgGgHgJgEQgIgEgKAAQgKAAgJAEg"
      );
    this.shape_3.setTransform(-62.9943, 122.275);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#333333")
      .s()
      .p(
        "AgRBWQgFgCgCgDQgDgDgCgEQgBgEABgGIARhgIgTAAIACgKIASAAIAIgsIAMAAIgIAsIAeAAIgBAKIgeAAIgQBdQgCAHAFAEQAEAEAHAAQAGAAAHgDIAHgDIACAKIgEABIgGADIgIACIgKABQgFAAgEgBg"
      );
    this.shape_4.setTransform(-73.7, 120.125);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#333333")
      .s()
      .p(
        "AAhBBIANhGQAEgZgFgLQgFgMgQAAQgIAAgJADQgHADgIAGQgIAEgHAIQgGAHgFAJIgOBOIgMAAIAWh/IAMAAIgFAeQAFgHAHgGQAHgGAIgFQAIgEAIgCQAJgDAJAAQAVAAAGAPQAHAPgFAcIgNBIg"
      );
    this.shape_5.setTransform(-85.9413, 122.15);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#333333")
      .s()
      .p(
        "AgjA9QgLgFgHgJQgHgJgCgMQgDgNACgNQACgNAIgMQAHgMAKgJQAKgJAMgFQANgGANAAQANAAALAGQAKAFAIAJQAHAJADAMQACAMgCANQgCANgHANQgIAMgKAJQgKAJgNAFQgMAGgNAAQgOAAgKgGgAgKgyQgKAEgIAIQgIAIgGAKQgHAKgCALQgCALADAKQACAKAGAHQAFAIAJAEQAIAFALAAQAJAAALgFQAKgEAIgIQAJgHAFgKQAGgKACgMQACgLgCgKQgCgKgGgHQgGgIgIgEQgJgFgKAAQgKAAgKAFg"
      );
    this.shape_6.setTransform(-100.2624, 122.275);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#333333")
      .s()
      .p(
        "AggA9QgLgFgHgJQgHgJgCgNQgDgMACgNQADgNAHgMQAGgNAKgIQALgJAMgGQAMgFAOAAQASAAAMAIQANAIAEAOIgNAEQgEgLgKgGQgJgGgNAAQgLAAgJAFQgKAEgIAHQgJAIgFAKQgGAKgCALQgCALACAKQADALAFAHQAGAIAIAEQAJAFAKAAQAGAAAHgCQAHgCAHgEQAGgDAFgEQAFgEACgFIALADQgDAHgGAGQgGAGgIAEQgIAEgJACQgJADgIAAQgOAAgLgGg"
      );
    this.shape_7.setTransform(-114.1818, 122.275);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#333333")
      .s()
      .p(
        "AgsBWQgLgFgHgKQgGgJgDgMQgCgMACgNQACgNAHgMQAHgMAJgJQAKgJAMgFQAMgGAMAAQAIAAAIADQAHACAGAEQAGAEAEAGQAEAFADAGIAOhQIANAAIgdCjQgBAGAFAAIgCALIgDABIgCAAQgFAAgDgEQgCgEAAgEIADgPQgKANgPAIQgOAIgPAAQgNAAgLgGgAgTgZQgLAFgIAIQgIAIgFAJQgFAKgCAKQgCAMACAJQADAKAFAIQAGAIAJAEQAIAFALAAQAHAAAJgDQAHgDAIgFIANgLQAGgGABgHIAIgqQgBgGgEgHIgKgLQgGgEgHgDQgHgDgHAAQgLAAgJAFg"
      );
    this.shape_8.setTransform(86.2125, 89.775);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#333333")
      .s()
      .p(
        "AAhBCIANhHQAEgagFgKQgFgMgQAAQgIAAgJADQgHADgIAGQgIAEgHAIQgGAIgFAIIgOBPIgMAAIAWiBIAMAAIgFAgQAFgIAHgGQAHgGAIgFQAIgEAIgCQAJgCAJgBQAVAAAGAPQAHAPgFAbIgNBKg"
      );
    this.shape_9.setTransform(70.4587, 92.15);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#333333")
      .s()
      .p(
        "AglBAQgIgDgFgGQgEgFgCgHQgCgIABgIQACgJAFgGQAFgHAIgFQAIgFALgCQALgDALAAQAKAAAKACQALABAIAEIACgNQADgSgIgLQgJgLgSAAQgKAAgKAEQgMAEgMAIIgDgJQAcgRAVAAQAYAAALAOQAMANgFAYIgLA+QgBAGAGAAIgCALIgDABIgCAAQgFAAgDgEQgCgDAAgFIACgKQgLALgPAHQgPAGgQAAQgJAAgHgDgAgOAAQgJACgGADQgHAEgDAFQgEAGgCAGQgBAHACAFQABAGAEAEQAEAEAFACQAHADAHAAQAOAAAMgGQANgFAJgJQAEgFABgFIAEgXQgIgDgKgBQgJgCgLAAQgIAAgJACg"
      );
    this.shape_10.setTransform(56.2311, 92.275);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#333333")
      .s()
      .p(
        "AgjA9QgLgFgHgJQgHgJgDgNQgDgMADgNQACgNAHgMQAHgMAKgJQALgJAMgGQANgFAMAAQAOAAALAGQALAFAHAJQAHAJADAMQACAMgCANIgBACIAAADIhyAAQgBALADAJQACAKAGAHQAGAHAIAEQAJAEAKAAQAHAAAFgCQAHgCAGgDQAHgDAFgFIAJgKIAKADQgEAHgGAGQgHAGgIAEQgHAEgJACQgJADgJAAQgNAAgLgGgAgJg0QgKAEgIAHQgIAHgGAJQgGAKgDALIBmAAQACgMgDgJQgDgJgFgHQgGgHgJgEQgIgEgKAAQgKAAgJAEg"
      );
    this.shape_11.setTransform(36.4057, 92.275);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#333333")
      .s()
      .p(
        "AgoBbQgJgCgGgEQgGgEgEgGQgFgFgDgHIAKgFQAGANALAGQANAGAPAAQALAAAIgDQAJgDAIgFQAHgFAGgIQAFgIACgLIAEgcQgJANgPAHQgPAIgOAAQgNAAgKgGQgLgFgGgKQgGgJgDgLQgDgMADgMQABgOAIgMQAGgMAKgJQAJgJAMgGQAMgFANAAQARAAALAIQAMAJAGANIAEgcIANAAIgYCCQgBANgIAKQgGAKgKAHQgKAGgMAEQgKADgNAAQgKAAgKgCgAgKhMQgKAFgIAIQgIAIgFAKQgFAKgCAKQgBALABAKQADAJAFAHQAGAIAJAFQAJAEALAAQAHAAAIgDQAIgDAIgFQAIgFAFgGQAFgGACgGIAHgqQgBgHgEgHQgEgGgFgEQgHgFgHgDQgGgCgIAAQgLAAgKAFg"
      );
    this.shape_12.setTransform(20.8, 94.925);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#333333")
      .s()
      .p(
        "AglBAQgIgDgFgGQgEgFgCgHQgCgIABgIQACgJAFgGQAFgHAIgFQAIgFALgCQALgDALAAQAKAAAKACQALABAIAEIACgNQADgSgIgLQgJgLgSAAQgKAAgKAEQgMAEgMAIIgDgJQAcgRAVAAQAYAAALAOQAMANgFAYIgLA+QgBAGAGAAIgCALIgDABIgCAAQgFAAgDgEQgCgDAAgFIACgKQgLALgPAHQgPAGgQAAQgJAAgHgDgAgOAAQgJACgGADQgHAEgDAFQgEAGgCAGQgBAHACAFQABAGAEAEQAEAEAFACQAHADAHAAQAOAAAMgGQANgFAJgJQAEgFABgFIAEgXQgIgDgKgBQgJgCgLAAQgIAAgJACg"
      );
    this.shape_13.setTransform(6.3311, 92.275);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#333333")
      .s()
      .p(
        "AhIBcIAgi1IAMAAIgFAaQALgMAOgIQAOgIAPAAQAOAAAKAGQALAGAHAJQAGAJACAMQADAMgCANQgCANgHAMQgGAMgKAJQgJAJgMAFQgMAGgOAAQgQAAgLgJQgMgJgGgMIgOBQgAABhNQgHADgHAFQgIAFgGAGQgGAGgCAHIgHAqQACAHAEAGQAEAGAGAFQAFAEAHADQAGADAIAAQALAAAKgFQAKgFAIgIQAIgHAFgJQAFgKACgLQACgLgCgKQgCgKgGgIQgGgHgJgFQgJgFgLAAQgGAAgJADg"
      );
    this.shape_14.setTransform(-8.06, 94.775);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#333333")
      .s()
      .p(
        "AgsBWQgLgFgHgKQgGgJgDgMQgCgMACgNQACgNAHgMQAHgMAJgJQAKgJAMgFQAMgGAMAAQAIAAAIADQAHACAGAEQAGAEAEAGQAEAFADAGIAOhQIANAAIgdCjQgBAGAFAAIgCALIgDABIgCAAQgFAAgDgEQgCgEAAgEIADgPQgKANgPAIQgOAIgPAAQgNAAgLgGgAgTgZQgLAFgIAIQgIAIgFAJQgFAKgCAKQgCAMACAJQADAKAFAIQAGAIAJAEQAIAFALAAQAHAAAJgDQAHgDAIgFIANgLQAGgGABgHIAIgqQgBgGgEgHIgKgLQgGgEgHgDQgHgDgHAAQgLAAgJAFg"
      );
    this.shape_15.setTransform(-28.8875, 89.775);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f("#333333")
      .s()
      .p(
        "AgjA9QgLgFgHgJQgHgJgDgNQgDgMADgNQACgNAHgMQAHgMAKgJQALgJAMgGQANgFAMAAQAOAAALAGQALAFAHAJQAHAJADAMQACAMgCANIgBACIAAADIhyAAQgBALADAJQACAKAGAHQAGAHAIAEQAJAEAKAAQAHAAAFgCQAHgCAGgDQAHgDAFgFIAJgKIAKADQgEAHgGAGQgHAGgIAEQgHAEgJACQgJADgJAAQgNAAgLgGgAgJg0QgKAEgIAHQgIAHgGAJQgGAKgDALIBmAAQACgMgDgJQgDgJgFgHQgGgHgJgEQgIgEgKAAQgKAAgJAEg"
      );
    this.shape_16.setTransform(-44.2943, 92.275);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#333333")
      .s()
      .p(
        "AgSBWQgDgCgDgDQgEgDgBgEQgBgEABgGIARhgIgSAAIABgKIASAAIAIgsIAMAAIgIAsIAfAAIgCAKIgeAAIgQBdQgBAHAEAEQAFAEAGAAQAGAAAHgDIAHgDIACAKIgEABIgGADIgIACIgKABQgFAAgFgBg"
      );
    this.shape_17.setTransform(-55, 90.125);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f("#333333")
      .s()
      .p(
        "AggA9QgLgFgHgJQgHgJgCgNQgDgMACgNQADgNAHgMQAGgNAKgIQALgJAMgGQAMgFAOAAQASAAAMAIQANAIAEAOIgNAEQgEgLgKgGQgJgGgNAAQgLAAgJAFQgKAEgIAHQgJAIgFAKQgGAKgCALQgCALACAKQADALAFAHQAGAIAIAEQAJAFAKAAQAGAAAHgCQAHgCAHgEQAGgDAFgEQAFgEACgFIALADQgDAHgGAGQgGAGgIAEQgIAEgJACQgJADgIAAQgOAAgLgGg"
      );
    this.shape_18.setTransform(-66.3318, 92.275);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f("#333333")
      .s()
      .p(
        "AgjA9QgLgFgHgJQgHgJgDgNQgDgMADgNQACgNAHgMQAHgMAKgJQALgJAMgGQANgFAMAAQAOAAALAGQALAFAHAJQAHAJADAMQACAMgCANIgBACIAAADIhyAAQgBALADAJQACAKAGAHQAGAHAIAEQAJAEAKAAQAHAAAFgCQAHgCAGgDQAHgDAFgFIAJgKIAKADQgEAHgGAGQgHAGgIAEQgHAEgJACQgJADgJAAQgNAAgLgGgAgJg0QgKAEgIAHQgIAHgGAJQgGAKgDALIBmAAQACgMgDgJQgDgJgFgHQgGgHgJgEQgIgEgKAAQgKAAgJAEg"
      );
    this.shape_19.setTransform(-80.6443, 92.275);

    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics.f("#333333").s().p("AgQBVQgFgGACgLIAbieIANAAIgbCaQgBAHADAFQAEAEAGAAIAHgBIAHgCIABAKIgLADIgKABQgLAAgFgGg");
    this.shape_20.setTransform(-91.2517, 89.725);

    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics
      .f("#333333")
      .s()
      .p(
        "AgjA9QgLgFgHgJQgHgJgDgNQgDgMADgNQACgNAHgMQAHgMAKgJQALgJAMgGQANgFAMAAQAOAAALAGQALAFAHAJQAHAJADAMQACAMgCANIgBACIAAADIhyAAQgBALADAJQACAKAGAHQAGAHAIAEQAJAEAKAAQAHAAAFgCQAHgCAGgDQAHgDAFgFIAJgKIAKADQgEAHgGAGQgHAGgIAEQgHAEgJACQgJADgJAAQgNAAgLgGgAgJg0QgKAEgIAHQgIAHgGAJQgGAKgDALIBmAAQACgMgDgJQgDgJgFgHQgGgHgJgEQgIgEgKAAQgKAAgJAEg"
      );
    this.shape_21.setTransform(-101.7943, 92.275);

    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics
      .f("#333333")
      .s()
      .p(
        "AgkA+QgMgFgJgKIAIgJQAJAKAKAEQALAFANAAQAQAAAMgHQAMgHACgNQABgGgCgEQgCgEgFgDQgEgDgIgCIgQgFIgTgEQgHgCgFgEQgEgDgDgFQgBgFABgIQACgJAFgHQAFgIAHgEQAIgFAJgCQAIgDAKAAQAPAAALAFQALAFAFAIIgIAHQgFgHgKgEQgKgEgLAAQgIAAgGACQgGABgFADQgGAEgDAFQgEAFgCAHQgBAFACAEQABADAEADQADACAHACIAOAEIAVAGQAJACAFAEQAGADACAGQADAFgCAJQgDARgPAKQgQALgWAAQgPAAgNgFg"
      );
    this.shape_22.setTransform(-115.525, 92.275);

    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics
      .f("#333333")
      .s()
      .p(
        "AgjA9QgLgFgHgJQgHgJgDgNQgDgMADgNQACgNAHgMQAHgMAKgJQALgJAMgGQANgFAMAAQAOAAALAGQALAFAHAJQAHAJADAMQACAMgCANIgBACIAAADIhyAAQgBALADAJQACAKAGAHQAGAHAIAEQAJAEAKAAQAHAAAFgCQAHgCAGgDQAHgDAFgFIAJgKIAKADQgEAHgGAGQgHAGgIAEQgHAEgJACQgJADgJAAQgNAAgLgGgAgJg0QgKAEgIAHQgIAHgGAJQgGAKgDALIBmAAQACgMgDgJQgDgJgFgHQgGgHgJgEQgIgEgKAAQgKAAgJAEg"
      );
    this.shape_23.setTransform(83.0557, 62.275);

    this.shape_24 = new cjs.Shape();
    this.shape_24.graphics
      .f("#333333")
      .s()
      .p("AAiBaIAMhIQAJgughAAQgIAAgIADQgHADgIAFQgHAGgGAHQgHAGgEAJIgOBPIgNAAIAgi0IANAAIgPBTQALgPAQgIQAOgKARABQALAAAHADQAHAFAEAHQADAIABAKQABAKgDAMIgNBKg");
    this.shape_24.setTransform(68.0393, 59.65);

    this.shape_25 = new cjs.Shape();
    this.shape_25.graphics
      .f("#333333")
      .s()
      .p(
        "AgRBWQgFgCgDgDQgCgDgCgEQgBgEABgGIARhgIgTAAIACgKIATAAIAHgsIAMAAIgIAsIAeAAIgBAKIgeAAIgQBdQgCAHAFAEQAFAEAGAAQAHAAAGgDIAHgDIACAKIgDABIgHADIgJACIgJABQgFAAgEgBg"
      );
    this.shape_25.setTransform(57.9, 60.125);

    this.shape_26 = new cjs.Shape();
    this.shape_26.graphics
      .f("#333333")
      .s()
      .p(
        "AgjA9QgLgFgHgJQgHgJgCgMQgDgNACgNQACgNAIgMQAHgMAKgJQAKgJAMgFQANgGANAAQANAAALAGQAKAFAIAJQAHAJADAMQACAMgCANQgCANgHANQgIAMgKAJQgKAJgNAFQgMAGgNAAQgOAAgKgGgAgKgyQgKAEgIAIQgIAIgGAKQgHAKgCALQgCALADAKQACAKAGAHQAFAIAJAEQAIAFALAAQAJAAALgFQAKgEAIgIQAJgHAFgKQAGgKACgMQACgLgCgKQgCgKgGgHQgGgIgIgEQgJgFgKAAQgKAAgKAFg"
      );
    this.shape_26.setTransform(39.2876, 62.275);

    this.shape_27 = new cjs.Shape();
    this.shape_27.graphics
      .f("#333333")
      .s()
      .p(
        "AgRBWQgFgCgCgDQgDgDgCgEQgBgEABgGIARhgIgTAAIACgKIASAAIAIgsIAMAAIgIAsIAeAAIgBAKIgeAAIgQBdQgCAHAFAEQAEAEAHAAQAGAAAHgDIAHgDIACAKIgEABIgGADIgIACIgKABQgFAAgEgBg"
      );
    this.shape_27.setTransform(28.9, 60.125);

    this.shape_28 = new cjs.Shape();
    this.shape_28.graphics
      .f("#333333")
      .s()
      .p(
        "AgoBbQgJgCgGgEQgGgEgEgGQgFgFgDgHIAKgFQAGANALAGQANAGAPAAQALAAAIgDQAJgDAIgFQAHgFAGgIQAFgIACgLIAEgcQgJANgPAHQgPAIgOAAQgNAAgKgGQgLgFgGgKQgGgJgDgLQgDgMADgMQABgOAIgMQAGgMAKgJQAJgJAMgGQAMgFANAAQARAAALAIQAMAJAGANIAEgcIANAAIgYCCQgBANgIAKQgGAKgKAHQgKAGgMAEQgKADgNAAQgKAAgKgCgAgKhMQgKAFgIAIQgIAIgEAKQgGAKgCAKQgCALACAKQADAJAFAHQAGAIAJAFQAJAEALAAQAHAAAIgDQAIgDAIgFQAIgFAFgGQAFgGACgGIAHgqQgBgHgEgHQgEgGgFgEQgHgFgHgDQgGgCgIAAQgLAAgKAFg"
      );
    this.shape_28.setTransform(9.55, 64.925);

    this.shape_29 = new cjs.Shape();
    this.shape_29.graphics
      .f("#333333")
      .s()
      .p(
        "AAhBBIANhHQAEgZgFgLQgFgLgQAAQgIAAgJADQgHADgIAFQgIAGgHAHQgGAHgFAJIgOBOIgMAAIAWiAIAMAAIgFAfQAFgHAHgGQAHgGAIgEQAIgFAIgCQAJgDAJABQAVAAAGAOQAHAPgFAbIgNBJg"
      );
    this.shape_29.setTransform(-5.1413, 62.15);

    this.shape_30 = new cjs.Shape();
    this.shape_30.graphics.f("#333333").s().p("AgVBaIAViAIANAAIgWCAgAAGhCIAEgYIAMAAIgEAYg");
    this.shape_30.setTransform(-14.225, 59.65);

    this.shape_31 = new cjs.Shape();
    this.shape_31.graphics
      .f("#333333")
      .s()
      .p(
        "AAhBBIANhHQAEgZgFgLQgFgLgQAAQgIAAgJADQgHADgIAFQgIAGgHAHQgGAHgFAJIgOBOIgMAAIAWiAIAMAAIgFAfQAFgHAHgGQAHgGAIgEQAIgFAIgCQAJgDAJABQAVAAAGAOQAHAPgFAbIgNBJg"
      );
    this.shape_31.setTransform(-24.7913, 62.15);

    this.shape_32 = new cjs.Shape();
    this.shape_32.graphics
      .f("#333333")
      .s()
      .p(
        "AgjA9QgLgFgHgJQgHgJgCgMQgDgNACgNQACgNAIgMQAHgMAKgJQAKgJAMgFQANgGANAAQANAAALAGQAKAFAIAJQAHAJADAMQACAMgCANQgCANgHANQgIAMgKAJQgKAJgNAFQgMAGgNAAQgOAAgKgGgAgKgyQgKAEgIAIQgIAIgGAKQgHAKgCALQgCALADAKQACAKAGAHQAFAIAJAEQAIAFALAAQAJAAALgFQAKgEAIgIQAJgHAFgKQAGgKACgMQACgLgCgKQgCgKgGgHQgGgIgIgEQgJgFgKAAQgKAAgKAFg"
      );
    this.shape_32.setTransform(-39.1124, 62.275);

    this.shape_33 = new cjs.Shape();
    this.shape_33.graphics.f("#333333").s().p("AgVBaIAViAIANAAIgWCAgAAGhCIAEgYIAMAAIgEAYg");
    this.shape_33.setTransform(-48.725, 59.65);

    this.shape_34 = new cjs.Shape();
    this.shape_34.graphics
      .f("#333333")
      .s()
      .p(
        "AgSBWQgDgCgDgDQgEgDgBgEQgBgEABgGIARhgIgSAAIABgKIASAAIAIgsIAMAAIgIAsIAfAAIgCAKIgeAAIgQBdQgBAHAEAEQAFAEAGAAQAGAAAHgDIAHgDIACAKIgEABIgGADIgIACIgKABQgFAAgFgBg"
      );
    this.shape_34.setTransform(-55, 60.125);

    this.shape_35 = new cjs.Shape();
    this.shape_35.graphics.f("#333333").s().p("AgVBaIAViAIANAAIgWCAgAAGhCIAEgYIAMAAIgEAYg");
    this.shape_35.setTransform(-61.925, 59.65);

    this.shape_36 = new cjs.Shape();
    this.shape_36.graphics
      .f("#333333")
      .s()
      .p(
        "AgkA+QgMgFgJgKIAIgJQAJAKAKAEQALAFANAAQAQAAAMgHQAMgHACgNQABgGgCgEQgCgEgFgDQgEgDgIgCIgQgFIgTgEQgHgCgFgEQgEgDgDgFQgBgFABgIQACgJAFgHQAFgIAHgEQAIgFAJgCQAIgDAKAAQAPAAALAFQALAFAFAIIgIAHQgFgHgKgEQgKgEgLAAQgIAAgGACQgGABgFADQgGAEgDAFQgEAFgCAHQgBAFACAEQABADAEADQADACAHACIAOAEIAVAGQAJACAFAEQAGADACAGQADAFgCAJQgDARgPAKQgQALgWAAQgPAAgNgFg"
      );
    this.shape_36.setTransform(-71.225, 62.275);

    this.shape_37 = new cjs.Shape();
    this.shape_37.graphics
      .f("#333333")
      .s()
      .p(
        "AAhBBIANhHQAEgZgFgLQgFgLgQAAQgIAAgJADQgHADgIAFQgIAGgHAHQgGAHgFAJIgOBOIgMAAIAWiAIAMAAIgFAfQAFgHAHgGQAHgGAIgEQAIgFAIgCQAJgDAJABQAVAAAGAOQAHAPgFAbIgNBJg"
      );
    this.shape_37.setTransform(-84.5413, 62.15);

    this.shape_38 = new cjs.Shape();
    this.shape_38.graphics
      .f("#333333")
      .s()
      .p(
        "AglBAQgIgDgFgGQgEgFgCgHQgCgIABgIQACgJAFgGQAFgHAIgFQAIgFALgCQALgDALAAQAKAAAKACQALABAIAEIACgNQADgSgIgLQgJgLgSAAQgKAAgKAEQgMAEgMAIIgDgJQAcgRAVAAQAYAAALAOQAMANgFAYIgLA+QgBAGAGAAIgCALIgDABIgCAAQgFAAgDgEQgCgDAAgFIACgKQgLALgPAHQgPAGgQAAQgJAAgHgDgAgOAAQgJACgGADQgHAEgDAFQgEAGgCAGQgBAHACAFQABAGAEAEQAEAEAFACQAHADAHAAQAOAAAMgGQANgFAJgJQAEgFABgFIAEgXQgIgDgKgBQgJgCgLAAQgIAAgJACg"
      );
    this.shape_38.setTransform(-98.7689, 62.275);

    this.shape_39 = new cjs.Shape();
    this.shape_39.graphics.f("#333333").s().p("AgqBBIAXiAIAMAAIgGAgQAKgOAMgIQANgJAMgBIAFgBIADAAIgCAMQgSABgOAJQgPAKgIARIgOBQg");
    this.shape_39.setTransform(-108.25, 62.225);

    this.shape_40 = new cjs.Shape();
    this.shape_40.graphics
      .f("#333333")
      .s()
      .p(
        "AgSBWQgEgCgCgDQgEgDgBgEQgBgEABgGIARhgIgTAAIACgKIASAAIAIgsIAMAAIgIAsIAeAAIgBAKIgeAAIgQBdQgBAHAEAEQAFAEAGAAQAGAAAHgDIAHgDIACAKIgEABIgGADIgIACIgKABQgFAAgFgBg"
      );
    this.shape_40.setTransform(-116.55, 60.125);

    this.shape_41 = new cjs.Shape();
    this.shape_41.graphics.f("#333333").s().p("AgIAUIAHgTIgFAAIAEgUIALAAIgDAUIgIATg");
    this.shape_41.setTransform(108.85, 38.65);

    this.shape_42 = new cjs.Shape();
    this.shape_42.graphics
      .f("#333333")
      .s()
      .p(
        "AgkA+QgMgFgJgKIAIgJQAJAKAKAEQALAFANAAQAQAAAMgHQAMgHACgNQABgGgCgEQgCgEgFgDQgEgDgIgCIgQgFIgTgEQgHgCgFgEQgEgDgDgFQgBgFABgIQACgJAFgHQAFgIAHgEQAIgFAJgCQAIgDAKAAQAPAAALAFQALAFAFAIIgIAHQgFgHgKgEQgKgEgLAAQgIAAgGACQgGABgFADQgGAEgDAFQgEAFgCAHQgBAFACAEQABADAEADQADACAHACIAOAEIAVAGQAJACAFAEQAGADACAGQADAFgCAJQgDARgPAKQgQALgWAAQgPAAgNgFg"
      );
    this.shape_42.setTransform(100.675, 32.275);

    this.shape_43 = new cjs.Shape();
    this.shape_43.graphics
      .f("#333333")
      .s()
      .p(
        "AgsBWQgLgFgHgKQgGgJgDgMQgCgMACgNQACgNAHgMQAHgMAJgJQAKgJAMgFQAMgGAMAAQAIAAAIADQAHACAGAEQAGAEAEAGQAEAFADAGIAOhQIANAAIgdCjQgBAGAFAAIgCALIgDABIgCAAQgFAAgDgEQgCgEAAgEIADgPQgKANgPAIQgOAIgPAAQgNAAgLgGgAgTgZQgLAFgIAIQgIAIgFAJQgFAKgCAKQgCAMACAJQADAKAFAIQAGAIAJAEQAIAFALAAQAHAAAJgDQAHgDAIgFIANgLQAGgGABgHIAIgqQgBgGgEgHIgKgLQgGgEgHgDQgHgDgHAAQgLAAgJAFg"
      );
    this.shape_43.setTransform(87.6625, 29.775);

    this.shape_44 = new cjs.Shape();
    this.shape_44.graphics.f("#333333").s().p("AgqBBIAXiAIAMAAIgFAgQAJgOAMgIQAMgJANgBIAFgBIAEAAIgDAMQgRABgPAJQgPAKgIARIgOBQg");
    this.shape_44.setTransform(76.55, 32.225);

    this.shape_45 = new cjs.Shape();
    this.shape_45.graphics
      .f("#333333")
      .s()
      .p(
        "AglBAQgIgDgFgGQgEgFgCgHQgCgIABgIQACgJAFgGQAFgHAIgFQAIgFALgCQALgDALAAQAKAAAKACQALABAIAEIACgNQADgSgIgLQgJgLgSAAQgKAAgKAEQgMAEgMAIIgDgJQAcgRAVAAQAYAAALAOQAMANgFAYIgLA+QgBAGAGAAIgCALIgDABIgCAAQgFAAgDgEQgCgDAAgFIACgKQgLALgPAHQgPAGgQAAQgJAAgHgDgAgOAAQgJACgGADQgHAEgDAFQgEAGgCAGQgBAHACAFQABAGAEAEQAEAEAFACQAHADAHAAQAOAAAMgGQANgFAJgJQAEgFABgFIAEgXQgIgDgKgBQgJgCgLAAQgIAAgJACg"
      );
    this.shape_45.setTransform(64.1811, 32.275);

    this.shape_46 = new cjs.Shape();
    this.shape_46.graphics.f("#333333").s().p("AAHBBIgRhEIgpBEIgLAAIghiAIAMAAIAdByIAng/IgNgzIALAAIAKAqIAYgqIAMAAIgfAzIAQA/IBGhyIANAAIhQCAg");
    this.shape_46.setTransform(49.3, 32.25);

    this.shape_47 = new cjs.Shape();
    this.shape_47.graphics
      .f("#333333")
      .s()
      .p(
        "AAhBCIANhIQAEgYgFgMQgFgLgQAAQgIAAgJADQgHADgIAFQgIAFgHAIQgGAHgFAJIgOBPIgMAAIAWiAIAMAAIgFAeQAFgHAHgGQAHgGAIgFQAIgEAIgCQAJgDAJAAQAVAAAGAPQAHAPgFAcIgNBJg"
      );
    this.shape_47.setTransform(30.7587, 32.15);

    this.shape_48 = new cjs.Shape();
    this.shape_48.graphics.f("#333333").s().p("AAHBBIgRhEIgpBEIgKAAIgiiAIALAAIAeByIAng/IgNgzIALAAIALAqIAXgqIAMAAIgfAzIAQA/IBGhyIAMAAIhPCAg");
    this.shape_48.setTransform(14.85, 32.25);

    this.shape_49 = new cjs.Shape();
    this.shape_49.graphics
      .f("#333333")
      .s()
      .p(
        "AgjA9QgLgFgHgJQgHgJgCgMQgDgNACgNQACgNAIgMQAHgMAKgJQAKgJAMgFQANgGANAAQANAAALAGQAKAFAIAJQAHAJADAMQACAMgCANQgCANgHANQgIAMgKAJQgKAJgNAFQgMAGgNAAQgOAAgKgGgAgKgyQgKAEgIAIQgIAIgGAKQgHAKgCALQgCALADAKQACAKAGAHQAFAIAJAEQAIAFALAAQAJAAALgFQAKgEAIgIQAJgHAFgKQAGgKACgMQACgLgCgKQgCgKgGgHQgGgIgIgEQgJgFgKAAQgKAAgKAFg"
      );
    this.shape_49.setTransform(-3.3124, 32.275);

    this.shape_50 = new cjs.Shape();
    this.shape_50.graphics
      .f("#333333")
      .s()
      .p(
        "AgsBWQgLgFgHgKQgGgJgDgMQgCgMACgNQACgNAHgMQAHgMAJgJQAKgJAMgFQAMgGAMAAQAIAAAIADQAHACAGAEQAGAEAEAGQAEAFADAGIAOhQIANAAIgdCjQgBAGAFAAIgCALIgDABIgCAAQgFAAgDgEQgCgEAAgEIADgPQgKANgPAIQgOAIgPAAQgNAAgLgGgAgTgZQgLAFgIAIQgIAIgFAJQgFAKgCAKQgCAMACAJQADAKAFAIQAGAIAJAEQAIAFALAAQAHAAAJgDQAHgDAIgFIANgLQAGgGABgHIAIgqQgBgGgEgHIgKgLQgGgEgHgDQgHgDgHAAQgLAAgJAFg"
      );
    this.shape_50.setTransform(-17.9875, 29.775);

    this.shape_51 = new cjs.Shape();
    this.shape_51.graphics
      .f("#333333")
      .s()
      .p(
        "AgkA+QgMgFgJgKIAIgJQAJAKAKAEQALAFANAAQAQAAAMgHQAMgHACgNQABgGgCgEQgCgEgFgDQgEgDgIgCIgQgFIgTgEQgHgCgFgEQgEgDgDgFQgBgFABgIQACgJAFgHQAFgIAHgEQAIgFAJgCQAIgDAKAAQAPAAALAFQALAFAFAIIgIAHQgFgHgKgEQgKgEgLAAQgIAAgGACQgGABgFADQgGAEgDAFQgEAFgCAHQgBAFACAEQABADAEADQADACAHACIAOAEIAVAGQAJACAFAEQAGADACAGQADAFgCAJQgDARgPAKQgQALgWAAQgPAAgNgFg"
      );
    this.shape_51.setTransform(-38.925, 32.275);

    this.shape_52 = new cjs.Shape();
    this.shape_52.graphics
      .f("#333333")
      .s()
      .p(
        "AgjA9QgLgFgHgJQgHgJgDgNQgDgMADgNQACgNAHgMQAHgMAKgJQALgJAMgGQANgFAMAAQAOAAALAGQALAFAHAJQAHAJADAMQACAMgCANIgBACIAAADIhyAAQgBALADAJQACAKAGAHQAGAHAIAEQAJAEAKAAQAHAAAFgCQAHgCAGgDQAHgDAFgFIAJgKIAKADQgEAHgGAGQgHAGgIAEQgHAEgJACQgJADgJAAQgNAAgLgGgAgJg0QgKAEgIAHQgIAHgGAJQgGAKgDALIBmAAQACgMgDgJQgDgJgFgHQgGgHgJgEQgIgEgKAAQgKAAgJAEg"
      );
    this.shape_52.setTransform(-51.8943, 32.275);

    this.shape_53 = new cjs.Shape();
    this.shape_53.graphics
      .f("#333333")
      .s()
      .p(
        "AggA9QgLgFgHgJQgHgJgCgNQgDgMACgNQADgNAHgMQAGgNAKgIQALgJAMgGQAMgFAOAAQASAAAMAIQANAIAEAOIgNAEQgEgLgKgGQgJgGgNAAQgLAAgJAFQgKAEgIAHQgJAIgFAKQgGAKgCALQgCALACAKQADALAFAHQAGAIAIAEQAJAFAKAAQAGAAAHgCQAHgCAHgEQAGgDAFgEQAFgEACgFIALADQgDAHgGAGQgGAGgIAEQgIAEgJACQgJADgIAAQgOAAgLgGg"
      );
    this.shape_53.setTransform(-65.9318, 32.275);

    this.shape_54 = new cjs.Shape();
    this.shape_54.graphics.f("#333333").s().p("AgVBbIAViAIANAAIgWCAgAAGhDIAEgWIAMAAIgEAWg");
    this.shape_54.setTransform(-75.225, 29.65);

    this.shape_55 = new cjs.Shape();
    this.shape_55.graphics
      .f("#333333")
      .s()
      .p(
        "AgjA9QgLgFgHgJQgHgJgCgMQgDgNACgNQACgNAIgMQAHgMAKgJQAKgJAMgFQANgGANAAQANAAALAGQAKAFAIAJQAHAJADAMQACAMgCANQgCANgHANQgIAMgKAJQgKAJgNAFQgMAGgNAAQgOAAgKgGgAgKgyQgKAEgIAIQgIAIgGAKQgHAKgCALQgCALADAKQACAKAGAHQAFAIAJAEQAIAFALAAQAJAAALgFQAKgEAIgIQAJgHAFgKQAGgKACgMQACgLgCgKQgCgKgGgHQgGgIgIgEQgJgFgKAAQgKAAgKAFg"
      );
    this.shape_55.setTransform(-85.6624, 32.275);

    this.shape_56 = new cjs.Shape();
    this.shape_56.graphics
      .f("#333333")
      .s()
      .p("AAiBbIAMhJQAJgughAAQgIAAgIADQgHADgIAFQgHAFgGAIQgHAGgEAJIgOBQIgNAAIAgi0IANAAIgPBSQALgOAQgKQAOgIARgBQALABAHAEQAHADAEAIQADAHABALQABAJgDAOIgNBKg");
    this.shape_56.setTransform(-100.6607, 29.65);

    this.shape_57 = new cjs.Shape();
    this.shape_57.graphics
      .f("#333333")
      .s()
      .p(
        "AggA9QgLgFgHgJQgHgJgCgNQgDgMACgNQADgNAHgMQAGgNAKgIQALgJAMgGQAMgFAOAAQASAAAMAIQANAIAEAOIgNAEQgEgLgKgGQgJgGgNAAQgLAAgJAFQgKAEgIAHQgJAIgFAKQgGAKgCALQgCALACAKQADALAFAHQAGAIAIAEQAJAFAKAAQAGAAAHgCQAHgCAHgEQAGgDAFgEQAFgEACgFIALADQgDAHgGAGQgGAGgIAEQgIAEgJACQgJADgIAAQgOAAgLgGg"
      );
    this.shape_57.setTransform(-114.1318, 32.275);

    this.shape_58 = new cjs.Shape();
    this.shape_58.graphics
      .f("#333333")
      .s()
      .p(
        "AgkA+QgMgFgJgKIAIgJQAJAKAKAEQALAFANAAQAQAAAMgHQAMgHACgNQABgGgCgEQgCgEgFgDQgEgDgIgCIgQgFIgTgEQgHgCgFgEQgEgDgDgFQgBgFABgIQACgJAFgHQAFgIAHgEQAIgFAJgCQAIgDAKAAQAPAAALAFQALAFAFAIIgIAHQgFgHgKgEQgKgEgLAAQgIAAgGACQgGABgFADQgGAEgDAFQgEAFgCAHQgBAFACAEQABADAEADQADACAHACIAOAEIAVAGQAJACAFAEQAGADACAGQADAFgCAJQgDARgPAKQgQALgWAAQgPAAgNgFg"
      );
    this.shape_58.setTransform(61.175, 2.275);

    this.shape_59 = new cjs.Shape();
    this.shape_59.graphics
      .f("#333333")
      .s()
      .p(
        "Ag7AJIANhKIANAAIgNBIQgIAwAhAAQAIAAAIgDQAIgDAHgFQAIgFAGgHQAHgIAEgIIAOhRIANAAIgUBvQgBAGAGAAIgCALIgCAAIgCAAQgFAAgDgDQgEgDABgFIAEgTQgMAPgQAJQgQAJgRAAQgqAAAKg5g"
      );
    this.shape_59.setTransform(48.2779, 2.375);

    this.shape_60 = new cjs.Shape();
    this.shape_60.graphics
      .f("#333333")
      .s()
      .p(
        "AAhBCIANhHQAEgagFgKQgFgMgQAAQgIAAgJADQgHADgIAGQgIAEgHAIQgGAIgFAIIgOBPIgMAAIAWiBIAMAAIgFAgQAFgIAHgGQAHgGAIgFQAIgEAIgCQAJgCAJgBQAVAAAGAPQAHAPgFAbIgNBKg"
      );
    this.shape_60.setTransform(33.1087, 2.15);

    this.shape_61 = new cjs.Shape();
    this.shape_61.graphics
      .f("#333333")
      .s()
      .p(
        "AgjA9QgLgFgHgJQgHgJgDgNQgDgMADgNQACgNAHgMQAHgMAKgJQALgJAMgGQANgFAMAAQAOAAALAGQALAFAHAJQAHAJADAMQACAMgCANIgBACIAAADIhyAAQgBALADAJQACAKAGAHQAGAHAIAEQAJAEAKAAQAHAAAFgCQAHgCAGgDQAHgDAFgFIAJgKIAKADQgEAHgGAGQgHAGgIAEQgHAEgJACQgJADgJAAQgNAAgLgGgAgJg0QgKAEgIAHQgIAHgGAJQgGAKgDALIBmAAQACgMgDgJQgDgJgFgHQgGgHgJgEQgIgEgKAAQgKAAgJAEg"
      );
    this.shape_61.setTransform(19.0057, 2.275);

    this.shape_62 = new cjs.Shape();
    this.shape_62.graphics
      .f("#333333")
      .s()
      .p(
        "ABMBCIAMhHQAFgZgGgLQgFgMgQAAQgIAAgIADQgIADgHAFQgHAGgFAGQgGAIgEAJIgNBPIgNAAIANhHQADgZgEgLQgGgMgQAAQgIAAgIADQgHADgHAFQgHAFgGAHQgGAIgEAJIgOBPIgNAAIAXiBIAMAAIgFAgQAKgQAPgJQAOgJAQAAQARAAAIAKQAIAKgBAPQAZgjAhAAQAVABAHAPQAGAOgFAbIgNBKg"
      );
    this.shape_62.setTransform(-0.2413, 2.15);

    this.shape_63 = new cjs.Shape();
    this.shape_63.graphics.f("#333333").s().p("AgqBBIAXiAIAMAAIgGAgQAKgOAMgIQANgJAMgBIAFgBIAEAAIgDAMQgSABgOAJQgPAKgIARIgOBQg");
    this.shape_63.setTransform(-20.85, 2.225);

    this.shape_64 = new cjs.Shape();
    this.shape_64.graphics
      .f("#333333")
      .s()
      .p(
        "AgjA9QgLgFgHgJQgHgJgDgNQgDgMADgNQACgNAHgMQAHgMAKgJQALgJAMgGQANgFAMAAQAOAAALAGQALAFAHAJQAHAJADAMQACAMgCANIgBACIAAADIhyAAQgBALADAJQACAKAGAHQAGAHAIAEQAJAEAKAAQAHAAAFgCQAHgCAGgDQAHgDAFgFIAJgKIAKADQgEAHgGAGQgHAGgIAEQgHAEgJACQgJADgJAAQgNAAgLgGgAgJg0QgKAEgIAHQgIAHgGAJQgGAKgDALIBmAAQACgMgDgJQgDgJgFgHQgGgHgJgEQgIgEgKAAQgKAAgJAEg"
      );
    this.shape_64.setTransform(-33.0943, 2.275);

    this.shape_65 = new cjs.Shape();
    this.shape_65.graphics
      .f("#333333")
      .s()
      .p("AAiBbIAMhIQAJgvghAAQgIAAgIADQgHADgIAGQgHAEgGAIQgHAHgEAIIgOBQIgNAAIAgi0IANAAIgPBTQALgPAQgKQAOgJARAAQALAAAHAFQAHAEAEAHQADAIABAKQABAJgDANIgNBLg");
    this.shape_65.setTransform(-48.1107, -0.35);

    this.shape_66 = new cjs.Shape();
    this.shape_66.graphics
      .f("#333333")
      .s()
      .p(
        "AgSBWQgDgCgEgDQgCgDgCgEQgBgEABgGIARhgIgSAAIABgKIASAAIAJgsIALAAIgIAsIAfAAIgCAKIgeAAIgQBdQgBAHAEAEQAFAEAGAAQAHAAAFgDIAIgDIACAKIgEABIgGADIgJACIgJABQgFAAgFgBg"
      );
    this.shape_66.setTransform(-58.25, 0.125);

    this.shape_67 = new cjs.Shape();
    this.shape_67.graphics
      .f("#333333")
      .s()
      .p(
        "AgjA9QgLgFgHgJQgHgJgCgMQgDgNACgNQACgNAIgMQAHgMAKgJQAKgJAMgFQANgGANAAQANAAALAGQAKAFAIAJQAHAJADAMQACAMgCANQgCANgHANQgIAMgKAJQgKAJgNAFQgMAGgNAAQgOAAgKgGgAgKgyQgKAEgIAIQgIAIgGAKQgHAKgCALQgCALADAKQACAKAGAHQAFAIAJAEQAIAFALAAQAJAAALgFQAKgEAIgIQAJgHAFgKQAGgKACgMQACgLgCgKQgCgKgGgHQgGgIgIgEQgJgFgKAAQgKAAgKAFg"
      );
    this.shape_67.setTransform(-70.2624, 2.275);

    this.shape_68 = new cjs.Shape();
    this.shape_68.graphics
      .f("#333333")
      .s()
      .p(
        "AgjA9QgLgFgHgJQgHgJgDgNQgDgMADgNQACgNAHgMQAHgMAKgJQALgJAMgGQANgFAMAAQAOAAALAGQALAFAHAJQAHAJADAMQACAMgCANIgBACIAAADIhyAAQgBALADAJQACAKAGAHQAGAHAIAEQAJAEAKAAQAHAAAFgCQAHgCAGgDQAHgDAFgFIAJgKIAKADQgEAHgGAGQgHAGgIAEQgHAEgJACQgJADgJAAQgNAAgLgGgAgJg0QgKAEgIAHQgIAHgGAJQgGAKgDALIBmAAQACgMgDgJQgDgJgFgHQgGgHgJgEQgIgEgKAAQgKAAgJAEg"
      );
    this.shape_68.setTransform(-91.3443, 2.275);

    this.shape_69 = new cjs.Shape();
    this.shape_69.graphics
      .f("#333333")
      .s()
      .p("AAiBbIAMhIQAJgvghAAQgIAAgIADQgHADgIAGQgHAEgGAIQgHAHgEAIIgOBQIgNAAIAgi0IANAAIgPBTQALgPAQgKQAOgJARAAQALAAAHAFQAHAEAEAHQADAIABAKQABAJgDANIgNBLg");
    this.shape_69.setTransform(-106.3607, -0.35);

    this.shape_70 = new cjs.Shape();
    this.shape_70.graphics
      .f("#333333")
      .s()
      .p(
        "AgSBWQgEgCgDgDQgDgDgBgEQgBgEABgGIARhgIgSAAIABgKIATAAIAIgsIALAAIgIAsIAfAAIgCAKIgeAAIgQBdQgBAHAEAEQAEAEAHAAQAHAAAFgDIAIgDIACAKIgDABIgHADIgJACIgJABQgFAAgFgBg"
      );
    this.shape_70.setTransform(-116.5, 0.125);

    this.shape_71 = new cjs.Shape();
    this.shape_71.graphics
      .f("#333333")
      .s()
      .p(
        "AgoBbQgJgCgGgEQgFgEgFgGQgEgFgEgHIAKgFQAFANAMAGQANAGAPAAQALAAAIgDQAJgDAHgFQAJgFAFgIQAFgIACgLIAEgcQgKANgOAHQgPAIgOAAQgNAAgKgGQgLgFgGgKQgGgJgDgLQgDgMADgMQABgOAIgMQAGgMAJgJQAKgJAMgGQAMgFANAAQARAAALAIQAMAJAGANIAEgcIANAAIgYCCQgBANgIAKQgGAKgKAHQgJAGgMAEQgLADgNAAQgLAAgJgCgAgKhMQgKAFgIAIQgIAIgEAKQgGAKgCAKQgBALABAKQADAJAFAHQAGAIAJAFQAJAEALAAQAHAAAIgDQAIgDAIgFQAHgFAGgGQAEgGADgGIAHgqQgBgHgEgHQgFgGgEgEQgHgFgHgDQgGgCgIAAQgLAAgKAFg"
      );
    this.shape_71.setTransform(61.65, -25.025);

    this.shape_72 = new cjs.Shape();
    this.shape_72.graphics
      .f("#333333")
      .s()
      .p(
        "AAhBCIANhHQAEgZgFgLQgFgMgQAAQgIAAgJADQgHADgIAGQgIAEgHAIQgGAHgFAJIgOBPIgMAAIAWiAIAMAAIgFAeQAFgHAHgGQAHgGAIgFQAIgEAIgCQAJgDAJAAQAVAAAGAPQAHAPgFAcIgNBJg"
      );
    this.shape_72.setTransform(46.9087, -27.8);

    this.shape_73 = new cjs.Shape();
    this.shape_73.graphics.f("#333333").s().p("AgVBbIAViAIANAAIgWCAgAAGhDIAEgWIAMAAIgEAWg");
    this.shape_73.setTransform(37.825, -30.3);

    this.shape_74 = new cjs.Shape();
    this.shape_74.graphics.f("#333333").s().p("AgcBBIggiAIANAAIAcBzIBDhzIANAAIhMCAg");
    this.shape_74.setTransform(29.3, -27.7);

    this.shape_75 = new cjs.Shape();
    this.shape_75.graphics
      .f("#333333")
      .s()
      .p(
        "AgjA9QgLgFgHgJQgHgJgCgMQgDgNACgNQACgNAIgMQAHgMAKgJQAKgJAMgFQANgGANAAQANAAALAGQAKAFAIAJQAHAJADAMQACAMgCANQgCANgHANQgIAMgKAJQgKAJgNAFQgMAGgNAAQgOAAgKgGgAgKgyQgKAEgIAIQgIAIgGAKQgHAKgCALQgCALADAKQACAKAGAHQAFAIAJAEQAIAFALAAQAJAAALgFQAKgEAIgIQAJgHAFgKQAGgKACgMQACgLgCgKQgCgKgGgHQgGgIgIgEQgJgFgKAAQgKAAgKAFg"
      );
    this.shape_75.setTransform(14.5376, -27.675);

    this.shape_76 = new cjs.Shape();
    this.shape_76.graphics
      .f("#333333")
      .s()
      .p(
        "ABMBCIAMhHQAFgZgGgLQgFgMgQAAQgIAAgIADQgIADgHAFQgHAGgFAGQgGAIgEAJIgNBPIgNAAIANhHQADgZgEgLQgGgMgQAAQgIAAgIADQgHADgHAFQgHAFgGAHQgGAIgEAJIgOBPIgNAAIAXiAIAMAAIgFAeQAKgPAPgJQAOgJAQAAQARAAAIAKQAIAKgBAPQAZgiAhgBQAVAAAHAPQAGAQgFAbIgNBJg"
      );
    this.shape_76.setTransform(-4.6913, -27.8);

    this.shape_77 = new cjs.Shape();
    this.shape_77.graphics
      .f("#333333")
      .s()
      .p(
        "AgkA+QgMgFgJgKIAIgJQAJAKAKAEQALAFANAAQAQAAAMgHQAMgHACgNQABgGgCgEQgCgEgFgDQgEgDgIgCIgQgFIgTgEQgHgCgFgEQgEgDgDgFQgBgFABgIQACgJAFgHQAFgIAHgEQAIgFAJgCQAIgDAKAAQAPAAALAFQALAFAFAIIgIAHQgFgHgKgEQgKgEgLAAQgIAAgGACQgGABgFADQgGAEgDAFQgEAFgCAHQgBAFACAEQABADAEADQADACAHACIAOAEIAVAGQAJACAFAEQAGADACAGQADAFgCAJQgDARgPAKQgQALgWAAQgPAAgNgFg"
      );
    this.shape_77.setTransform(-28.575, -27.675);

    this.shape_78 = new cjs.Shape();
    this.shape_78.graphics
      .f("#333333")
      .s()
      .p(
        "AgsBWQgLgFgHgKQgGgJgDgMQgCgMACgNQACgNAHgMQAHgMAJgJQAKgJAMgFQAMgGAMAAQAIAAAIADQAHACAGAEQAGAEAEAGQAEAFADAGIAOhQIANAAIgdCjQgBAGAFAAIgCALIgDABIgCAAQgFAAgDgEQgCgEAAgEIADgPQgKANgPAIQgOAIgPAAQgNAAgLgGgAgTgZQgLAFgIAIQgIAIgFAJQgFAKgCAKQgCAMACAJQADAKAFAIQAGAIAJAEQAIAFALAAQAHAAAJgDQAHgDAIgFIANgLQAGgGABgHIAIgqQgBgGgEgHIgKgLQgGgEgHgDQgHgDgHAAQgLAAgJAFg"
      );
    this.shape_78.setTransform(-41.5875, -30.175);

    this.shape_79 = new cjs.Shape();
    this.shape_79.graphics.f("#333333").s().p("AgqBBIAXiAIAMAAIgGAgQAKgOAMgIQAMgJANgBIAFgBIAEAAIgDAMQgRABgPAJQgPAKgIARIgOBQg");
    this.shape_79.setTransform(-52.7, -27.725);

    this.shape_80 = new cjs.Shape();
    this.shape_80.graphics
      .f("#333333")
      .s()
      .p(
        "AglBAQgIgDgFgGQgEgFgCgHQgCgIABgIQACgJAFgGQAFgHAIgFQAIgFALgCQALgDALAAQAKAAAKACQALABAIAEIACgNQADgSgIgLQgJgLgSAAQgKAAgKAEQgMAEgMAIIgDgJQAcgRAVAAQAYAAALAOQAMANgFAYIgLA+QgBAGAGAAIgCALIgDABIgCAAQgFAAgDgEQgCgDAAgFIACgKQgLALgPAHQgPAGgQAAQgJAAgHgDgAgOAAQgJACgGADQgHAEgDAFQgEAGgCAGQgBAHACAFQABAGAEAEQAEAEAFACQAHADAHAAQAOAAAMgGQANgFAJgJQAEgFABgFIAEgXQgIgDgKgBQgJgCgLAAQgIAAgJACg"
      );
    this.shape_80.setTransform(-65.0689, -27.675);

    this.shape_81 = new cjs.Shape();
    this.shape_81.graphics.f("#333333").s().p("AAHBBIgRhEIgpBEIgLAAIgiiAIANAAIAdByIAng/IgNgzIALAAIAKAqIAYgqIAMAAIgeAzIAPA/IBGhyIANAAIhQCAg");
    this.shape_81.setTransform(-79.95, -27.7);

    this.shape_82 = new cjs.Shape();
    this.shape_82.graphics
      .f("#333333")
      .s()
      .p(
        "AhIBcIAgi1IAMAAIgFAaQALgMAOgIQAOgIAPAAQAOAAAKAGQALAGAHAJQAGAJACAMQADAMgCANQgCANgHAMQgGAMgKAJQgJAJgMAFQgMAGgOAAQgQAAgLgJQgMgJgGgMIgOBQgAABhNQgHADgHAFQgIAFgGAGQgGAGgCAHIgHAqQACAHAEAGQAEAGAGAFQAFAEAHADQAGADAIAAQALAAAKgFQAKgFAIgIQAIgHAFgJQAFgKACgLQACgLgCgKQgCgKgGgIQgGgHgJgFQgJgFgLAAQgGAAgJADg"
      );
    this.shape_82.setTransform(-99.41, -25.175);

    this.shape_83 = new cjs.Shape();
    this.shape_83.graphics
      .f("#333333")
      .s()
      .p(
        "Ag7AJIANhKIANAAIgNBIQgIAwAhAAQAIAAAIgDQAIgDAHgFQAIgFAGgHQAHgIAEgIIAOhRIANAAIgUBvQgBAGAGAAIgCALIgCAAIgCAAQgFAAgDgDQgEgDABgFIAEgTQgMAPgQAJQgQAJgRAAQgqAAAKg5g"
      );
    this.shape_83.setTransform(-113.6721, -27.575);

    this.shape_84 = new cjs.Shape();
    this.shape_84.graphics
      .f("#333333")
      .s()
      .p(
        "AgkA+QgMgFgJgKIAIgJQAJAKAKAEQALAFANAAQAQAAAMgHQAMgHACgNQABgGgCgEQgCgEgFgDQgEgDgIgCIgQgFIgTgEQgHgCgFgEQgEgDgDgFQgBgFABgIQACgJAFgHQAFgIAHgEQAIgFAJgCQAIgDAKAAQAPAAALAFQALAFAFAIIgIAHQgFgHgKgEQgKgEgLAAQgIAAgGACQgGABgFADQgGAEgDAFQgEAFgCAHQgBAFACAEQABADAEADQADACAHACIAOAEIAVAGQAJACAFAEQAGADACAGQADAFgCAJQgDARgPAKQgQALgWAAQgPAAgNgFg"
      );
    this.shape_84.setTransform(46.975, -57.675);

    this.shape_85 = new cjs.Shape();
    this.shape_85.graphics
      .f("#333333")
      .s()
      .p(
        "AgjA9QgLgFgHgJQgHgJgDgNQgDgMADgNQACgNAHgMQAHgMAKgJQALgJAMgGQANgFAMAAQAOAAALAGQALAFAHAJQAHAJADAMQACAMgCANIgBACIAAADIhyAAQgBALADAJQACAKAGAHQAGAHAIAEQAJAEAKAAQAHAAAFgCQAHgCAGgDQAHgDAFgFIAJgKIAKADQgEAHgGAGQgHAGgIAEQgHAEgJACQgJADgJAAQgNAAgLgGgAgJg0QgKAEgIAHQgIAHgGAJQgGAKgDALIBmAAQACgMgDgJQgDgJgFgHQgGgHgJgEQgIgEgKAAQgKAAgJAEg"
      );
    this.shape_85.setTransform(34.0057, -57.675);

    this.shape_86 = new cjs.Shape();
    this.shape_86.graphics
      .f("#333333")
      .s()
      .p(
        "AgSBWQgDgCgDgDQgEgDgBgEQgBgEABgGIARhgIgSAAIABgKIASAAIAIgsIAMAAIgIAsIAfAAIgCAKIgeAAIgQBdQgBAHAEAEQAFAEAGAAQAGAAAHgDIAHgDIACAKIgEABIgGADIgIACIgKABQgFAAgFgBg"
      );
    this.shape_86.setTransform(23.3, -59.825);

    this.shape_87 = new cjs.Shape();
    this.shape_87.graphics
      .f("#333333")
      .s()
      .p(
        "AglBAQgIgDgFgGQgEgFgCgHQgCgIABgIQACgJAFgGQAFgHAIgFQAIgFALgCQALgDALAAQAKAAAKACQALABAIAEIACgNQADgSgIgLQgJgLgSAAQgKAAgKAEQgMAEgMAIIgDgJQAcgRAVAAQAYAAALAOQAMANgFAYIgLA+QgBAGAGAAIgCALIgDABIgCAAQgFAAgDgEQgCgDAAgFIACgKQgLALgPAHQgPAGgQAAQgJAAgHgDgAgOAAQgJACgGADQgHAEgDAFQgEAGgCAGQgBAHACAFQABAGAEAEQAEAEAFACQAHADAHAAQAOAAAMgGQANgFAJgJQAEgFABgFIAEgXQgIgDgKgBQgJgCgLAAQgIAAgJACg"
      );
    this.shape_87.setTransform(11.3811, -57.675);

    this.shape_88 = new cjs.Shape();
    this.shape_88.graphics
      .f("#333333")
      .s()
      .p(
        "ABMBCIAMhHQAFgZgGgLQgFgMgQAAQgIAAgIADQgIADgHAFQgHAFgFAIQgGAHgEAJIgNBPIgNAAIANhHQADgZgEgLQgGgMgQAAQgIAAgIADQgHADgHAFQgHAFgGAIQgGAHgEAJIgOBPIgNAAIAXiBIAMAAIgFAgQAKgQAPgJQAOgIAQgBQARAAAIAKQAIAKgBAQQAZgkAhAAQAVABAHAPQAGAOgFAbIgNBKg"
      );
    this.shape_88.setTransform(-6.5913, -57.8);

    this.shape_89 = new cjs.Shape();
    this.shape_89.graphics.f("#333333").s().p("AgVBbIAViBIANAAIgWCBgAAGhDIAEgXIAMAAIgEAXg");
    this.shape_89.setTransform(-19.925, -60.3);

    this.shape_90 = new cjs.Shape();
    this.shape_90.graphics
      .f("#333333")
      .s()
      .p(
        "AAhBCIANhHQAEgagFgKQgFgMgQAAQgIAAgJADQgHADgIAGQgIAFgHAHQgGAIgFAIIgOBPIgMAAIAWiBIAMAAIgFAgQAFgIAHgGQAHgGAIgFQAIgEAIgCQAJgCAJgBQAVAAAGAPQAHAPgFAbIgNBKg"
      );
    this.shape_90.setTransform(-30.4913, -57.8);

    this.shape_91 = new cjs.Shape();
    this.shape_91.graphics
      .f("#333333")
      .s()
      .p(
        "AglBAQgIgDgFgGQgEgFgCgHQgCgIABgIQACgJAFgGQAFgHAIgFQAIgFALgCQALgDALAAQAKAAAKACQALABAIAEIACgNQADgSgIgLQgJgLgSAAQgKAAgKAEQgMAEgMAIIgDgJQAcgRAVAAQAYAAALAOQAMANgFAYIgLA+QgBAGAGAAIgCALIgDABIgCAAQgFAAgDgEQgCgDAAgFIACgKQgLALgPAHQgPAGgQAAQgJAAgHgDgAgOAAQgJACgGADQgHAEgDAFQgEAGgCAGQgBAHACAFQABAGAEAEQAEAEAFACQAHADAHAAQAOAAAMgGQANgFAJgJQAEgFABgFIAEgXQgIgDgKgBQgJgCgLAAQgIAAgJACg"
      );
    this.shape_91.setTransform(-44.7189, -57.675);

    this.shape_92 = new cjs.Shape();
    this.shape_92.graphics.f("#333333").s().p("AAHBBIgRhEIgpBEIgKAAIgiiBIALAAIAeBzIAng/IgNgzIALAAIALAqIAXgqIAMAAIgfAzIAQA/IBGhzIAMAAIhPCBg");
    this.shape_92.setTransform(-65.7, -57.7);

    this.shape_93 = new cjs.Shape();
    this.shape_93.graphics
      .f("#333333")
      .s()
      .p(
        "AgjA9QgLgFgHgJQgHgJgCgMQgDgNACgNQACgNAIgMQAHgMAKgJQAKgJAMgFQANgGANAAQANAAALAGQAKAFAIAJQAHAJADAMQACAMgCANQgCANgHANQgIAMgKAJQgKAJgNAFQgMAGgNAAQgOAAgKgGgAgKgyQgKAEgIAIQgIAIgGAKQgHAKgCALQgCALADAKQACAKAGAHQAFAIAJAEQAIAFALAAQAJAAALgFQAKgEAIgIQAJgHAFgKQAGgKACgMQACgLgCgKQgCgKgGgHQgGgIgIgEQgJgFgKAAQgKAAgKAFg"
      );
    this.shape_93.setTransform(-83.9124, -57.675);

    this.shape_94 = new cjs.Shape();
    this.shape_94.graphics.f("#333333").s().p("AgqBBIAXiAIAMAAIgGAgQAKgOAMgIQANgJAMgBIAFgBIAEAAIgDAMQgSABgOAJQgPAKgIARIgOBQg");
    this.shape_94.setTransform(-94.2, -57.725);

    this.shape_95 = new cjs.Shape();
    this.shape_95.graphics.f("#333333").s().p("AgqBBIAXiAIAMAAIgGAgQAKgOAMgIQANgJAMgBIAFgBIAEAAIgDAMQgSABgOAJQgPAKgIARIgOBQg");
    this.shape_95.setTransform(-102.75, -57.725);

    this.shape_96 = new cjs.Shape();
    this.shape_96.graphics
      .f("#333333")
      .s()
      .p(
        "AglBAQgIgDgFgGQgEgFgCgHQgCgIABgIQACgJAFgGQAFgHAIgFQAIgFALgCQALgDALAAQAKAAAKACQALABAIAEIACgNQADgSgIgLQgJgLgSAAQgKAAgKAEQgMAEgMAIIgDgJQAcgRAVAAQAYAAALAOQAMANgFAYIgLA+QgBAGAGAAIgCALIgDABIgCAAQgFAAgDgEQgCgDAAgFIACgKQgLALgPAHQgPAGgQAAQgJAAgHgDgAgOAAQgJACgGADQgHAEgDAFQgEAGgCAGQgBAHACAFQABAGAEAEQAEAEAFACQAHADAHAAQAOAAAMgGQANgFAJgJQAEgFABgFIAEgXQgIgDgKgBQgJgCgLAAQgIAAgJACg"
      );
    this.shape_96.setTransform(-115.1189, -57.675);

    this.shape_97 = new cjs.Shape();
    this.shape_97.graphics
      .f("#333333")
      .s()
      .p(
        "AgsBWQgLgFgHgKQgGgJgDgMQgCgMACgNQACgNAHgMQAHgMAJgJQAKgJAMgFQAMgGAMAAQAIAAAIADQAHACAGAEQAGAEAEAGQAEAFADAGIAOhQIANAAIgdCjQgBAGAFAAIgCALIgDABIgCAAQgFAAgDgEQgCgEAAgEIADgPQgKANgPAIQgOAIgPAAQgNAAgLgGgAgTgZQgLAFgIAIQgIAIgFAJQgFAKgCAKQgCAMACAJQADAKAFAIQAGAIAJAEQAIAFALAAQAHAAAJgDQAHgDAIgFIANgLQAGgGABgHIAIgqQgBgGgEgHIgKgLQgGgEgHgDQgHgDgHAAQgLAAgJAFg"
      );
    this.shape_97.setTransform(106.6125, -90.175);

    this.shape_98 = new cjs.Shape();
    this.shape_98.graphics
      .f("#333333")
      .s()
      .p(
        "AgjA9QgLgFgHgJQgHgJgDgNQgDgMADgNQACgNAHgMQAHgMAKgJQALgJAMgGQANgFAMAAQAOAAALAGQALAFAHAJQAHAJADAMQACAMgCANIgBACIAAADIhyAAQgBALADAJQACAKAGAHQAGAHAIAEQAJAEAKAAQAHAAAFgCQAHgCAGgDQAHgDAFgFIAJgKIAKADQgEAHgGAGQgHAGgIAEQgHAEgJACQgJADgJAAQgNAAgLgGgAgJg0QgKAEgIAHQgIAHgGAJQgGAKgDALIBmAAQACgMgDgJQgDgJgFgHQgGgHgJgEQgIgEgKAAQgKAAgJAEg"
      );
    this.shape_98.setTransform(91.2057, -87.675);

    this.shape_99 = new cjs.Shape();
    this.shape_99.graphics
      .f("#333333")
      .s()
      .p(
        "AgRBWQgEgCgEgDQgDgDgBgEQgBgEABgGIARhgIgTAAIACgKIATAAIAIgsIALAAIgIAsIAeAAIgBAKIgeAAIgQBdQgCAHAFAEQAFAEAGAAQAHAAAFgDIAIgDIACAKIgDABIgHADIgJACIgJABQgFAAgEgBg"
      );
    this.shape_99.setTransform(80.5, -89.825);

    this.shape_100 = new cjs.Shape();
    this.shape_100.graphics
      .f("#333333")
      .s()
      .p(
        "AglBAQgIgDgFgGQgEgFgCgHQgCgIABgIQACgJAFgGQAFgHAIgFQAIgFALgCQALgDALAAQAKAAAKACQALABAIAEIACgNQADgSgIgLQgJgLgSAAQgKAAgKAEQgMAEgMAIIgDgJQAcgRAVAAQAYAAALAOQAMANgFAYIgLA+QgBAGAGAAIgCALIgDABIgCAAQgFAAgDgEQgCgDAAgFIACgKQgLALgPAHQgPAGgQAAQgJAAgHgDgAgOAAQgJACgGADQgHAEgDAFQgEAGgCAGQgBAHACAFQABAGAEAEQAEAEAFACQAHADAHAAQAOAAAMgGQANgFAJgJQAEgFABgFIAEgXQgIgDgKgBQgJgCgLAAQgIAAgJACg"
      );
    this.shape_100.setTransform(68.5811, -87.675);

    this.shape_101 = new cjs.Shape();
    this.shape_101.graphics.f("#333333").s().p("AgQBVQgFgGACgLIAbieIANAAIgbCaQgBAHADAFQAEAEAGAAIAHgBIAHgCIABAKIgLADIgKABQgLAAgFgGg");
    this.shape_101.setTransform(59.2483, -90.225);

    this.shape_102 = new cjs.Shape();
    this.shape_102.graphics
      .f("#333333")
      .s()
      .p(
        "AgjA9QgLgFgHgJQgHgJgDgNQgDgMADgNQACgNAHgMQAHgMAKgJQALgJAMgGQANgFAMAAQAOAAALAGQALAFAHAJQAHAJADAMQACAMgCANIgBACIAAADIhyAAQgBALADAJQACAKAGAHQAGAHAIAEQAJAEAKAAQAHAAAFgCQAHgCAGgDQAHgDAFgFIAJgKIAKADQgEAHgGAGQgHAGgIAEQgHAEgJACQgJADgJAAQgNAAgLgGgAgJg0QgKAEgIAHQgIAHgGAJQgGAKgDALIBmAAQACgMgDgJQgDgJgFgHQgGgHgJgEQgIgEgKAAQgKAAgJAEg"
      );
    this.shape_102.setTransform(48.7057, -87.675);

    this.shape_103 = new cjs.Shape();
    this.shape_103.graphics.f("#333333").s().p("AgqBBIAXiAIAMAAIgGAgQAKgOAMgIQAMgJANgBIAFgBIAEAAIgDAMQgRABgPAJQgPAKgIARIgOBQg");
    this.shape_103.setTransform(37.75, -87.725);

    this.shape_104 = new cjs.Shape();
    this.shape_104.graphics
      .f("#333333")
      .s()
      .p(
        "AgjA9QgLgFgHgJQgHgJgDgNQgDgMADgNQACgNAHgMQAHgMAKgJQALgJAMgGQANgFAMAAQAOAAALAGQALAFAHAJQAHAJADAMQACAMgCANIgBACIAAADIhyAAQgBALADAJQACAKAGAHQAGAHAIAEQAJAEAKAAQAHAAAFgCQAHgCAGgDQAHgDAFgFIAJgKIAKADQgEAHgGAGQgHAGgIAEQgHAEgJACQgJADgJAAQgNAAgLgGgAgJg0QgKAEgIAHQgIAHgGAJQgGAKgDALIBmAAQACgMgDgJQgDgJgFgHQgGgHgJgEQgIgEgKAAQgKAAgJAEg"
      );
    this.shape_104.setTransform(19.0557, -87.675);

    this.shape_105 = new cjs.Shape();
    this.shape_105.graphics
      .f("#333333")
      .s()
      .p("AAiBaIAMhIQAJgughAAQgIAAgIADQgHADgIAFQgHAGgGAHQgHAHgEAIIgOBPIgNAAIAgi0IANAAIgPBTQALgPAQgIQAOgJARAAQALAAAHADQAHAEAEAIQADAHABALQABAKgDAMIgNBKg");
    this.shape_105.setTransform(4.0893, -90.3);

    this.shape_106 = new cjs.Shape();
    this.shape_106.graphics
      .f("#333333")
      .s()
      .p(
        "AgSBWQgDgCgEgDQgCgDgCgEQgBgEABgGIARhgIgSAAIABgKIASAAIAJgsIALAAIgIAsIAfAAIgCAKIgeAAIgQBdQgBAHAEAEQAFAEAGAAQAHAAAFgDIAIgDIACAKIgEABIgGADIgJACIgJABQgFAAgFgBg"
      );
    this.shape_106.setTransform(-6.05, -89.825);

    this.shape_107 = new cjs.Shape();
    this.shape_107.graphics
      .f("#333333")
      .s()
      .p(
        "AAhBBIANhHQAEgZgFgLQgFgLgQAAQgIAAgJADQgHADgIAFQgIAGgHAHQgGAIgFAIIgOBOIgMAAIAWh/IAMAAIgFAeQAFgHAHgGQAHgGAIgEQAIgFAIgCQAJgCAJAAQAVAAAGAOQAHAPgFAbIgNBJg"
      );
    this.shape_107.setTransform(-24.7913, -87.8);

    this.shape_108 = new cjs.Shape();
    this.shape_108.graphics
      .f("#333333")
      .s()
      .p(
        "AgjA9QgLgFgHgJQgHgJgCgMQgDgNACgNQACgNAIgMQAHgMAKgJQAKgJAMgFQANgGANAAQANAAALAGQAKAFAIAJQAHAJADAMQACAMgCANQgCANgHANQgIAMgKAJQgKAJgNAFQgMAGgNAAQgOAAgKgGgAgKgyQgKAEgIAIQgIAIgGAKQgHAKgCALQgCALADAKQACAKAGAHQAFAIAJAEQAIAFALAAQAJAAALgFQAKgEAIgIQAJgHAFgKQAGgKACgMQACgLgCgKQgCgKgGgHQgGgIgIgEQgJgFgKAAQgKAAgKAFg"
      );
    this.shape_108.setTransform(-39.1124, -87.675);

    this.shape_109 = new cjs.Shape();
    this.shape_109.graphics.f("#333333").s().p("AgVBaIAVh/IANAAIgWB/gAAGhCIAEgYIAMAAIgEAYg");
    this.shape_109.setTransform(-48.725, -90.3);

    this.shape_110 = new cjs.Shape();
    this.shape_110.graphics
      .f("#333333")
      .s()
      .p(
        "AgSBWQgDgCgDgDQgEgDgBgEQgBgEABgGIARhgIgSAAIABgKIASAAIAIgsIAMAAIgIAsIAfAAIgCAKIgeAAIgQBdQgBAHAEAEQAFAEAGAAQAGAAAHgDIAHgDIACAKIgEABIgGADIgIACIgKABQgFAAgFgBg"
      );
    this.shape_110.setTransform(-55, -89.825);

    this.shape_111 = new cjs.Shape();
    this.shape_111.graphics
      .f("#333333")
      .s()
      .p(
        "AggA9QgLgFgHgJQgHgJgCgNQgDgMACgNQADgNAHgMQAGgNAKgIQALgJAMgGQAMgFAOAAQASAAAMAIQANAIAEAOIgNAEQgEgLgKgGQgJgGgNAAQgLAAgJAFQgKAEgIAHQgJAIgFAKQgGAKgCALQgCALACAKQADALAFAHQAGAIAIAEQAJAFAKAAQAGAAAHgCQAHgCAHgEQAGgDAFgEQAFgEACgFIALADQgDAHgGAGQgGAGgIAEQgIAEgJACQgJADgIAAQgOAAgLgGg"
      );
    this.shape_111.setTransform(-66.3318, -87.675);

    this.shape_112 = new cjs.Shape();
    this.shape_112.graphics
      .f("#333333")
      .s()
      .p(
        "AgjA9QgLgFgHgJQgHgJgDgNQgDgMADgNQACgNAHgMQAHgMAKgJQALgJAMgGQANgFAMAAQAOAAALAGQALAFAHAJQAHAJADAMQACAMgCANIgBACIAAADIhyAAQgBALADAJQACAKAGAHQAGAHAIAEQAJAEAKAAQAHAAAFgCQAHgCAGgDQAHgDAFgFIAJgKIAKADQgEAHgGAGQgHAGgIAEQgHAEgJACQgJADgJAAQgNAAgLgGgAgJg0QgKAEgIAHQgIAHgGAJQgGAKgDALIBmAAQACgMgDgJQgDgJgFgHQgGgHgJgEQgIgEgKAAQgKAAgJAEg"
      );
    this.shape_112.setTransform(-80.6443, -87.675);

    this.shape_113 = new cjs.Shape();
    this.shape_113.graphics.f("#333333").s().p("AgQBVQgFgGACgLIAbieIANAAIgbCaQgBAHADAFQAEAEAGAAIAHgBIAHgCIABAKIgLADIgKABQgLAAgFgGg");
    this.shape_113.setTransform(-91.2517, -90.225);

    this.shape_114 = new cjs.Shape();
    this.shape_114.graphics
      .f("#333333")
      .s()
      .p(
        "AgjA9QgLgFgHgJQgHgJgDgNQgDgMADgNQACgNAHgMQAHgMAKgJQALgJAMgGQANgFAMAAQAOAAALAGQALAFAHAJQAHAJADAMQACAMgCANIgBACIAAADIhyAAQgBALADAJQACAKAGAHQAGAHAIAEQAJAEAKAAQAHAAAFgCQAHgCAGgDQAHgDAFgFIAJgKIAKADQgEAHgGAGQgHAGgIAEQgHAEgJACQgJADgJAAQgNAAgLgGgAgJg0QgKAEgIAHQgIAHgGAJQgGAKgDALIBmAAQACgMgDgJQgDgJgFgHQgGgHgJgEQgIgEgKAAQgKAAgJAEg"
      );
    this.shape_114.setTransform(-101.7943, -87.675);

    this.shape_115 = new cjs.Shape();
    this.shape_115.graphics
      .f("#333333")
      .s()
      .p(
        "AgkA+QgMgFgJgKIAIgJQAJAKAKAEQALAFANAAQAQAAAMgHQAMgHACgNQABgGgCgEQgCgEgFgDQgEgDgIgCIgQgFIgTgEQgHgCgFgEQgEgDgDgFQgBgFABgIQACgJAFgHQAFgIAHgEQAIgFAJgCQAIgDAKAAQAPAAALAFQALAFAFAIIgIAHQgFgHgKgEQgKgEgLAAQgIAAgGACQgGABgFADQgGAEgDAFQgEAFgCAHQgBAFACAEQABADAEADQADACAHACIAOAEIAVAGQAJACAFAEQAGADACAGQADAFgCAJQgDARgPAKQgQALgWAAQgPAAgNgFg"
      );
    this.shape_115.setTransform(-115.525, -87.675);

    this.shape_116 = new cjs.Shape();
    this.shape_116.graphics
      .f("#333333")
      .s()
      .p(
        "AglBAQgIgDgFgGQgEgFgCgHQgCgIABgIQACgJAFgGQAFgHAIgFQAIgFALgCQALgDALAAQAKAAAKACQALABAIAEIACgNQADgSgIgLQgJgLgSAAQgKAAgKAEQgMAEgMAIIgDgJQAcgRAVAAQAYAAALAOQAMANgFAYIgLA+QgBAGAGAAIgCALIgDABIgCAAQgFAAgDgEQgCgDAAgFIACgKQgLALgPAHQgPAGgQAAQgJAAgHgDgAgOAAQgJACgGADQgHAEgDAFQgEAGgCAGQgBAHACAFQABAGAEAEQAEAEAFACQAHADAHAAQAOAAAMgGQANgFAJgJQAEgFABgFIAEgXQgIgDgKgBQgJgCgLAAQgIAAgJACg"
      );
    this.shape_116.setTransform(46.0311, -117.675);

    this.shape_117 = new cjs.Shape();
    this.shape_117.graphics
      .f("#333333")
      .s()
      .p(
        "AgnBbQgKgCgFgEQgGgEgFgGQgEgFgDgHIAJgFQAGANAMAGQAMAGAPAAQAKAAAIgDQAKgDAIgFQAIgFAFgIQAEgIACgLIAGgcQgKANgPAHQgPAIgNAAQgOAAgLgGQgKgFgGgKQgHgJgDgLQgCgMACgMQADgOAGgMQAHgMAKgJQAJgJAMgGQANgFAMAAQARAAALAIQALAJAHANIAFgcIALAAIgWCCQgCANgHAKQgHAKgKAHQgJAGgNAEQgKADgMAAQgMAAgIgCgAgJhMQgLAFgIAIQgIAIgFAKQgFAKgBAKQgCALACAKQACAJAGAHQAFAIAJAFQAJAEAKAAQAIAAAIgDQAIgDAIgFQAIgFAEgGQAGgGABgGIAIgqQgBgHgFgHQgDgGgGgEQgGgFgGgDQgIgCgHAAQgLAAgJAFg"
      );
    this.shape_117.setTransform(25.25, -115.025);

    this.shape_118 = new cjs.Shape();
    this.shape_118.graphics
      .f("#333333")
      .s()
      .p(
        "AAhBCIANhHQAEgZgFgLQgFgMgQAAQgIAAgJADQgHADgIAGQgIAEgHAIQgGAHgFAJIgOBPIgMAAIAWiAIAMAAIgFAeQAFgHAHgGQAHgGAIgFQAIgEAIgCQAJgDAJAAQAVAAAGAPQAHAPgFAcIgNBJg"
      );
    this.shape_118.setTransform(10.5087, -117.8);

    this.shape_119 = new cjs.Shape();
    this.shape_119.graphics.f("#333333").s().p("AgVBbIAViAIANAAIgWCAgAAGhDIAEgWIAMAAIgEAWg");
    this.shape_119.setTransform(1.475, -120.3);

    this.shape_120 = new cjs.Shape();
    this.shape_120.graphics.f("#333333").s().p("AAeBbIgmhGIgkAcIgHAqIgNAAIAhi0IAMAAIgWB9IBbhJIAOAAIg/AzIArBNg");
    this.shape_120.setTransform(-7.4, -120.3);

    this.shape_121 = new cjs.Shape();
    this.shape_121.graphics
      .f("#333333")
      .s()
      .p(
        "AglBAQgIgDgFgGQgEgFgCgHQgCgIABgIQACgJAFgGQAFgHAIgFQAIgFALgCQALgDALAAQAKAAAKACQALABAIAEIACgNQADgSgIgLQgJgLgSAAQgKAAgKAEQgMAEgMAIIgDgJQAcgRAVAAQAYAAALAOQAMANgFAYIgLA+QgBAGAGAAIgCALIgDABIgCAAQgFAAgDgEQgCgDAAgFIACgKQgLALgPAHQgPAGgQAAQgJAAgHgDgAgOAAQgJACgGADQgHAEgDAFQgEAGgCAGQgBAHACAFQABAGAEAEQAEAEAFACQAHADAHAAQAOAAAMgGQANgFAJgJQAEgFABgFIAEgXQgIgDgKgBQgJgCgLAAQgIAAgJACg"
      );
    this.shape_121.setTransform(-21.9689, -117.675);

    this.shape_122 = new cjs.Shape();
    this.shape_122.graphics
      .f("#333333")
      .s()
      .p(
        "ABMBCIAMhHQAFgZgGgLQgFgMgQAAQgIAAgIADQgIADgHAFQgHAGgFAGQgGAIgEAJIgNBPIgNAAIANhHQADgZgEgLQgGgMgQAAQgIAAgIADQgHADgHAFQgHAFgGAHQgGAIgEAJIgOBPIgNAAIAXiAIAMAAIgFAeQAKgPAPgJQAOgJAQAAQARAAAIAKQAIAKgBAPQAZgiAhgBQAVAAAHAPQAGAQgFAbIgNBJg"
      );
    this.shape_122.setTransform(-39.9913, -117.8);

    this.shape_123 = new cjs.Shape();
    this.shape_123.graphics
      .f("#333333")
      .s()
      .p(
        "AAhBCIANhHQAEgZgFgLQgFgMgQAAQgIAAgJADQgHADgIAGQgIAEgHAIQgGAHgFAJIgOBPIgMAAIAWiAIAMAAIgFAeQAFgHAHgGQAHgGAIgFQAIgEAIgCQAJgDAJAAQAVAAAGAPQAHAPgFAcIgNBJg"
      );
    this.shape_123.setTransform(-65.1413, -117.8);

    this.shape_124 = new cjs.Shape();
    this.shape_124.graphics
      .f("#333333")
      .s()
      .p(
        "AgjA9QgLgFgHgJQgHgJgCgMQgDgNACgNQACgNAIgMQAHgMAKgJQAKgJAMgFQANgGANAAQANAAALAGQAKAFAIAJQAHAJADAMQACAMgCANQgCANgHANQgIAMgKAJQgKAJgNAFQgMAGgNAAQgOAAgKgGgAgKgyQgKAEgIAIQgIAIgGAKQgHAKgCALQgCALADAKQACAKAGAHQAFAIAJAEQAIAFALAAQAJAAALgFQAKgEAIgIQAJgHAFgKQAGgKACgMQACgLgCgKQgCgKgGgHQgGgIgIgEQgJgFgKAAQgKAAgKAFg"
      );
    this.shape_124.setTransform(-79.4624, -117.675);

    this.shape_125 = new cjs.Shape();
    this.shape_125.graphics
      .f("#333333")
      .s()
      .p(
        "AhIBcIAgi1IAMAAIgFAaQALgMAOgIQAOgIAPAAQAOAAAKAGQALAGAHAJQAGAJACAMQADAMgCANQgCANgHAMQgGAMgKAJQgJAJgMAFQgMAGgOAAQgQAAgLgJQgMgJgGgMIgOBQgAABhNQgHADgHAFQgIAFgGAGQgGAGgCAHIgHAqQACAHAEAGQAEAGAGAFQAFAEAHADQAGADAIAAQALAAAKgFQAKgFAIgIQAIgHAFgJQAFgKACgLQACgLgCgKQgCgKgGgIQgGgHgJgFQgJgFgLAAQgGAAgJADg"
      );
    this.shape_125.setTransform(-95.11, -115.175);

    this.shape_126 = new cjs.Shape();
    this.shape_126.graphics
      .f("#333333")
      .s()
      .p(
        "Ag4BRQgMgIgHgMQgGgMgBgQQgBgQADgRIAPhYIANAAIgPBYQgDAOABAOQAAAOAFALQAFALALAGQALAHASAAQASAAAMgHQANgHAJgKQAJgLAFgOQAFgOADgOIAPhYIANAAIgPBYQgDARgHARQgHAQgLAMQgLAMgPAHQgOAIgVgBQgVAAgOgHg"
      );
    this.shape_126.setTransform(-110.6875, -120);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_126 },
            { t: this.shape_125 },
            { t: this.shape_124 },
            { t: this.shape_123 },
            { t: this.shape_122 },
            { t: this.shape_121 },
            { t: this.shape_120 },
            { t: this.shape_119 },
            { t: this.shape_118 },
            { t: this.shape_117 },
            { t: this.shape_116 },
            { t: this.shape_115 },
            { t: this.shape_114 },
            { t: this.shape_113 },
            { t: this.shape_112 },
            { t: this.shape_111 },
            { t: this.shape_110 },
            { t: this.shape_109 },
            { t: this.shape_108 },
            { t: this.shape_107 },
            { t: this.shape_106 },
            { t: this.shape_105 },
            { t: this.shape_104 },
            { t: this.shape_103 },
            { t: this.shape_102 },
            { t: this.shape_101 },
            { t: this.shape_100 },
            { t: this.shape_99 },
            { t: this.shape_98 },
            { t: this.shape_97 },
            { t: this.shape_96 },
            { t: this.shape_95 },
            { t: this.shape_94 },
            { t: this.shape_93 },
            { t: this.shape_92 },
            { t: this.shape_91 },
            { t: this.shape_90 },
            { t: this.shape_89 },
            { t: this.shape_88 },
            { t: this.shape_87 },
            { t: this.shape_86 },
            { t: this.shape_85 },
            { t: this.shape_84 },
            { t: this.shape_83 },
            { t: this.shape_82 },
            { t: this.shape_81 },
            { t: this.shape_80 },
            { t: this.shape_79 },
            { t: this.shape_78 },
            { t: this.shape_77 },
            { t: this.shape_76 },
            { t: this.shape_75 },
            { t: this.shape_74 },
            { t: this.shape_73 },
            { t: this.shape_72 },
            { t: this.shape_71 },
            { t: this.shape_70 },
            { t: this.shape_69 },
            { t: this.shape_68 },
            { t: this.shape_67 },
            { t: this.shape_66 },
            { t: this.shape_65 },
            { t: this.shape_64 },
            { t: this.shape_63 },
            { t: this.shape_62 },
            { t: this.shape_61 },
            { t: this.shape_60 },
            { t: this.shape_59 },
            { t: this.shape_58 },
            { t: this.shape_57 },
            { t: this.shape_56 },
            { t: this.shape_55 },
            { t: this.shape_54 },
            { t: this.shape_53 },
            { t: this.shape_52 },
            { t: this.shape_51 },
            { t: this.shape_50 },
            { t: this.shape_49 },
            { t: this.shape_48 },
            { t: this.shape_47 },
            { t: this.shape_46 },
            { t: this.shape_45 },
            { t: this.shape_44 },
            { t: this.shape_43 },
            { t: this.shape_42 },
            { t: this.shape_41 },
            { t: this.shape_40 },
            { t: this.shape_39 },
            { t: this.shape_38 },
            { t: this.shape_37 },
            { t: this.shape_36 },
            { t: this.shape_35 },
            { t: this.shape_34 },
            { t: this.shape_33 },
            { t: this.shape_32 },
            { t: this.shape_31 },
            { t: this.shape_30 },
            { t: this.shape_29 },
            { t: this.shape_28 },
            { t: this.shape_27 },
            { t: this.shape_26 },
            { t: this.shape_25 },
            { t: this.shape_24 },
            { t: this.shape_23 },
            { t: this.shape_22 },
            { t: this.shape_21 },
            { t: this.shape_20 },
            { t: this.shape_19 },
            { t: this.shape_18 },
            { t: this.shape_17 },
            { t: this.shape_16 },
            { t: this.shape_15 },
            { t: this.shape_14 },
            { t: this.shape_13 },
            { t: this.shape_12 },
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-125.8, -136.5, 251.7, 273);

  (lib.Tween15 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#333333").s().p("AgGAKIADgTIAKAAIgDATg");
    this.shape.setTransform(-32.125, 127.65);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#333333")
      .s()
      .p(
        "AgSBWQgDgCgEgDQgCgDgCgEQgBgEABgGIARhgIgSAAIABgKIASAAIAJgsIALAAIgIAsIAfAAIgCAKIgeAAIgQBdQgBAHAEAEQAFAEAGAAQAHAAAFgDIAIgDIACAKIgEABIgGADIgJACIgJABQgFAAgFgBg"
      );
    this.shape_1.setTransform(-36.65, 120.125);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#333333")
      .s()
      .p(
        "AAhBBIANhGQAEgZgFgLQgFgMgQAAQgIAAgJADQgHADgIAGQgIAEgHAIQgGAHgFAJIgOBOIgMAAIAWh/IAMAAIgFAeQAFgHAHgGQAHgGAIgFQAIgEAIgCQAJgDAJAAQAVAAAGAPQAHAPgFAcIgNBIg"
      );
    this.shape_2.setTransform(-48.8913, 122.15);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#333333")
      .s()
      .p(
        "AgjA9QgLgFgHgJQgHgJgDgNQgDgMADgNQACgNAHgMQAHgMAKgJQALgJAMgGQANgFAMAAQAOAAALAGQALAFAHAJQAHAJADAMQACAMgCANIgBACIAAADIhyAAQgBALADAJQACAKAGAHQAGAHAIAEQAJAEAKAAQAHAAAFgCQAHgCAGgDQAHgDAFgFIAJgKIAKADQgEAHgGAGQgHAGgIAEQgHAEgJACQgJADgJAAQgNAAgLgGgAgJg0QgKAEgIAHQgIAHgGAJQgGAKgDALIBmAAQACgMgDgJQgDgJgFgHQgGgHgJgEQgIgEgKAAQgKAAgJAEg"
      );
    this.shape_3.setTransform(-62.9943, 122.275);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#333333")
      .s()
      .p(
        "AgRBWQgFgCgCgDQgDgDgCgEQgBgEABgGIARhgIgTAAIACgKIASAAIAIgsIAMAAIgIAsIAeAAIgBAKIgeAAIgQBdQgCAHAFAEQAEAEAHAAQAGAAAHgDIAHgDIACAKIgEABIgGADIgIACIgKABQgFAAgEgBg"
      );
    this.shape_4.setTransform(-73.7, 120.125);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#333333")
      .s()
      .p(
        "AAhBBIANhGQAEgZgFgLQgFgMgQAAQgIAAgJADQgHADgIAGQgIAEgHAIQgGAHgFAJIgOBOIgMAAIAWh/IAMAAIgFAeQAFgHAHgGQAHgGAIgFQAIgEAIgCQAJgDAJAAQAVAAAGAPQAHAPgFAcIgNBIg"
      );
    this.shape_5.setTransform(-85.9413, 122.15);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#333333")
      .s()
      .p(
        "AgjA9QgLgFgHgJQgHgJgCgMQgDgNACgNQACgNAIgMQAHgMAKgJQAKgJAMgFQANgGANAAQANAAALAGQAKAFAIAJQAHAJADAMQACAMgCANQgCANgHANQgIAMgKAJQgKAJgNAFQgMAGgNAAQgOAAgKgGgAgKgyQgKAEgIAIQgIAIgGAKQgHAKgCALQgCALADAKQACAKAGAHQAFAIAJAEQAIAFALAAQAJAAALgFQAKgEAIgIQAJgHAFgKQAGgKACgMQACgLgCgKQgCgKgGgHQgGgIgIgEQgJgFgKAAQgKAAgKAFg"
      );
    this.shape_6.setTransform(-100.2624, 122.275);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#333333")
      .s()
      .p(
        "AggA9QgLgFgHgJQgHgJgCgNQgDgMACgNQADgNAHgMQAGgNAKgIQALgJAMgGQAMgFAOAAQASAAAMAIQANAIAEAOIgNAEQgEgLgKgGQgJgGgNAAQgLAAgJAFQgKAEgIAHQgJAIgFAKQgGAKgCALQgCALACAKQADALAFAHQAGAIAIAEQAJAFAKAAQAGAAAHgCQAHgCAHgEQAGgDAFgEQAFgEACgFIALADQgDAHgGAGQgGAGgIAEQgIAEgJACQgJADgIAAQgOAAgLgGg"
      );
    this.shape_7.setTransform(-114.1818, 122.275);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#333333")
      .s()
      .p(
        "AgsBWQgLgFgHgKQgGgJgDgMQgCgMACgNQACgNAHgMQAHgMAJgJQAKgJAMgFQAMgGAMAAQAIAAAIADQAHACAGAEQAGAEAEAGQAEAFADAGIAOhQIANAAIgdCjQgBAGAFAAIgCALIgDABIgCAAQgFAAgDgEQgCgEAAgEIADgPQgKANgPAIQgOAIgPAAQgNAAgLgGgAgTgZQgLAFgIAIQgIAIgFAJQgFAKgCAKQgCAMACAJQADAKAFAIQAGAIAJAEQAIAFALAAQAHAAAJgDQAHgDAIgFIANgLQAGgGABgHIAIgqQgBgGgEgHIgKgLQgGgEgHgDQgHgDgHAAQgLAAgJAFg"
      );
    this.shape_8.setTransform(86.2125, 89.775);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#333333")
      .s()
      .p(
        "AAhBCIANhHQAEgagFgKQgFgMgQAAQgIAAgJADQgHADgIAGQgIAEgHAIQgGAIgFAIIgOBPIgMAAIAWiBIAMAAIgFAgQAFgIAHgGQAHgGAIgFQAIgEAIgCQAJgCAJgBQAVAAAGAPQAHAPgFAbIgNBKg"
      );
    this.shape_9.setTransform(70.4587, 92.15);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#333333")
      .s()
      .p(
        "AglBAQgIgDgFgGQgEgFgCgHQgCgIABgIQACgJAFgGQAFgHAIgFQAIgFALgCQALgDALAAQAKAAAKACQALABAIAEIACgNQADgSgIgLQgJgLgSAAQgKAAgKAEQgMAEgMAIIgDgJQAcgRAVAAQAYAAALAOQAMANgFAYIgLA+QgBAGAGAAIgCALIgDABIgCAAQgFAAgDgEQgCgDAAgFIACgKQgLALgPAHQgPAGgQAAQgJAAgHgDgAgOAAQgJACgGADQgHAEgDAFQgEAGgCAGQgBAHACAFQABAGAEAEQAEAEAFACQAHADAHAAQAOAAAMgGQANgFAJgJQAEgFABgFIAEgXQgIgDgKgBQgJgCgLAAQgIAAgJACg"
      );
    this.shape_10.setTransform(56.2311, 92.275);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#333333")
      .s()
      .p(
        "AgjA9QgLgFgHgJQgHgJgDgNQgDgMADgNQACgNAHgMQAHgMAKgJQALgJAMgGQANgFAMAAQAOAAALAGQALAFAHAJQAHAJADAMQACAMgCANIgBACIAAADIhyAAQgBALADAJQACAKAGAHQAGAHAIAEQAJAEAKAAQAHAAAFgCQAHgCAGgDQAHgDAFgFIAJgKIAKADQgEAHgGAGQgHAGgIAEQgHAEgJACQgJADgJAAQgNAAgLgGgAgJg0QgKAEgIAHQgIAHgGAJQgGAKgDALIBmAAQACgMgDgJQgDgJgFgHQgGgHgJgEQgIgEgKAAQgKAAgJAEg"
      );
    this.shape_11.setTransform(36.4057, 92.275);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#333333")
      .s()
      .p(
        "AgoBbQgJgCgGgEQgGgEgEgGQgFgFgDgHIAKgFQAGANALAGQANAGAPAAQALAAAIgDQAJgDAIgFQAHgFAGgIQAFgIACgLIAEgcQgJANgPAHQgPAIgOAAQgNAAgKgGQgLgFgGgKQgGgJgDgLQgDgMADgMQABgOAIgMQAGgMAKgJQAJgJAMgGQAMgFANAAQARAAALAIQAMAJAGANIAEgcIANAAIgYCCQgBANgIAKQgGAKgKAHQgKAGgMAEQgKADgNAAQgKAAgKgCgAgKhMQgKAFgIAIQgIAIgFAKQgFAKgCAKQgBALABAKQADAJAFAHQAGAIAJAFQAJAEALAAQAHAAAIgDQAIgDAIgFQAIgFAFgGQAFgGACgGIAHgqQgBgHgEgHQgEgGgFgEQgHgFgHgDQgGgCgIAAQgLAAgKAFg"
      );
    this.shape_12.setTransform(20.8, 94.925);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#333333")
      .s()
      .p(
        "AglBAQgIgDgFgGQgEgFgCgHQgCgIABgIQACgJAFgGQAFgHAIgFQAIgFALgCQALgDALAAQAKAAAKACQALABAIAEIACgNQADgSgIgLQgJgLgSAAQgKAAgKAEQgMAEgMAIIgDgJQAcgRAVAAQAYAAALAOQAMANgFAYIgLA+QgBAGAGAAIgCALIgDABIgCAAQgFAAgDgEQgCgDAAgFIACgKQgLALgPAHQgPAGgQAAQgJAAgHgDgAgOAAQgJACgGADQgHAEgDAFQgEAGgCAGQgBAHACAFQABAGAEAEQAEAEAFACQAHADAHAAQAOAAAMgGQANgFAJgJQAEgFABgFIAEgXQgIgDgKgBQgJgCgLAAQgIAAgJACg"
      );
    this.shape_13.setTransform(6.3311, 92.275);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#333333")
      .s()
      .p(
        "AhIBcIAgi1IAMAAIgFAaQALgMAOgIQAOgIAPAAQAOAAAKAGQALAGAHAJQAGAJACAMQADAMgCANQgCANgHAMQgGAMgKAJQgJAJgMAFQgMAGgOAAQgQAAgLgJQgMgJgGgMIgOBQgAABhNQgHADgHAFQgIAFgGAGQgGAGgCAHIgHAqQACAHAEAGQAEAGAGAFQAFAEAHADQAGADAIAAQALAAAKgFQAKgFAIgIQAIgHAFgJQAFgKACgLQACgLgCgKQgCgKgGgIQgGgHgJgFQgJgFgLAAQgGAAgJADg"
      );
    this.shape_14.setTransform(-8.06, 94.775);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#333333")
      .s()
      .p(
        "AgsBWQgLgFgHgKQgGgJgDgMQgCgMACgNQACgNAHgMQAHgMAJgJQAKgJAMgFQAMgGAMAAQAIAAAIADQAHACAGAEQAGAEAEAGQAEAFADAGIAOhQIANAAIgdCjQgBAGAFAAIgCALIgDABIgCAAQgFAAgDgEQgCgEAAgEIADgPQgKANgPAIQgOAIgPAAQgNAAgLgGgAgTgZQgLAFgIAIQgIAIgFAJQgFAKgCAKQgCAMACAJQADAKAFAIQAGAIAJAEQAIAFALAAQAHAAAJgDQAHgDAIgFIANgLQAGgGABgHIAIgqQgBgGgEgHIgKgLQgGgEgHgDQgHgDgHAAQgLAAgJAFg"
      );
    this.shape_15.setTransform(-28.8875, 89.775);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f("#333333")
      .s()
      .p(
        "AgjA9QgLgFgHgJQgHgJgDgNQgDgMADgNQACgNAHgMQAHgMAKgJQALgJAMgGQANgFAMAAQAOAAALAGQALAFAHAJQAHAJADAMQACAMgCANIgBACIAAADIhyAAQgBALADAJQACAKAGAHQAGAHAIAEQAJAEAKAAQAHAAAFgCQAHgCAGgDQAHgDAFgFIAJgKIAKADQgEAHgGAGQgHAGgIAEQgHAEgJACQgJADgJAAQgNAAgLgGgAgJg0QgKAEgIAHQgIAHgGAJQgGAKgDALIBmAAQACgMgDgJQgDgJgFgHQgGgHgJgEQgIgEgKAAQgKAAgJAEg"
      );
    this.shape_16.setTransform(-44.2943, 92.275);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#333333")
      .s()
      .p(
        "AgSBWQgDgCgDgDQgEgDgBgEQgBgEABgGIARhgIgSAAIABgKIASAAIAIgsIAMAAIgIAsIAfAAIgCAKIgeAAIgQBdQgBAHAEAEQAFAEAGAAQAGAAAHgDIAHgDIACAKIgEABIgGADIgIACIgKABQgFAAgFgBg"
      );
    this.shape_17.setTransform(-55, 90.125);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f("#333333")
      .s()
      .p(
        "AggA9QgLgFgHgJQgHgJgCgNQgDgMACgNQADgNAHgMQAGgNAKgIQALgJAMgGQAMgFAOAAQASAAAMAIQANAIAEAOIgNAEQgEgLgKgGQgJgGgNAAQgLAAgJAFQgKAEgIAHQgJAIgFAKQgGAKgCALQgCALACAKQADALAFAHQAGAIAIAEQAJAFAKAAQAGAAAHgCQAHgCAHgEQAGgDAFgEQAFgEACgFIALADQgDAHgGAGQgGAGgIAEQgIAEgJACQgJADgIAAQgOAAgLgGg"
      );
    this.shape_18.setTransform(-66.3318, 92.275);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f("#333333")
      .s()
      .p(
        "AgjA9QgLgFgHgJQgHgJgDgNQgDgMADgNQACgNAHgMQAHgMAKgJQALgJAMgGQANgFAMAAQAOAAALAGQALAFAHAJQAHAJADAMQACAMgCANIgBACIAAADIhyAAQgBALADAJQACAKAGAHQAGAHAIAEQAJAEAKAAQAHAAAFgCQAHgCAGgDQAHgDAFgFIAJgKIAKADQgEAHgGAGQgHAGgIAEQgHAEgJACQgJADgJAAQgNAAgLgGgAgJg0QgKAEgIAHQgIAHgGAJQgGAKgDALIBmAAQACgMgDgJQgDgJgFgHQgGgHgJgEQgIgEgKAAQgKAAgJAEg"
      );
    this.shape_19.setTransform(-80.6443, 92.275);

    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics.f("#333333").s().p("AgQBVQgFgGACgLIAbieIANAAIgbCaQgBAHADAFQAEAEAGAAIAHgBIAHgCIABAKIgLADIgKABQgLAAgFgGg");
    this.shape_20.setTransform(-91.2517, 89.725);

    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics
      .f("#333333")
      .s()
      .p(
        "AgjA9QgLgFgHgJQgHgJgDgNQgDgMADgNQACgNAHgMQAHgMAKgJQALgJAMgGQANgFAMAAQAOAAALAGQALAFAHAJQAHAJADAMQACAMgCANIgBACIAAADIhyAAQgBALADAJQACAKAGAHQAGAHAIAEQAJAEAKAAQAHAAAFgCQAHgCAGgDQAHgDAFgFIAJgKIAKADQgEAHgGAGQgHAGgIAEQgHAEgJACQgJADgJAAQgNAAgLgGgAgJg0QgKAEgIAHQgIAHgGAJQgGAKgDALIBmAAQACgMgDgJQgDgJgFgHQgGgHgJgEQgIgEgKAAQgKAAgJAEg"
      );
    this.shape_21.setTransform(-101.7943, 92.275);

    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics
      .f("#333333")
      .s()
      .p(
        "AgkA+QgMgFgJgKIAIgJQAJAKAKAEQALAFANAAQAQAAAMgHQAMgHACgNQABgGgCgEQgCgEgFgDQgEgDgIgCIgQgFIgTgEQgHgCgFgEQgEgDgDgFQgBgFABgIQACgJAFgHQAFgIAHgEQAIgFAJgCQAIgDAKAAQAPAAALAFQALAFAFAIIgIAHQgFgHgKgEQgKgEgLAAQgIAAgGACQgGABgFADQgGAEgDAFQgEAFgCAHQgBAFACAEQABADAEADQADACAHACIAOAEIAVAGQAJACAFAEQAGADACAGQADAFgCAJQgDARgPAKQgQALgWAAQgPAAgNgFg"
      );
    this.shape_22.setTransform(-115.525, 92.275);

    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics
      .f("#333333")
      .s()
      .p(
        "AgjA9QgLgFgHgJQgHgJgDgNQgDgMADgNQACgNAHgMQAHgMAKgJQALgJAMgGQANgFAMAAQAOAAALAGQALAFAHAJQAHAJADAMQACAMgCANIgBACIAAADIhyAAQgBALADAJQACAKAGAHQAGAHAIAEQAJAEAKAAQAHAAAFgCQAHgCAGgDQAHgDAFgFIAJgKIAKADQgEAHgGAGQgHAGgIAEQgHAEgJACQgJADgJAAQgNAAgLgGgAgJg0QgKAEgIAHQgIAHgGAJQgGAKgDALIBmAAQACgMgDgJQgDgJgFgHQgGgHgJgEQgIgEgKAAQgKAAgJAEg"
      );
    this.shape_23.setTransform(83.0557, 62.275);

    this.shape_24 = new cjs.Shape();
    this.shape_24.graphics
      .f("#333333")
      .s()
      .p("AAiBaIAMhIQAJgughAAQgIAAgIADQgHADgIAFQgHAGgGAHQgHAGgEAJIgOBPIgNAAIAgi0IANAAIgPBTQALgPAQgIQAOgKARABQALAAAHADQAHAFAEAHQADAIABAKQABAKgDAMIgNBKg");
    this.shape_24.setTransform(68.0393, 59.65);

    this.shape_25 = new cjs.Shape();
    this.shape_25.graphics
      .f("#333333")
      .s()
      .p(
        "AgRBWQgFgCgDgDQgCgDgCgEQgBgEABgGIARhgIgTAAIACgKIATAAIAHgsIAMAAIgIAsIAeAAIgBAKIgeAAIgQBdQgCAHAFAEQAFAEAGAAQAHAAAGgDIAHgDIACAKIgDABIgHADIgJACIgJABQgFAAgEgBg"
      );
    this.shape_25.setTransform(57.9, 60.125);

    this.shape_26 = new cjs.Shape();
    this.shape_26.graphics
      .f("#333333")
      .s()
      .p(
        "AgjA9QgLgFgHgJQgHgJgCgMQgDgNACgNQACgNAIgMQAHgMAKgJQAKgJAMgFQANgGANAAQANAAALAGQAKAFAIAJQAHAJADAMQACAMgCANQgCANgHANQgIAMgKAJQgKAJgNAFQgMAGgNAAQgOAAgKgGgAgKgyQgKAEgIAIQgIAIgGAKQgHAKgCALQgCALADAKQACAKAGAHQAFAIAJAEQAIAFALAAQAJAAALgFQAKgEAIgIQAJgHAFgKQAGgKACgMQACgLgCgKQgCgKgGgHQgGgIgIgEQgJgFgKAAQgKAAgKAFg"
      );
    this.shape_26.setTransform(39.2876, 62.275);

    this.shape_27 = new cjs.Shape();
    this.shape_27.graphics
      .f("#333333")
      .s()
      .p(
        "AgRBWQgFgCgCgDQgDgDgCgEQgBgEABgGIARhgIgTAAIACgKIASAAIAIgsIAMAAIgIAsIAeAAIgBAKIgeAAIgQBdQgCAHAFAEQAEAEAHAAQAGAAAHgDIAHgDIACAKIgEABIgGADIgIACIgKABQgFAAgEgBg"
      );
    this.shape_27.setTransform(28.9, 60.125);

    this.shape_28 = new cjs.Shape();
    this.shape_28.graphics
      .f("#333333")
      .s()
      .p(
        "AgoBbQgJgCgGgEQgGgEgEgGQgFgFgDgHIAKgFQAGANALAGQANAGAPAAQALAAAIgDQAJgDAIgFQAHgFAGgIQAFgIACgLIAEgcQgJANgPAHQgPAIgOAAQgNAAgKgGQgLgFgGgKQgGgJgDgLQgDgMADgMQABgOAIgMQAGgMAKgJQAJgJAMgGQAMgFANAAQARAAALAIQAMAJAGANIAEgcIANAAIgYCCQgBANgIAKQgGAKgKAHQgKAGgMAEQgKADgNAAQgKAAgKgCgAgKhMQgKAFgIAIQgIAIgEAKQgGAKgCAKQgCALACAKQADAJAFAHQAGAIAJAFQAJAEALAAQAHAAAIgDQAIgDAIgFQAIgFAFgGQAFgGACgGIAHgqQgBgHgEgHQgEgGgFgEQgHgFgHgDQgGgCgIAAQgLAAgKAFg"
      );
    this.shape_28.setTransform(9.55, 64.925);

    this.shape_29 = new cjs.Shape();
    this.shape_29.graphics
      .f("#333333")
      .s()
      .p(
        "AAhBBIANhHQAEgZgFgLQgFgLgQAAQgIAAgJADQgHADgIAFQgIAGgHAHQgGAHgFAJIgOBOIgMAAIAWiAIAMAAIgFAfQAFgHAHgGQAHgGAIgEQAIgFAIgCQAJgDAJABQAVAAAGAOQAHAPgFAbIgNBJg"
      );
    this.shape_29.setTransform(-5.1413, 62.15);

    this.shape_30 = new cjs.Shape();
    this.shape_30.graphics.f("#333333").s().p("AgVBaIAViAIANAAIgWCAgAAGhCIAEgYIAMAAIgEAYg");
    this.shape_30.setTransform(-14.225, 59.65);

    this.shape_31 = new cjs.Shape();
    this.shape_31.graphics
      .f("#333333")
      .s()
      .p(
        "AAhBBIANhHQAEgZgFgLQgFgLgQAAQgIAAgJADQgHADgIAFQgIAGgHAHQgGAHgFAJIgOBOIgMAAIAWiAIAMAAIgFAfQAFgHAHgGQAHgGAIgEQAIgFAIgCQAJgDAJABQAVAAAGAOQAHAPgFAbIgNBJg"
      );
    this.shape_31.setTransform(-24.7913, 62.15);

    this.shape_32 = new cjs.Shape();
    this.shape_32.graphics
      .f("#333333")
      .s()
      .p(
        "AgjA9QgLgFgHgJQgHgJgCgMQgDgNACgNQACgNAIgMQAHgMAKgJQAKgJAMgFQANgGANAAQANAAALAGQAKAFAIAJQAHAJADAMQACAMgCANQgCANgHANQgIAMgKAJQgKAJgNAFQgMAGgNAAQgOAAgKgGgAgKgyQgKAEgIAIQgIAIgGAKQgHAKgCALQgCALADAKQACAKAGAHQAFAIAJAEQAIAFALAAQAJAAALgFQAKgEAIgIQAJgHAFgKQAGgKACgMQACgLgCgKQgCgKgGgHQgGgIgIgEQgJgFgKAAQgKAAgKAFg"
      );
    this.shape_32.setTransform(-39.1124, 62.275);

    this.shape_33 = new cjs.Shape();
    this.shape_33.graphics.f("#333333").s().p("AgVBaIAViAIANAAIgWCAgAAGhCIAEgYIAMAAIgEAYg");
    this.shape_33.setTransform(-48.725, 59.65);

    this.shape_34 = new cjs.Shape();
    this.shape_34.graphics
      .f("#333333")
      .s()
      .p(
        "AgSBWQgDgCgDgDQgEgDgBgEQgBgEABgGIARhgIgSAAIABgKIASAAIAIgsIAMAAIgIAsIAfAAIgCAKIgeAAIgQBdQgBAHAEAEQAFAEAGAAQAGAAAHgDIAHgDIACAKIgEABIgGADIgIACIgKABQgFAAgFgBg"
      );
    this.shape_34.setTransform(-55, 60.125);

    this.shape_35 = new cjs.Shape();
    this.shape_35.graphics.f("#333333").s().p("AgVBaIAViAIANAAIgWCAgAAGhCIAEgYIAMAAIgEAYg");
    this.shape_35.setTransform(-61.925, 59.65);

    this.shape_36 = new cjs.Shape();
    this.shape_36.graphics
      .f("#333333")
      .s()
      .p(
        "AgkA+QgMgFgJgKIAIgJQAJAKAKAEQALAFANAAQAQAAAMgHQAMgHACgNQABgGgCgEQgCgEgFgDQgEgDgIgCIgQgFIgTgEQgHgCgFgEQgEgDgDgFQgBgFABgIQACgJAFgHQAFgIAHgEQAIgFAJgCQAIgDAKAAQAPAAALAFQALAFAFAIIgIAHQgFgHgKgEQgKgEgLAAQgIAAgGACQgGABgFADQgGAEgDAFQgEAFgCAHQgBAFACAEQABADAEADQADACAHACIAOAEIAVAGQAJACAFAEQAGADACAGQADAFgCAJQgDARgPAKQgQALgWAAQgPAAgNgFg"
      );
    this.shape_36.setTransform(-71.225, 62.275);

    this.shape_37 = new cjs.Shape();
    this.shape_37.graphics
      .f("#333333")
      .s()
      .p(
        "AAhBBIANhHQAEgZgFgLQgFgLgQAAQgIAAgJADQgHADgIAFQgIAGgHAHQgGAHgFAJIgOBOIgMAAIAWiAIAMAAIgFAfQAFgHAHgGQAHgGAIgEQAIgFAIgCQAJgDAJABQAVAAAGAOQAHAPgFAbIgNBJg"
      );
    this.shape_37.setTransform(-84.5413, 62.15);

    this.shape_38 = new cjs.Shape();
    this.shape_38.graphics
      .f("#333333")
      .s()
      .p(
        "AglBAQgIgDgFgGQgEgFgCgHQgCgIABgIQACgJAFgGQAFgHAIgFQAIgFALgCQALgDALAAQAKAAAKACQALABAIAEIACgNQADgSgIgLQgJgLgSAAQgKAAgKAEQgMAEgMAIIgDgJQAcgRAVAAQAYAAALAOQAMANgFAYIgLA+QgBAGAGAAIgCALIgDABIgCAAQgFAAgDgEQgCgDAAgFIACgKQgLALgPAHQgPAGgQAAQgJAAgHgDgAgOAAQgJACgGADQgHAEgDAFQgEAGgCAGQgBAHACAFQABAGAEAEQAEAEAFACQAHADAHAAQAOAAAMgGQANgFAJgJQAEgFABgFIAEgXQgIgDgKgBQgJgCgLAAQgIAAgJACg"
      );
    this.shape_38.setTransform(-98.7689, 62.275);

    this.shape_39 = new cjs.Shape();
    this.shape_39.graphics.f("#333333").s().p("AgqBBIAXiAIAMAAIgGAgQAKgOAMgIQANgJAMgBIAFgBIADAAIgCAMQgSABgOAJQgPAKgIARIgOBQg");
    this.shape_39.setTransform(-108.25, 62.225);

    this.shape_40 = new cjs.Shape();
    this.shape_40.graphics
      .f("#333333")
      .s()
      .p(
        "AgSBWQgEgCgCgDQgEgDgBgEQgBgEABgGIARhgIgTAAIACgKIASAAIAIgsIAMAAIgIAsIAeAAIgBAKIgeAAIgQBdQgBAHAEAEQAFAEAGAAQAGAAAHgDIAHgDIACAKIgEABIgGADIgIACIgKABQgFAAgFgBg"
      );
    this.shape_40.setTransform(-116.55, 60.125);

    this.shape_41 = new cjs.Shape();
    this.shape_41.graphics.f("#333333").s().p("AgIAUIAHgTIgFAAIAEgUIALAAIgDAUIgIATg");
    this.shape_41.setTransform(108.85, 38.65);

    this.shape_42 = new cjs.Shape();
    this.shape_42.graphics
      .f("#333333")
      .s()
      .p(
        "AgkA+QgMgFgJgKIAIgJQAJAKAKAEQALAFANAAQAQAAAMgHQAMgHACgNQABgGgCgEQgCgEgFgDQgEgDgIgCIgQgFIgTgEQgHgCgFgEQgEgDgDgFQgBgFABgIQACgJAFgHQAFgIAHgEQAIgFAJgCQAIgDAKAAQAPAAALAFQALAFAFAIIgIAHQgFgHgKgEQgKgEgLAAQgIAAgGACQgGABgFADQgGAEgDAFQgEAFgCAHQgBAFACAEQABADAEADQADACAHACIAOAEIAVAGQAJACAFAEQAGADACAGQADAFgCAJQgDARgPAKQgQALgWAAQgPAAgNgFg"
      );
    this.shape_42.setTransform(100.675, 32.275);

    this.shape_43 = new cjs.Shape();
    this.shape_43.graphics
      .f("#333333")
      .s()
      .p(
        "AgsBWQgLgFgHgKQgGgJgDgMQgCgMACgNQACgNAHgMQAHgMAJgJQAKgJAMgFQAMgGAMAAQAIAAAIADQAHACAGAEQAGAEAEAGQAEAFADAGIAOhQIANAAIgdCjQgBAGAFAAIgCALIgDABIgCAAQgFAAgDgEQgCgEAAgEIADgPQgKANgPAIQgOAIgPAAQgNAAgLgGgAgTgZQgLAFgIAIQgIAIgFAJQgFAKgCAKQgCAMACAJQADAKAFAIQAGAIAJAEQAIAFALAAQAHAAAJgDQAHgDAIgFIANgLQAGgGABgHIAIgqQgBgGgEgHIgKgLQgGgEgHgDQgHgDgHAAQgLAAgJAFg"
      );
    this.shape_43.setTransform(87.6625, 29.775);

    this.shape_44 = new cjs.Shape();
    this.shape_44.graphics.f("#333333").s().p("AgqBBIAXiAIAMAAIgFAgQAJgOAMgIQAMgJANgBIAFgBIAEAAIgDAMQgRABgPAJQgPAKgIARIgOBQg");
    this.shape_44.setTransform(76.55, 32.225);

    this.shape_45 = new cjs.Shape();
    this.shape_45.graphics
      .f("#333333")
      .s()
      .p(
        "AglBAQgIgDgFgGQgEgFgCgHQgCgIABgIQACgJAFgGQAFgHAIgFQAIgFALgCQALgDALAAQAKAAAKACQALABAIAEIACgNQADgSgIgLQgJgLgSAAQgKAAgKAEQgMAEgMAIIgDgJQAcgRAVAAQAYAAALAOQAMANgFAYIgLA+QgBAGAGAAIgCALIgDABIgCAAQgFAAgDgEQgCgDAAgFIACgKQgLALgPAHQgPAGgQAAQgJAAgHgDgAgOAAQgJACgGADQgHAEgDAFQgEAGgCAGQgBAHACAFQABAGAEAEQAEAEAFACQAHADAHAAQAOAAAMgGQANgFAJgJQAEgFABgFIAEgXQgIgDgKgBQgJgCgLAAQgIAAgJACg"
      );
    this.shape_45.setTransform(64.1811, 32.275);

    this.shape_46 = new cjs.Shape();
    this.shape_46.graphics.f("#333333").s().p("AAHBBIgRhEIgpBEIgLAAIghiAIAMAAIAdByIAng/IgNgzIALAAIAKAqIAYgqIAMAAIgfAzIAQA/IBGhyIANAAIhQCAg");
    this.shape_46.setTransform(49.3, 32.25);

    this.shape_47 = new cjs.Shape();
    this.shape_47.graphics
      .f("#333333")
      .s()
      .p(
        "AAhBCIANhIQAEgYgFgMQgFgLgQAAQgIAAgJADQgHADgIAFQgIAFgHAIQgGAHgFAJIgOBPIgMAAIAWiAIAMAAIgFAeQAFgHAHgGQAHgGAIgFQAIgEAIgCQAJgDAJAAQAVAAAGAPQAHAPgFAcIgNBJg"
      );
    this.shape_47.setTransform(30.7587, 32.15);

    this.shape_48 = new cjs.Shape();
    this.shape_48.graphics.f("#333333").s().p("AAHBBIgRhEIgpBEIgKAAIgiiAIALAAIAeByIAng/IgNgzIALAAIALAqIAXgqIAMAAIgfAzIAQA/IBGhyIAMAAIhPCAg");
    this.shape_48.setTransform(14.85, 32.25);

    this.shape_49 = new cjs.Shape();
    this.shape_49.graphics
      .f("#333333")
      .s()
      .p(
        "AgjA9QgLgFgHgJQgHgJgCgMQgDgNACgNQACgNAIgMQAHgMAKgJQAKgJAMgFQANgGANAAQANAAALAGQAKAFAIAJQAHAJADAMQACAMgCANQgCANgHANQgIAMgKAJQgKAJgNAFQgMAGgNAAQgOAAgKgGgAgKgyQgKAEgIAIQgIAIgGAKQgHAKgCALQgCALADAKQACAKAGAHQAFAIAJAEQAIAFALAAQAJAAALgFQAKgEAIgIQAJgHAFgKQAGgKACgMQACgLgCgKQgCgKgGgHQgGgIgIgEQgJgFgKAAQgKAAgKAFg"
      );
    this.shape_49.setTransform(-3.3124, 32.275);

    this.shape_50 = new cjs.Shape();
    this.shape_50.graphics
      .f("#333333")
      .s()
      .p(
        "AgsBWQgLgFgHgKQgGgJgDgMQgCgMACgNQACgNAHgMQAHgMAJgJQAKgJAMgFQAMgGAMAAQAIAAAIADQAHACAGAEQAGAEAEAGQAEAFADAGIAOhQIANAAIgdCjQgBAGAFAAIgCALIgDABIgCAAQgFAAgDgEQgCgEAAgEIADgPQgKANgPAIQgOAIgPAAQgNAAgLgGgAgTgZQgLAFgIAIQgIAIgFAJQgFAKgCAKQgCAMACAJQADAKAFAIQAGAIAJAEQAIAFALAAQAHAAAJgDQAHgDAIgFIANgLQAGgGABgHIAIgqQgBgGgEgHIgKgLQgGgEgHgDQgHgDgHAAQgLAAgJAFg"
      );
    this.shape_50.setTransform(-17.9875, 29.775);

    this.shape_51 = new cjs.Shape();
    this.shape_51.graphics
      .f("#333333")
      .s()
      .p(
        "AgkA+QgMgFgJgKIAIgJQAJAKAKAEQALAFANAAQAQAAAMgHQAMgHACgNQABgGgCgEQgCgEgFgDQgEgDgIgCIgQgFIgTgEQgHgCgFgEQgEgDgDgFQgBgFABgIQACgJAFgHQAFgIAHgEQAIgFAJgCQAIgDAKAAQAPAAALAFQALAFAFAIIgIAHQgFgHgKgEQgKgEgLAAQgIAAgGACQgGABgFADQgGAEgDAFQgEAFgCAHQgBAFACAEQABADAEADQADACAHACIAOAEIAVAGQAJACAFAEQAGADACAGQADAFgCAJQgDARgPAKQgQALgWAAQgPAAgNgFg"
      );
    this.shape_51.setTransform(-38.925, 32.275);

    this.shape_52 = new cjs.Shape();
    this.shape_52.graphics
      .f("#333333")
      .s()
      .p(
        "AgjA9QgLgFgHgJQgHgJgDgNQgDgMADgNQACgNAHgMQAHgMAKgJQALgJAMgGQANgFAMAAQAOAAALAGQALAFAHAJQAHAJADAMQACAMgCANIgBACIAAADIhyAAQgBALADAJQACAKAGAHQAGAHAIAEQAJAEAKAAQAHAAAFgCQAHgCAGgDQAHgDAFgFIAJgKIAKADQgEAHgGAGQgHAGgIAEQgHAEgJACQgJADgJAAQgNAAgLgGgAgJg0QgKAEgIAHQgIAHgGAJQgGAKgDALIBmAAQACgMgDgJQgDgJgFgHQgGgHgJgEQgIgEgKAAQgKAAgJAEg"
      );
    this.shape_52.setTransform(-51.8943, 32.275);

    this.shape_53 = new cjs.Shape();
    this.shape_53.graphics
      .f("#333333")
      .s()
      .p(
        "AggA9QgLgFgHgJQgHgJgCgNQgDgMACgNQADgNAHgMQAGgNAKgIQALgJAMgGQAMgFAOAAQASAAAMAIQANAIAEAOIgNAEQgEgLgKgGQgJgGgNAAQgLAAgJAFQgKAEgIAHQgJAIgFAKQgGAKgCALQgCALACAKQADALAFAHQAGAIAIAEQAJAFAKAAQAGAAAHgCQAHgCAHgEQAGgDAFgEQAFgEACgFIALADQgDAHgGAGQgGAGgIAEQgIAEgJACQgJADgIAAQgOAAgLgGg"
      );
    this.shape_53.setTransform(-65.9318, 32.275);

    this.shape_54 = new cjs.Shape();
    this.shape_54.graphics.f("#333333").s().p("AgVBbIAViAIANAAIgWCAgAAGhDIAEgWIAMAAIgEAWg");
    this.shape_54.setTransform(-75.225, 29.65);

    this.shape_55 = new cjs.Shape();
    this.shape_55.graphics
      .f("#333333")
      .s()
      .p(
        "AgjA9QgLgFgHgJQgHgJgCgMQgDgNACgNQACgNAIgMQAHgMAKgJQAKgJAMgFQANgGANAAQANAAALAGQAKAFAIAJQAHAJADAMQACAMgCANQgCANgHANQgIAMgKAJQgKAJgNAFQgMAGgNAAQgOAAgKgGgAgKgyQgKAEgIAIQgIAIgGAKQgHAKgCALQgCALADAKQACAKAGAHQAFAIAJAEQAIAFALAAQAJAAALgFQAKgEAIgIQAJgHAFgKQAGgKACgMQACgLgCgKQgCgKgGgHQgGgIgIgEQgJgFgKAAQgKAAgKAFg"
      );
    this.shape_55.setTransform(-85.6624, 32.275);

    this.shape_56 = new cjs.Shape();
    this.shape_56.graphics
      .f("#333333")
      .s()
      .p("AAiBbIAMhJQAJgughAAQgIAAgIADQgHADgIAFQgHAFgGAIQgHAGgEAJIgOBQIgNAAIAgi0IANAAIgPBSQALgOAQgKQAOgIARgBQALABAHAEQAHADAEAIQADAHABALQABAJgDAOIgNBKg");
    this.shape_56.setTransform(-100.6607, 29.65);

    this.shape_57 = new cjs.Shape();
    this.shape_57.graphics
      .f("#333333")
      .s()
      .p(
        "AggA9QgLgFgHgJQgHgJgCgNQgDgMACgNQADgNAHgMQAGgNAKgIQALgJAMgGQAMgFAOAAQASAAAMAIQANAIAEAOIgNAEQgEgLgKgGQgJgGgNAAQgLAAgJAFQgKAEgIAHQgJAIgFAKQgGAKgCALQgCALACAKQADALAFAHQAGAIAIAEQAJAFAKAAQAGAAAHgCQAHgCAHgEQAGgDAFgEQAFgEACgFIALADQgDAHgGAGQgGAGgIAEQgIAEgJACQgJADgIAAQgOAAgLgGg"
      );
    this.shape_57.setTransform(-114.1318, 32.275);

    this.shape_58 = new cjs.Shape();
    this.shape_58.graphics
      .f("#333333")
      .s()
      .p(
        "AgkA+QgMgFgJgKIAIgJQAJAKAKAEQALAFANAAQAQAAAMgHQAMgHACgNQABgGgCgEQgCgEgFgDQgEgDgIgCIgQgFIgTgEQgHgCgFgEQgEgDgDgFQgBgFABgIQACgJAFgHQAFgIAHgEQAIgFAJgCQAIgDAKAAQAPAAALAFQALAFAFAIIgIAHQgFgHgKgEQgKgEgLAAQgIAAgGACQgGABgFADQgGAEgDAFQgEAFgCAHQgBAFACAEQABADAEADQADACAHACIAOAEIAVAGQAJACAFAEQAGADACAGQADAFgCAJQgDARgPAKQgQALgWAAQgPAAgNgFg"
      );
    this.shape_58.setTransform(61.175, 2.275);

    this.shape_59 = new cjs.Shape();
    this.shape_59.graphics
      .f("#333333")
      .s()
      .p(
        "Ag7AJIANhKIANAAIgNBIQgIAwAhAAQAIAAAIgDQAIgDAHgFQAIgFAGgHQAHgIAEgIIAOhRIANAAIgUBvQgBAGAGAAIgCALIgCAAIgCAAQgFAAgDgDQgEgDABgFIAEgTQgMAPgQAJQgQAJgRAAQgqAAAKg5g"
      );
    this.shape_59.setTransform(48.2779, 2.375);

    this.shape_60 = new cjs.Shape();
    this.shape_60.graphics
      .f("#333333")
      .s()
      .p(
        "AAhBCIANhHQAEgagFgKQgFgMgQAAQgIAAgJADQgHADgIAGQgIAEgHAIQgGAIgFAIIgOBPIgMAAIAWiBIAMAAIgFAgQAFgIAHgGQAHgGAIgFQAIgEAIgCQAJgCAJgBQAVAAAGAPQAHAPgFAbIgNBKg"
      );
    this.shape_60.setTransform(33.1087, 2.15);

    this.shape_61 = new cjs.Shape();
    this.shape_61.graphics
      .f("#333333")
      .s()
      .p(
        "AgjA9QgLgFgHgJQgHgJgDgNQgDgMADgNQACgNAHgMQAHgMAKgJQALgJAMgGQANgFAMAAQAOAAALAGQALAFAHAJQAHAJADAMQACAMgCANIgBACIAAADIhyAAQgBALADAJQACAKAGAHQAGAHAIAEQAJAEAKAAQAHAAAFgCQAHgCAGgDQAHgDAFgFIAJgKIAKADQgEAHgGAGQgHAGgIAEQgHAEgJACQgJADgJAAQgNAAgLgGgAgJg0QgKAEgIAHQgIAHgGAJQgGAKgDALIBmAAQACgMgDgJQgDgJgFgHQgGgHgJgEQgIgEgKAAQgKAAgJAEg"
      );
    this.shape_61.setTransform(19.0057, 2.275);

    this.shape_62 = new cjs.Shape();
    this.shape_62.graphics
      .f("#333333")
      .s()
      .p(
        "ABMBCIAMhHQAFgZgGgLQgFgMgQAAQgIAAgIADQgIADgHAFQgHAGgFAGQgGAIgEAJIgNBPIgNAAIANhHQADgZgEgLQgGgMgQAAQgIAAgIADQgHADgHAFQgHAFgGAHQgGAIgEAJIgOBPIgNAAIAXiBIAMAAIgFAgQAKgQAPgJQAOgJAQAAQARAAAIAKQAIAKgBAPQAZgjAhAAQAVABAHAPQAGAOgFAbIgNBKg"
      );
    this.shape_62.setTransform(-0.2413, 2.15);

    this.shape_63 = new cjs.Shape();
    this.shape_63.graphics.f("#333333").s().p("AgqBBIAXiAIAMAAIgGAgQAKgOAMgIQANgJAMgBIAFgBIAEAAIgDAMQgSABgOAJQgPAKgIARIgOBQg");
    this.shape_63.setTransform(-20.85, 2.225);

    this.shape_64 = new cjs.Shape();
    this.shape_64.graphics
      .f("#333333")
      .s()
      .p(
        "AgjA9QgLgFgHgJQgHgJgDgNQgDgMADgNQACgNAHgMQAHgMAKgJQALgJAMgGQANgFAMAAQAOAAALAGQALAFAHAJQAHAJADAMQACAMgCANIgBACIAAADIhyAAQgBALADAJQACAKAGAHQAGAHAIAEQAJAEAKAAQAHAAAFgCQAHgCAGgDQAHgDAFgFIAJgKIAKADQgEAHgGAGQgHAGgIAEQgHAEgJACQgJADgJAAQgNAAgLgGgAgJg0QgKAEgIAHQgIAHgGAJQgGAKgDALIBmAAQACgMgDgJQgDgJgFgHQgGgHgJgEQgIgEgKAAQgKAAgJAEg"
      );
    this.shape_64.setTransform(-33.0943, 2.275);

    this.shape_65 = new cjs.Shape();
    this.shape_65.graphics
      .f("#333333")
      .s()
      .p("AAiBbIAMhIQAJgvghAAQgIAAgIADQgHADgIAGQgHAEgGAIQgHAHgEAIIgOBQIgNAAIAgi0IANAAIgPBTQALgPAQgKQAOgJARAAQALAAAHAFQAHAEAEAHQADAIABAKQABAJgDANIgNBLg");
    this.shape_65.setTransform(-48.1107, -0.35);

    this.shape_66 = new cjs.Shape();
    this.shape_66.graphics
      .f("#333333")
      .s()
      .p(
        "AgSBWQgDgCgEgDQgCgDgCgEQgBgEABgGIARhgIgSAAIABgKIASAAIAJgsIALAAIgIAsIAfAAIgCAKIgeAAIgQBdQgBAHAEAEQAFAEAGAAQAHAAAFgDIAIgDIACAKIgEABIgGADIgJACIgJABQgFAAgFgBg"
      );
    this.shape_66.setTransform(-58.25, 0.125);

    this.shape_67 = new cjs.Shape();
    this.shape_67.graphics
      .f("#333333")
      .s()
      .p(
        "AgjA9QgLgFgHgJQgHgJgCgMQgDgNACgNQACgNAIgMQAHgMAKgJQAKgJAMgFQANgGANAAQANAAALAGQAKAFAIAJQAHAJADAMQACAMgCANQgCANgHANQgIAMgKAJQgKAJgNAFQgMAGgNAAQgOAAgKgGgAgKgyQgKAEgIAIQgIAIgGAKQgHAKgCALQgCALADAKQACAKAGAHQAFAIAJAEQAIAFALAAQAJAAALgFQAKgEAIgIQAJgHAFgKQAGgKACgMQACgLgCgKQgCgKgGgHQgGgIgIgEQgJgFgKAAQgKAAgKAFg"
      );
    this.shape_67.setTransform(-70.2624, 2.275);

    this.shape_68 = new cjs.Shape();
    this.shape_68.graphics
      .f("#333333")
      .s()
      .p(
        "AgjA9QgLgFgHgJQgHgJgDgNQgDgMADgNQACgNAHgMQAHgMAKgJQALgJAMgGQANgFAMAAQAOAAALAGQALAFAHAJQAHAJADAMQACAMgCANIgBACIAAADIhyAAQgBALADAJQACAKAGAHQAGAHAIAEQAJAEAKAAQAHAAAFgCQAHgCAGgDQAHgDAFgFIAJgKIAKADQgEAHgGAGQgHAGgIAEQgHAEgJACQgJADgJAAQgNAAgLgGgAgJg0QgKAEgIAHQgIAHgGAJQgGAKgDALIBmAAQACgMgDgJQgDgJgFgHQgGgHgJgEQgIgEgKAAQgKAAgJAEg"
      );
    this.shape_68.setTransform(-91.3443, 2.275);

    this.shape_69 = new cjs.Shape();
    this.shape_69.graphics
      .f("#333333")
      .s()
      .p("AAiBbIAMhIQAJgvghAAQgIAAgIADQgHADgIAGQgHAEgGAIQgHAHgEAIIgOBQIgNAAIAgi0IANAAIgPBTQALgPAQgKQAOgJARAAQALAAAHAFQAHAEAEAHQADAIABAKQABAJgDANIgNBLg");
    this.shape_69.setTransform(-106.3607, -0.35);

    this.shape_70 = new cjs.Shape();
    this.shape_70.graphics
      .f("#333333")
      .s()
      .p(
        "AgSBWQgEgCgDgDQgDgDgBgEQgBgEABgGIARhgIgSAAIABgKIATAAIAIgsIALAAIgIAsIAfAAIgCAKIgeAAIgQBdQgBAHAEAEQAEAEAHAAQAHAAAFgDIAIgDIACAKIgDABIgHADIgJACIgJABQgFAAgFgBg"
      );
    this.shape_70.setTransform(-116.5, 0.125);

    this.shape_71 = new cjs.Shape();
    this.shape_71.graphics
      .f("#333333")
      .s()
      .p(
        "AgoBbQgJgCgGgEQgFgEgFgGQgEgFgEgHIAKgFQAFANAMAGQANAGAPAAQALAAAIgDQAJgDAHgFQAJgFAFgIQAFgIACgLIAEgcQgKANgOAHQgPAIgOAAQgNAAgKgGQgLgFgGgKQgGgJgDgLQgDgMADgMQABgOAIgMQAGgMAJgJQAKgJAMgGQAMgFANAAQARAAALAIQAMAJAGANIAEgcIANAAIgYCCQgBANgIAKQgGAKgKAHQgJAGgMAEQgLADgNAAQgLAAgJgCgAgKhMQgKAFgIAIQgIAIgEAKQgGAKgCAKQgBALABAKQADAJAFAHQAGAIAJAFQAJAEALAAQAHAAAIgDQAIgDAIgFQAHgFAGgGQAEgGADgGIAHgqQgBgHgEgHQgFgGgEgEQgHgFgHgDQgGgCgIAAQgLAAgKAFg"
      );
    this.shape_71.setTransform(61.65, -25.025);

    this.shape_72 = new cjs.Shape();
    this.shape_72.graphics
      .f("#333333")
      .s()
      .p(
        "AAhBCIANhHQAEgZgFgLQgFgMgQAAQgIAAgJADQgHADgIAGQgIAEgHAIQgGAHgFAJIgOBPIgMAAIAWiAIAMAAIgFAeQAFgHAHgGQAHgGAIgFQAIgEAIgCQAJgDAJAAQAVAAAGAPQAHAPgFAcIgNBJg"
      );
    this.shape_72.setTransform(46.9087, -27.8);

    this.shape_73 = new cjs.Shape();
    this.shape_73.graphics.f("#333333").s().p("AgVBbIAViAIANAAIgWCAgAAGhDIAEgWIAMAAIgEAWg");
    this.shape_73.setTransform(37.825, -30.3);

    this.shape_74 = new cjs.Shape();
    this.shape_74.graphics.f("#333333").s().p("AgcBBIggiAIANAAIAcBzIBDhzIANAAIhMCAg");
    this.shape_74.setTransform(29.3, -27.7);

    this.shape_75 = new cjs.Shape();
    this.shape_75.graphics
      .f("#333333")
      .s()
      .p(
        "AgjA9QgLgFgHgJQgHgJgCgMQgDgNACgNQACgNAIgMQAHgMAKgJQAKgJAMgFQANgGANAAQANAAALAGQAKAFAIAJQAHAJADAMQACAMgCANQgCANgHANQgIAMgKAJQgKAJgNAFQgMAGgNAAQgOAAgKgGgAgKgyQgKAEgIAIQgIAIgGAKQgHAKgCALQgCALADAKQACAKAGAHQAFAIAJAEQAIAFALAAQAJAAALgFQAKgEAIgIQAJgHAFgKQAGgKACgMQACgLgCgKQgCgKgGgHQgGgIgIgEQgJgFgKAAQgKAAgKAFg"
      );
    this.shape_75.setTransform(14.5376, -27.675);

    this.shape_76 = new cjs.Shape();
    this.shape_76.graphics
      .f("#333333")
      .s()
      .p(
        "ABMBCIAMhHQAFgZgGgLQgFgMgQAAQgIAAgIADQgIADgHAFQgHAGgFAGQgGAIgEAJIgNBPIgNAAIANhHQADgZgEgLQgGgMgQAAQgIAAgIADQgHADgHAFQgHAFgGAHQgGAIgEAJIgOBPIgNAAIAXiAIAMAAIgFAeQAKgPAPgJQAOgJAQAAQARAAAIAKQAIAKgBAPQAZgiAhgBQAVAAAHAPQAGAQgFAbIgNBJg"
      );
    this.shape_76.setTransform(-4.6913, -27.8);

    this.shape_77 = new cjs.Shape();
    this.shape_77.graphics
      .f("#333333")
      .s()
      .p(
        "AgkA+QgMgFgJgKIAIgJQAJAKAKAEQALAFANAAQAQAAAMgHQAMgHACgNQABgGgCgEQgCgEgFgDQgEgDgIgCIgQgFIgTgEQgHgCgFgEQgEgDgDgFQgBgFABgIQACgJAFgHQAFgIAHgEQAIgFAJgCQAIgDAKAAQAPAAALAFQALAFAFAIIgIAHQgFgHgKgEQgKgEgLAAQgIAAgGACQgGABgFADQgGAEgDAFQgEAFgCAHQgBAFACAEQABADAEADQADACAHACIAOAEIAVAGQAJACAFAEQAGADACAGQADAFgCAJQgDARgPAKQgQALgWAAQgPAAgNgFg"
      );
    this.shape_77.setTransform(-28.575, -27.675);

    this.shape_78 = new cjs.Shape();
    this.shape_78.graphics
      .f("#333333")
      .s()
      .p(
        "AgsBWQgLgFgHgKQgGgJgDgMQgCgMACgNQACgNAHgMQAHgMAJgJQAKgJAMgFQAMgGAMAAQAIAAAIADQAHACAGAEQAGAEAEAGQAEAFADAGIAOhQIANAAIgdCjQgBAGAFAAIgCALIgDABIgCAAQgFAAgDgEQgCgEAAgEIADgPQgKANgPAIQgOAIgPAAQgNAAgLgGgAgTgZQgLAFgIAIQgIAIgFAJQgFAKgCAKQgCAMACAJQADAKAFAIQAGAIAJAEQAIAFALAAQAHAAAJgDQAHgDAIgFIANgLQAGgGABgHIAIgqQgBgGgEgHIgKgLQgGgEgHgDQgHgDgHAAQgLAAgJAFg"
      );
    this.shape_78.setTransform(-41.5875, -30.175);

    this.shape_79 = new cjs.Shape();
    this.shape_79.graphics.f("#333333").s().p("AgqBBIAXiAIAMAAIgGAgQAKgOAMgIQAMgJANgBIAFgBIAEAAIgDAMQgRABgPAJQgPAKgIARIgOBQg");
    this.shape_79.setTransform(-52.7, -27.725);

    this.shape_80 = new cjs.Shape();
    this.shape_80.graphics
      .f("#333333")
      .s()
      .p(
        "AglBAQgIgDgFgGQgEgFgCgHQgCgIABgIQACgJAFgGQAFgHAIgFQAIgFALgCQALgDALAAQAKAAAKACQALABAIAEIACgNQADgSgIgLQgJgLgSAAQgKAAgKAEQgMAEgMAIIgDgJQAcgRAVAAQAYAAALAOQAMANgFAYIgLA+QgBAGAGAAIgCALIgDABIgCAAQgFAAgDgEQgCgDAAgFIACgKQgLALgPAHQgPAGgQAAQgJAAgHgDgAgOAAQgJACgGADQgHAEgDAFQgEAGgCAGQgBAHACAFQABAGAEAEQAEAEAFACQAHADAHAAQAOAAAMgGQANgFAJgJQAEgFABgFIAEgXQgIgDgKgBQgJgCgLAAQgIAAgJACg"
      );
    this.shape_80.setTransform(-65.0689, -27.675);

    this.shape_81 = new cjs.Shape();
    this.shape_81.graphics.f("#333333").s().p("AAHBBIgRhEIgpBEIgLAAIgiiAIANAAIAdByIAng/IgNgzIALAAIAKAqIAYgqIAMAAIgeAzIAPA/IBGhyIANAAIhQCAg");
    this.shape_81.setTransform(-79.95, -27.7);

    this.shape_82 = new cjs.Shape();
    this.shape_82.graphics
      .f("#333333")
      .s()
      .p(
        "AhIBcIAgi1IAMAAIgFAaQALgMAOgIQAOgIAPAAQAOAAAKAGQALAGAHAJQAGAJACAMQADAMgCANQgCANgHAMQgGAMgKAJQgJAJgMAFQgMAGgOAAQgQAAgLgJQgMgJgGgMIgOBQgAABhNQgHADgHAFQgIAFgGAGQgGAGgCAHIgHAqQACAHAEAGQAEAGAGAFQAFAEAHADQAGADAIAAQALAAAKgFQAKgFAIgIQAIgHAFgJQAFgKACgLQACgLgCgKQgCgKgGgIQgGgHgJgFQgJgFgLAAQgGAAgJADg"
      );
    this.shape_82.setTransform(-99.41, -25.175);

    this.shape_83 = new cjs.Shape();
    this.shape_83.graphics
      .f("#333333")
      .s()
      .p(
        "Ag7AJIANhKIANAAIgNBIQgIAwAhAAQAIAAAIgDQAIgDAHgFQAIgFAGgHQAHgIAEgIIAOhRIANAAIgUBvQgBAGAGAAIgCALIgCAAIgCAAQgFAAgDgDQgEgDABgFIAEgTQgMAPgQAJQgQAJgRAAQgqAAAKg5g"
      );
    this.shape_83.setTransform(-113.6721, -27.575);

    this.shape_84 = new cjs.Shape();
    this.shape_84.graphics
      .f("#333333")
      .s()
      .p(
        "AgkA+QgMgFgJgKIAIgJQAJAKAKAEQALAFANAAQAQAAAMgHQAMgHACgNQABgGgCgEQgCgEgFgDQgEgDgIgCIgQgFIgTgEQgHgCgFgEQgEgDgDgFQgBgFABgIQACgJAFgHQAFgIAHgEQAIgFAJgCQAIgDAKAAQAPAAALAFQALAFAFAIIgIAHQgFgHgKgEQgKgEgLAAQgIAAgGACQgGABgFADQgGAEgDAFQgEAFgCAHQgBAFACAEQABADAEADQADACAHACIAOAEIAVAGQAJACAFAEQAGADACAGQADAFgCAJQgDARgPAKQgQALgWAAQgPAAgNgFg"
      );
    this.shape_84.setTransform(46.975, -57.675);

    this.shape_85 = new cjs.Shape();
    this.shape_85.graphics
      .f("#333333")
      .s()
      .p(
        "AgjA9QgLgFgHgJQgHgJgDgNQgDgMADgNQACgNAHgMQAHgMAKgJQALgJAMgGQANgFAMAAQAOAAALAGQALAFAHAJQAHAJADAMQACAMgCANIgBACIAAADIhyAAQgBALADAJQACAKAGAHQAGAHAIAEQAJAEAKAAQAHAAAFgCQAHgCAGgDQAHgDAFgFIAJgKIAKADQgEAHgGAGQgHAGgIAEQgHAEgJACQgJADgJAAQgNAAgLgGgAgJg0QgKAEgIAHQgIAHgGAJQgGAKgDALIBmAAQACgMgDgJQgDgJgFgHQgGgHgJgEQgIgEgKAAQgKAAgJAEg"
      );
    this.shape_85.setTransform(34.0057, -57.675);

    this.shape_86 = new cjs.Shape();
    this.shape_86.graphics
      .f("#333333")
      .s()
      .p(
        "AgSBWQgDgCgDgDQgEgDgBgEQgBgEABgGIARhgIgSAAIABgKIASAAIAIgsIAMAAIgIAsIAfAAIgCAKIgeAAIgQBdQgBAHAEAEQAFAEAGAAQAGAAAHgDIAHgDIACAKIgEABIgGADIgIACIgKABQgFAAgFgBg"
      );
    this.shape_86.setTransform(23.3, -59.825);

    this.shape_87 = new cjs.Shape();
    this.shape_87.graphics
      .f("#333333")
      .s()
      .p(
        "AglBAQgIgDgFgGQgEgFgCgHQgCgIABgIQACgJAFgGQAFgHAIgFQAIgFALgCQALgDALAAQAKAAAKACQALABAIAEIACgNQADgSgIgLQgJgLgSAAQgKAAgKAEQgMAEgMAIIgDgJQAcgRAVAAQAYAAALAOQAMANgFAYIgLA+QgBAGAGAAIgCALIgDABIgCAAQgFAAgDgEQgCgDAAgFIACgKQgLALgPAHQgPAGgQAAQgJAAgHgDgAgOAAQgJACgGADQgHAEgDAFQgEAGgCAGQgBAHACAFQABAGAEAEQAEAEAFACQAHADAHAAQAOAAAMgGQANgFAJgJQAEgFABgFIAEgXQgIgDgKgBQgJgCgLAAQgIAAgJACg"
      );
    this.shape_87.setTransform(11.3811, -57.675);

    this.shape_88 = new cjs.Shape();
    this.shape_88.graphics
      .f("#333333")
      .s()
      .p(
        "ABMBCIAMhHQAFgZgGgLQgFgMgQAAQgIAAgIADQgIADgHAFQgHAFgFAIQgGAHgEAJIgNBPIgNAAIANhHQADgZgEgLQgGgMgQAAQgIAAgIADQgHADgHAFQgHAFgGAIQgGAHgEAJIgOBPIgNAAIAXiBIAMAAIgFAgQAKgQAPgJQAOgIAQgBQARAAAIAKQAIAKgBAQQAZgkAhAAQAVABAHAPQAGAOgFAbIgNBKg"
      );
    this.shape_88.setTransform(-6.5913, -57.8);

    this.shape_89 = new cjs.Shape();
    this.shape_89.graphics.f("#333333").s().p("AgVBbIAViBIANAAIgWCBgAAGhDIAEgXIAMAAIgEAXg");
    this.shape_89.setTransform(-19.925, -60.3);

    this.shape_90 = new cjs.Shape();
    this.shape_90.graphics
      .f("#333333")
      .s()
      .p(
        "AAhBCIANhHQAEgagFgKQgFgMgQAAQgIAAgJADQgHADgIAGQgIAFgHAHQgGAIgFAIIgOBPIgMAAIAWiBIAMAAIgFAgQAFgIAHgGQAHgGAIgFQAIgEAIgCQAJgCAJgBQAVAAAGAPQAHAPgFAbIgNBKg"
      );
    this.shape_90.setTransform(-30.4913, -57.8);

    this.shape_91 = new cjs.Shape();
    this.shape_91.graphics
      .f("#333333")
      .s()
      .p(
        "AglBAQgIgDgFgGQgEgFgCgHQgCgIABgIQACgJAFgGQAFgHAIgFQAIgFALgCQALgDALAAQAKAAAKACQALABAIAEIACgNQADgSgIgLQgJgLgSAAQgKAAgKAEQgMAEgMAIIgDgJQAcgRAVAAQAYAAALAOQAMANgFAYIgLA+QgBAGAGAAIgCALIgDABIgCAAQgFAAgDgEQgCgDAAgFIACgKQgLALgPAHQgPAGgQAAQgJAAgHgDgAgOAAQgJACgGADQgHAEgDAFQgEAGgCAGQgBAHACAFQABAGAEAEQAEAEAFACQAHADAHAAQAOAAAMgGQANgFAJgJQAEgFABgFIAEgXQgIgDgKgBQgJgCgLAAQgIAAgJACg"
      );
    this.shape_91.setTransform(-44.7189, -57.675);

    this.shape_92 = new cjs.Shape();
    this.shape_92.graphics.f("#333333").s().p("AAHBBIgRhEIgpBEIgKAAIgiiBIALAAIAeBzIAng/IgNgzIALAAIALAqIAXgqIAMAAIgfAzIAQA/IBGhzIAMAAIhPCBg");
    this.shape_92.setTransform(-65.7, -57.7);

    this.shape_93 = new cjs.Shape();
    this.shape_93.graphics
      .f("#333333")
      .s()
      .p(
        "AgjA9QgLgFgHgJQgHgJgCgMQgDgNACgNQACgNAIgMQAHgMAKgJQAKgJAMgFQANgGANAAQANAAALAGQAKAFAIAJQAHAJADAMQACAMgCANQgCANgHANQgIAMgKAJQgKAJgNAFQgMAGgNAAQgOAAgKgGgAgKgyQgKAEgIAIQgIAIgGAKQgHAKgCALQgCALADAKQACAKAGAHQAFAIAJAEQAIAFALAAQAJAAALgFQAKgEAIgIQAJgHAFgKQAGgKACgMQACgLgCgKQgCgKgGgHQgGgIgIgEQgJgFgKAAQgKAAgKAFg"
      );
    this.shape_93.setTransform(-83.9124, -57.675);

    this.shape_94 = new cjs.Shape();
    this.shape_94.graphics.f("#333333").s().p("AgqBBIAXiAIAMAAIgGAgQAKgOAMgIQANgJAMgBIAFgBIAEAAIgDAMQgSABgOAJQgPAKgIARIgOBQg");
    this.shape_94.setTransform(-94.2, -57.725);

    this.shape_95 = new cjs.Shape();
    this.shape_95.graphics.f("#333333").s().p("AgqBBIAXiAIAMAAIgGAgQAKgOAMgIQANgJAMgBIAFgBIAEAAIgDAMQgSABgOAJQgPAKgIARIgOBQg");
    this.shape_95.setTransform(-102.75, -57.725);

    this.shape_96 = new cjs.Shape();
    this.shape_96.graphics
      .f("#333333")
      .s()
      .p(
        "AglBAQgIgDgFgGQgEgFgCgHQgCgIABgIQACgJAFgGQAFgHAIgFQAIgFALgCQALgDALAAQAKAAAKACQALABAIAEIACgNQADgSgIgLQgJgLgSAAQgKAAgKAEQgMAEgMAIIgDgJQAcgRAVAAQAYAAALAOQAMANgFAYIgLA+QgBAGAGAAIgCALIgDABIgCAAQgFAAgDgEQgCgDAAgFIACgKQgLALgPAHQgPAGgQAAQgJAAgHgDgAgOAAQgJACgGADQgHAEgDAFQgEAGgCAGQgBAHACAFQABAGAEAEQAEAEAFACQAHADAHAAQAOAAAMgGQANgFAJgJQAEgFABgFIAEgXQgIgDgKgBQgJgCgLAAQgIAAgJACg"
      );
    this.shape_96.setTransform(-115.1189, -57.675);

    this.shape_97 = new cjs.Shape();
    this.shape_97.graphics
      .f("#333333")
      .s()
      .p(
        "AgsBWQgLgFgHgKQgGgJgDgMQgCgMACgNQACgNAHgMQAHgMAJgJQAKgJAMgFQAMgGAMAAQAIAAAIADQAHACAGAEQAGAEAEAGQAEAFADAGIAOhQIANAAIgdCjQgBAGAFAAIgCALIgDABIgCAAQgFAAgDgEQgCgEAAgEIADgPQgKANgPAIQgOAIgPAAQgNAAgLgGgAgTgZQgLAFgIAIQgIAIgFAJQgFAKgCAKQgCAMACAJQADAKAFAIQAGAIAJAEQAIAFALAAQAHAAAJgDQAHgDAIgFIANgLQAGgGABgHIAIgqQgBgGgEgHIgKgLQgGgEgHgDQgHgDgHAAQgLAAgJAFg"
      );
    this.shape_97.setTransform(106.6125, -90.175);

    this.shape_98 = new cjs.Shape();
    this.shape_98.graphics
      .f("#333333")
      .s()
      .p(
        "AgjA9QgLgFgHgJQgHgJgDgNQgDgMADgNQACgNAHgMQAHgMAKgJQALgJAMgGQANgFAMAAQAOAAALAGQALAFAHAJQAHAJADAMQACAMgCANIgBACIAAADIhyAAQgBALADAJQACAKAGAHQAGAHAIAEQAJAEAKAAQAHAAAFgCQAHgCAGgDQAHgDAFgFIAJgKIAKADQgEAHgGAGQgHAGgIAEQgHAEgJACQgJADgJAAQgNAAgLgGgAgJg0QgKAEgIAHQgIAHgGAJQgGAKgDALIBmAAQACgMgDgJQgDgJgFgHQgGgHgJgEQgIgEgKAAQgKAAgJAEg"
      );
    this.shape_98.setTransform(91.2057, -87.675);

    this.shape_99 = new cjs.Shape();
    this.shape_99.graphics
      .f("#333333")
      .s()
      .p(
        "AgRBWQgEgCgEgDQgDgDgBgEQgBgEABgGIARhgIgTAAIACgKIATAAIAIgsIALAAIgIAsIAeAAIgBAKIgeAAIgQBdQgCAHAFAEQAFAEAGAAQAHAAAFgDIAIgDIACAKIgDABIgHADIgJACIgJABQgFAAgEgBg"
      );
    this.shape_99.setTransform(80.5, -89.825);

    this.shape_100 = new cjs.Shape();
    this.shape_100.graphics
      .f("#333333")
      .s()
      .p(
        "AglBAQgIgDgFgGQgEgFgCgHQgCgIABgIQACgJAFgGQAFgHAIgFQAIgFALgCQALgDALAAQAKAAAKACQALABAIAEIACgNQADgSgIgLQgJgLgSAAQgKAAgKAEQgMAEgMAIIgDgJQAcgRAVAAQAYAAALAOQAMANgFAYIgLA+QgBAGAGAAIgCALIgDABIgCAAQgFAAgDgEQgCgDAAgFIACgKQgLALgPAHQgPAGgQAAQgJAAgHgDgAgOAAQgJACgGADQgHAEgDAFQgEAGgCAGQgBAHACAFQABAGAEAEQAEAEAFACQAHADAHAAQAOAAAMgGQANgFAJgJQAEgFABgFIAEgXQgIgDgKgBQgJgCgLAAQgIAAgJACg"
      );
    this.shape_100.setTransform(68.5811, -87.675);

    this.shape_101 = new cjs.Shape();
    this.shape_101.graphics.f("#333333").s().p("AgQBVQgFgGACgLIAbieIANAAIgbCaQgBAHADAFQAEAEAGAAIAHgBIAHgCIABAKIgLADIgKABQgLAAgFgGg");
    this.shape_101.setTransform(59.2483, -90.225);

    this.shape_102 = new cjs.Shape();
    this.shape_102.graphics
      .f("#333333")
      .s()
      .p(
        "AgjA9QgLgFgHgJQgHgJgDgNQgDgMADgNQACgNAHgMQAHgMAKgJQALgJAMgGQANgFAMAAQAOAAALAGQALAFAHAJQAHAJADAMQACAMgCANIgBACIAAADIhyAAQgBALADAJQACAKAGAHQAGAHAIAEQAJAEAKAAQAHAAAFgCQAHgCAGgDQAHgDAFgFIAJgKIAKADQgEAHgGAGQgHAGgIAEQgHAEgJACQgJADgJAAQgNAAgLgGgAgJg0QgKAEgIAHQgIAHgGAJQgGAKgDALIBmAAQACgMgDgJQgDgJgFgHQgGgHgJgEQgIgEgKAAQgKAAgJAEg"
      );
    this.shape_102.setTransform(48.7057, -87.675);

    this.shape_103 = new cjs.Shape();
    this.shape_103.graphics.f("#333333").s().p("AgqBBIAXiAIAMAAIgGAgQAKgOAMgIQAMgJANgBIAFgBIAEAAIgDAMQgRABgPAJQgPAKgIARIgOBQg");
    this.shape_103.setTransform(37.75, -87.725);

    this.shape_104 = new cjs.Shape();
    this.shape_104.graphics
      .f("#333333")
      .s()
      .p(
        "AgjA9QgLgFgHgJQgHgJgDgNQgDgMADgNQACgNAHgMQAHgMAKgJQALgJAMgGQANgFAMAAQAOAAALAGQALAFAHAJQAHAJADAMQACAMgCANIgBACIAAADIhyAAQgBALADAJQACAKAGAHQAGAHAIAEQAJAEAKAAQAHAAAFgCQAHgCAGgDQAHgDAFgFIAJgKIAKADQgEAHgGAGQgHAGgIAEQgHAEgJACQgJADgJAAQgNAAgLgGgAgJg0QgKAEgIAHQgIAHgGAJQgGAKgDALIBmAAQACgMgDgJQgDgJgFgHQgGgHgJgEQgIgEgKAAQgKAAgJAEg"
      );
    this.shape_104.setTransform(19.0557, -87.675);

    this.shape_105 = new cjs.Shape();
    this.shape_105.graphics
      .f("#333333")
      .s()
      .p("AAiBaIAMhIQAJgughAAQgIAAgIADQgHADgIAFQgHAGgGAHQgHAHgEAIIgOBPIgNAAIAgi0IANAAIgPBTQALgPAQgIQAOgJARAAQALAAAHADQAHAEAEAIQADAHABALQABAKgDAMIgNBKg");
    this.shape_105.setTransform(4.0893, -90.3);

    this.shape_106 = new cjs.Shape();
    this.shape_106.graphics
      .f("#333333")
      .s()
      .p(
        "AgSBWQgDgCgEgDQgCgDgCgEQgBgEABgGIARhgIgSAAIABgKIASAAIAJgsIALAAIgIAsIAfAAIgCAKIgeAAIgQBdQgBAHAEAEQAFAEAGAAQAHAAAFgDIAIgDIACAKIgEABIgGADIgJACIgJABQgFAAgFgBg"
      );
    this.shape_106.setTransform(-6.05, -89.825);

    this.shape_107 = new cjs.Shape();
    this.shape_107.graphics
      .f("#333333")
      .s()
      .p(
        "AAhBBIANhHQAEgZgFgLQgFgLgQAAQgIAAgJADQgHADgIAFQgIAGgHAHQgGAIgFAIIgOBOIgMAAIAWh/IAMAAIgFAeQAFgHAHgGQAHgGAIgEQAIgFAIgCQAJgCAJAAQAVAAAGAOQAHAPgFAbIgNBJg"
      );
    this.shape_107.setTransform(-24.7913, -87.8);

    this.shape_108 = new cjs.Shape();
    this.shape_108.graphics
      .f("#333333")
      .s()
      .p(
        "AgjA9QgLgFgHgJQgHgJgCgMQgDgNACgNQACgNAIgMQAHgMAKgJQAKgJAMgFQANgGANAAQANAAALAGQAKAFAIAJQAHAJADAMQACAMgCANQgCANgHANQgIAMgKAJQgKAJgNAFQgMAGgNAAQgOAAgKgGgAgKgyQgKAEgIAIQgIAIgGAKQgHAKgCALQgCALADAKQACAKAGAHQAFAIAJAEQAIAFALAAQAJAAALgFQAKgEAIgIQAJgHAFgKQAGgKACgMQACgLgCgKQgCgKgGgHQgGgIgIgEQgJgFgKAAQgKAAgKAFg"
      );
    this.shape_108.setTransform(-39.1124, -87.675);

    this.shape_109 = new cjs.Shape();
    this.shape_109.graphics.f("#333333").s().p("AgVBaIAVh/IANAAIgWB/gAAGhCIAEgYIAMAAIgEAYg");
    this.shape_109.setTransform(-48.725, -90.3);

    this.shape_110 = new cjs.Shape();
    this.shape_110.graphics
      .f("#333333")
      .s()
      .p(
        "AgSBWQgDgCgDgDQgEgDgBgEQgBgEABgGIARhgIgSAAIABgKIASAAIAIgsIAMAAIgIAsIAfAAIgCAKIgeAAIgQBdQgBAHAEAEQAFAEAGAAQAGAAAHgDIAHgDIACAKIgEABIgGADIgIACIgKABQgFAAgFgBg"
      );
    this.shape_110.setTransform(-55, -89.825);

    this.shape_111 = new cjs.Shape();
    this.shape_111.graphics
      .f("#333333")
      .s()
      .p(
        "AggA9QgLgFgHgJQgHgJgCgNQgDgMACgNQADgNAHgMQAGgNAKgIQALgJAMgGQAMgFAOAAQASAAAMAIQANAIAEAOIgNAEQgEgLgKgGQgJgGgNAAQgLAAgJAFQgKAEgIAHQgJAIgFAKQgGAKgCALQgCALACAKQADALAFAHQAGAIAIAEQAJAFAKAAQAGAAAHgCQAHgCAHgEQAGgDAFgEQAFgEACgFIALADQgDAHgGAGQgGAGgIAEQgIAEgJACQgJADgIAAQgOAAgLgGg"
      );
    this.shape_111.setTransform(-66.3318, -87.675);

    this.shape_112 = new cjs.Shape();
    this.shape_112.graphics
      .f("#333333")
      .s()
      .p(
        "AgjA9QgLgFgHgJQgHgJgDgNQgDgMADgNQACgNAHgMQAHgMAKgJQALgJAMgGQANgFAMAAQAOAAALAGQALAFAHAJQAHAJADAMQACAMgCANIgBACIAAADIhyAAQgBALADAJQACAKAGAHQAGAHAIAEQAJAEAKAAQAHAAAFgCQAHgCAGgDQAHgDAFgFIAJgKIAKADQgEAHgGAGQgHAGgIAEQgHAEgJACQgJADgJAAQgNAAgLgGgAgJg0QgKAEgIAHQgIAHgGAJQgGAKgDALIBmAAQACgMgDgJQgDgJgFgHQgGgHgJgEQgIgEgKAAQgKAAgJAEg"
      );
    this.shape_112.setTransform(-80.6443, -87.675);

    this.shape_113 = new cjs.Shape();
    this.shape_113.graphics.f("#333333").s().p("AgQBVQgFgGACgLIAbieIANAAIgbCaQgBAHADAFQAEAEAGAAIAHgBIAHgCIABAKIgLADIgKABQgLAAgFgGg");
    this.shape_113.setTransform(-91.2517, -90.225);

    this.shape_114 = new cjs.Shape();
    this.shape_114.graphics
      .f("#333333")
      .s()
      .p(
        "AgjA9QgLgFgHgJQgHgJgDgNQgDgMADgNQACgNAHgMQAHgMAKgJQALgJAMgGQANgFAMAAQAOAAALAGQALAFAHAJQAHAJADAMQACAMgCANIgBACIAAADIhyAAQgBALADAJQACAKAGAHQAGAHAIAEQAJAEAKAAQAHAAAFgCQAHgCAGgDQAHgDAFgFIAJgKIAKADQgEAHgGAGQgHAGgIAEQgHAEgJACQgJADgJAAQgNAAgLgGgAgJg0QgKAEgIAHQgIAHgGAJQgGAKgDALIBmAAQACgMgDgJQgDgJgFgHQgGgHgJgEQgIgEgKAAQgKAAgJAEg"
      );
    this.shape_114.setTransform(-101.7943, -87.675);

    this.shape_115 = new cjs.Shape();
    this.shape_115.graphics
      .f("#333333")
      .s()
      .p(
        "AgkA+QgMgFgJgKIAIgJQAJAKAKAEQALAFANAAQAQAAAMgHQAMgHACgNQABgGgCgEQgCgEgFgDQgEgDgIgCIgQgFIgTgEQgHgCgFgEQgEgDgDgFQgBgFABgIQACgJAFgHQAFgIAHgEQAIgFAJgCQAIgDAKAAQAPAAALAFQALAFAFAIIgIAHQgFgHgKgEQgKgEgLAAQgIAAgGACQgGABgFADQgGAEgDAFQgEAFgCAHQgBAFACAEQABADAEADQADACAHACIAOAEIAVAGQAJACAFAEQAGADACAGQADAFgCAJQgDARgPAKQgQALgWAAQgPAAgNgFg"
      );
    this.shape_115.setTransform(-115.525, -87.675);

    this.shape_116 = new cjs.Shape();
    this.shape_116.graphics
      .f("#333333")
      .s()
      .p(
        "AglBAQgIgDgFgGQgEgFgCgHQgCgIABgIQACgJAFgGQAFgHAIgFQAIgFALgCQALgDALAAQAKAAAKACQALABAIAEIACgNQADgSgIgLQgJgLgSAAQgKAAgKAEQgMAEgMAIIgDgJQAcgRAVAAQAYAAALAOQAMANgFAYIgLA+QgBAGAGAAIgCALIgDABIgCAAQgFAAgDgEQgCgDAAgFIACgKQgLALgPAHQgPAGgQAAQgJAAgHgDgAgOAAQgJACgGADQgHAEgDAFQgEAGgCAGQgBAHACAFQABAGAEAEQAEAEAFACQAHADAHAAQAOAAAMgGQANgFAJgJQAEgFABgFIAEgXQgIgDgKgBQgJgCgLAAQgIAAgJACg"
      );
    this.shape_116.setTransform(46.0311, -117.675);

    this.shape_117 = new cjs.Shape();
    this.shape_117.graphics
      .f("#333333")
      .s()
      .p(
        "AgnBbQgKgCgFgEQgGgEgFgGQgEgFgDgHIAJgFQAGANAMAGQAMAGAPAAQAKAAAIgDQAKgDAIgFQAIgFAFgIQAEgIACgLIAGgcQgKANgPAHQgPAIgNAAQgOAAgLgGQgKgFgGgKQgHgJgDgLQgCgMACgMQADgOAGgMQAHgMAKgJQAJgJAMgGQANgFAMAAQARAAALAIQALAJAHANIAFgcIALAAIgWCCQgCANgHAKQgHAKgKAHQgJAGgNAEQgKADgMAAQgMAAgIgCgAgJhMQgLAFgIAIQgIAIgFAKQgFAKgBAKQgCALACAKQACAJAGAHQAFAIAJAFQAJAEAKAAQAIAAAIgDQAIgDAIgFQAIgFAEgGQAGgGABgGIAIgqQgBgHgFgHQgDgGgGgEQgGgFgGgDQgIgCgHAAQgLAAgJAFg"
      );
    this.shape_117.setTransform(25.25, -115.025);

    this.shape_118 = new cjs.Shape();
    this.shape_118.graphics
      .f("#333333")
      .s()
      .p(
        "AAhBCIANhHQAEgZgFgLQgFgMgQAAQgIAAgJADQgHADgIAGQgIAEgHAIQgGAHgFAJIgOBPIgMAAIAWiAIAMAAIgFAeQAFgHAHgGQAHgGAIgFQAIgEAIgCQAJgDAJAAQAVAAAGAPQAHAPgFAcIgNBJg"
      );
    this.shape_118.setTransform(10.5087, -117.8);

    this.shape_119 = new cjs.Shape();
    this.shape_119.graphics.f("#333333").s().p("AgVBbIAViAIANAAIgWCAgAAGhDIAEgWIAMAAIgEAWg");
    this.shape_119.setTransform(1.475, -120.3);

    this.shape_120 = new cjs.Shape();
    this.shape_120.graphics.f("#333333").s().p("AAeBbIgmhGIgkAcIgHAqIgNAAIAhi0IAMAAIgWB9IBbhJIAOAAIg/AzIArBNg");
    this.shape_120.setTransform(-7.4, -120.3);

    this.shape_121 = new cjs.Shape();
    this.shape_121.graphics
      .f("#333333")
      .s()
      .p(
        "AglBAQgIgDgFgGQgEgFgCgHQgCgIABgIQACgJAFgGQAFgHAIgFQAIgFALgCQALgDALAAQAKAAAKACQALABAIAEIACgNQADgSgIgLQgJgLgSAAQgKAAgKAEQgMAEgMAIIgDgJQAcgRAVAAQAYAAALAOQAMANgFAYIgLA+QgBAGAGAAIgCALIgDABIgCAAQgFAAgDgEQgCgDAAgFIACgKQgLALgPAHQgPAGgQAAQgJAAgHgDgAgOAAQgJACgGADQgHAEgDAFQgEAGgCAGQgBAHACAFQABAGAEAEQAEAEAFACQAHADAHAAQAOAAAMgGQANgFAJgJQAEgFABgFIAEgXQgIgDgKgBQgJgCgLAAQgIAAgJACg"
      );
    this.shape_121.setTransform(-21.9689, -117.675);

    this.shape_122 = new cjs.Shape();
    this.shape_122.graphics
      .f("#333333")
      .s()
      .p(
        "ABMBCIAMhHQAFgZgGgLQgFgMgQAAQgIAAgIADQgIADgHAFQgHAGgFAGQgGAIgEAJIgNBPIgNAAIANhHQADgZgEgLQgGgMgQAAQgIAAgIADQgHADgHAFQgHAFgGAHQgGAIgEAJIgOBPIgNAAIAXiAIAMAAIgFAeQAKgPAPgJQAOgJAQAAQARAAAIAKQAIAKgBAPQAZgiAhgBQAVAAAHAPQAGAQgFAbIgNBJg"
      );
    this.shape_122.setTransform(-39.9913, -117.8);

    this.shape_123 = new cjs.Shape();
    this.shape_123.graphics
      .f("#333333")
      .s()
      .p(
        "AAhBCIANhHQAEgZgFgLQgFgMgQAAQgIAAgJADQgHADgIAGQgIAEgHAIQgGAHgFAJIgOBPIgMAAIAWiAIAMAAIgFAeQAFgHAHgGQAHgGAIgFQAIgEAIgCQAJgDAJAAQAVAAAGAPQAHAPgFAcIgNBJg"
      );
    this.shape_123.setTransform(-65.1413, -117.8);

    this.shape_124 = new cjs.Shape();
    this.shape_124.graphics
      .f("#333333")
      .s()
      .p(
        "AgjA9QgLgFgHgJQgHgJgCgMQgDgNACgNQACgNAIgMQAHgMAKgJQAKgJAMgFQANgGANAAQANAAALAGQAKAFAIAJQAHAJADAMQACAMgCANQgCANgHANQgIAMgKAJQgKAJgNAFQgMAGgNAAQgOAAgKgGgAgKgyQgKAEgIAIQgIAIgGAKQgHAKgCALQgCALADAKQACAKAGAHQAFAIAJAEQAIAFALAAQAJAAALgFQAKgEAIgIQAJgHAFgKQAGgKACgMQACgLgCgKQgCgKgGgHQgGgIgIgEQgJgFgKAAQgKAAgKAFg"
      );
    this.shape_124.setTransform(-79.4624, -117.675);

    this.shape_125 = new cjs.Shape();
    this.shape_125.graphics
      .f("#333333")
      .s()
      .p(
        "AhIBcIAgi1IAMAAIgFAaQALgMAOgIQAOgIAPAAQAOAAAKAGQALAGAHAJQAGAJACAMQADAMgCANQgCANgHAMQgGAMgKAJQgJAJgMAFQgMAGgOAAQgQAAgLgJQgMgJgGgMIgOBQgAABhNQgHADgHAFQgIAFgGAGQgGAGgCAHIgHAqQACAHAEAGQAEAGAGAFQAFAEAHADQAGADAIAAQALAAAKgFQAKgFAIgIQAIgHAFgJQAFgKACgLQACgLgCgKQgCgKgGgIQgGgHgJgFQgJgFgLAAQgGAAgJADg"
      );
    this.shape_125.setTransform(-95.11, -115.175);

    this.shape_126 = new cjs.Shape();
    this.shape_126.graphics
      .f("#333333")
      .s()
      .p(
        "Ag4BRQgMgIgHgMQgGgMgBgQQgBgQADgRIAPhYIANAAIgPBYQgDAOABAOQAAAOAFALQAFALALAGQALAHASAAQASAAAMgHQANgHAJgKQAJgLAFgOQAFgOADgOIAPhYIANAAIgPBYQgDARgHARQgHAQgLAMQgLAMgPAHQgOAIgVgBQgVAAgOgHg"
      );
    this.shape_126.setTransform(-110.6875, -120);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_126 },
            { t: this.shape_125 },
            { t: this.shape_124 },
            { t: this.shape_123 },
            { t: this.shape_122 },
            { t: this.shape_121 },
            { t: this.shape_120 },
            { t: this.shape_119 },
            { t: this.shape_118 },
            { t: this.shape_117 },
            { t: this.shape_116 },
            { t: this.shape_115 },
            { t: this.shape_114 },
            { t: this.shape_113 },
            { t: this.shape_112 },
            { t: this.shape_111 },
            { t: this.shape_110 },
            { t: this.shape_109 },
            { t: this.shape_108 },
            { t: this.shape_107 },
            { t: this.shape_106 },
            { t: this.shape_105 },
            { t: this.shape_104 },
            { t: this.shape_103 },
            { t: this.shape_102 },
            { t: this.shape_101 },
            { t: this.shape_100 },
            { t: this.shape_99 },
            { t: this.shape_98 },
            { t: this.shape_97 },
            { t: this.shape_96 },
            { t: this.shape_95 },
            { t: this.shape_94 },
            { t: this.shape_93 },
            { t: this.shape_92 },
            { t: this.shape_91 },
            { t: this.shape_90 },
            { t: this.shape_89 },
            { t: this.shape_88 },
            { t: this.shape_87 },
            { t: this.shape_86 },
            { t: this.shape_85 },
            { t: this.shape_84 },
            { t: this.shape_83 },
            { t: this.shape_82 },
            { t: this.shape_81 },
            { t: this.shape_80 },
            { t: this.shape_79 },
            { t: this.shape_78 },
            { t: this.shape_77 },
            { t: this.shape_76 },
            { t: this.shape_75 },
            { t: this.shape_74 },
            { t: this.shape_73 },
            { t: this.shape_72 },
            { t: this.shape_71 },
            { t: this.shape_70 },
            { t: this.shape_69 },
            { t: this.shape_68 },
            { t: this.shape_67 },
            { t: this.shape_66 },
            { t: this.shape_65 },
            { t: this.shape_64 },
            { t: this.shape_63 },
            { t: this.shape_62 },
            { t: this.shape_61 },
            { t: this.shape_60 },
            { t: this.shape_59 },
            { t: this.shape_58 },
            { t: this.shape_57 },
            { t: this.shape_56 },
            { t: this.shape_55 },
            { t: this.shape_54 },
            { t: this.shape_53 },
            { t: this.shape_52 },
            { t: this.shape_51 },
            { t: this.shape_50 },
            { t: this.shape_49 },
            { t: this.shape_48 },
            { t: this.shape_47 },
            { t: this.shape_46 },
            { t: this.shape_45 },
            { t: this.shape_44 },
            { t: this.shape_43 },
            { t: this.shape_42 },
            { t: this.shape_41 },
            { t: this.shape_40 },
            { t: this.shape_39 },
            { t: this.shape_38 },
            { t: this.shape_37 },
            { t: this.shape_36 },
            { t: this.shape_35 },
            { t: this.shape_34 },
            { t: this.shape_33 },
            { t: this.shape_32 },
            { t: this.shape_31 },
            { t: this.shape_30 },
            { t: this.shape_29 },
            { t: this.shape_28 },
            { t: this.shape_27 },
            { t: this.shape_26 },
            { t: this.shape_25 },
            { t: this.shape_24 },
            { t: this.shape_23 },
            { t: this.shape_22 },
            { t: this.shape_21 },
            { t: this.shape_20 },
            { t: this.shape_19 },
            { t: this.shape_18 },
            { t: this.shape_17 },
            { t: this.shape_16 },
            { t: this.shape_15 },
            { t: this.shape_14 },
            { t: this.shape_13 },
            { t: this.shape_12 },
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-125.8, -136.5, 251.7, 273);

  (lib.Tween14 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#333333")
      .s()
      .p(
        "AggBLQgOgIgKgKQgLgMgFgOQgGgPAAgQQAAgPAGgPQAFgPALgLQAKgLAOgHQAQgGAQAAQARAAAPAGQAPAHAKALQAKALAGAPQAGAPAAAPQAAAQgGAPQgGAOgKAMQgLAKgOAIQgPAGgRAAQgRAAgPgGgAgTg1QgKAFgHAIQgHAIgEALQgEAKAAALQAAANAEAKQAEAKAHAIQAHAIAKAEQAJAFAKAAQALAAAJgFQAJgEAHgIQAIgHAEgLQAEgLAAgMQAAgLgEgLQgEgKgIgIQgHgJgJgEQgJgEgLAAQgKAAgJAEg"
      );
    this.shape.setTransform(267.35, 26);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#333333")
      .s()
      .p(
        "AgkBpQgOgIgKgKQgJgMgGgOQgGgPAAgQQAAgQAGgOQAFgPAJgMQAKgLANgGQANgGAPAAQASAAAPAJQAPAKAJAOIAAhdIAaAAIAAC5QAAAKAJAAIAAAXIgHABIgFAAQgIAAgGgFQgGgFAAgIIAAgMQgJAPgPAIQgQAJgQAAQgQAAgOgGgAgXgXQgKAFgGAJQgHAIgEAKQgDAKAAALQAAAMAEALQAEALAHAHQAHAIAKAEQAKAFALAAQAHAAAHgCQAIgDAHgFQAGgFAFgHQAFgGACgHIAAgtQgDgIgFgFQgGgHgHgFQgGgFgIgDQgHgCgHAAQgMAAgJAEg"
      );
    this.shape_1.setTransform(248.775, 23);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#333333")
      .s()
      .p(
        "AgkBpQgOgIgKgKQgJgMgGgOQgGgPAAgQQAAgQAGgOQAFgPAJgMQAKgLANgGQANgGAPAAQASAAAPAJQAPAKAJAOIAAhdIAaAAIAAC5QAAAKAJAAIAAAXIgHABIgFAAQgIAAgGgFQgGgFAAgIIAAgMQgJAPgPAIQgQAJgQAAQgQAAgOgGgAgXgXQgKAFgGAJQgHAIgEAKQgDAKAAALQAAAMAEALQAEALAHAHQAHAIAKAEQAKAFALAAQAHAAAHgCQAIgDAHgFQAGgFAFgHQAFgGACgHIAAgtQgDgIgFgFQgGgHgHgFQgGgFgIgDQgHgCgHAAQgMAAgJAEg"
      );
    this.shape_2.setTransform(222.375, 23);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#333333")
      .s()
      .p(
        "AgfBLQgPgHgKgLQgKgLgHgPQgFgPAAgQQAAgQAFgOQAHgPAKgMQALgLAOgGQAPgGARAAQASAAAOAGQAPAHAKALQAKALAGAPQAFAOAAAPIAAAGIgBADIiAAAQABANAEAJQAEAJAIAIQAHAGAJAFQAKADAJAAIANgBIAOgGQAFgDAFgFQAFgFACgGIAXAGQgEAJgHAIQgGAGgKAGQgIAFgLADQgLADgLAAQgRAAgPgGgAA3gKQgCgLgFgJQgEgKgHgHQgHgGgJgEQgKgDgKAAQgKAAgJADQgJAEgHAHQgHAHgFAJQgEAJgBALIBqAAIAAAAg"
      );
    this.shape_3.setTransform(204.4, 26);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#333333")
      .s()
      .p(
        "AghBLQgSgFgOgMIAMgRQANAKAOAGQAOAEAPAAQARABAKgIQAKgGAAgNQAAgFgDgEQgDgEgFgDIgOgFIgSgGIgZgGQgKgDgHgEQgGgFgDgGQgDgHAAgIQAAgMAEgKQAGgIAIgHQAHgGAMgDQALgDALAAQASAAAPAFQAPAGAKAKIgLAPQgKgIgNgFQgMgEgNAAQgNAAgKAGQgKAGAAANQAAAGACADQACAEAFADIALAFIAQAEIAbAIQAMADAHAFQAIAFADAGQAEAIABAJQAAAWgRANQgSANgcAAQgSAAgSgGg"
      );
    this.shape_4.setTransform(187.9, 26);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#333333").s().p("AgIAdIAGgbIgJAAIAAgeIAYAAIAAAeIgJAbg");
    this.shape_5.setTransform(169.9, 33.35);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#333333")
      .s()
      .p("AgOBhQgLgIAAgQIAAhpIgVAAIAAgUIAVAAIAAg0IAZAAIAAA0IAjAAIAAAUIgjAAIAABhQABAIAFAEQAFAEAHAAQAIAAAGgDIAJgEIAGAVIgGADIgJAEIgKACIgNABQgNAAgKgIg");
    this.shape_6.setTransform(161.675, 23.475);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f("#333333").s().p("AgNBuIAAicIAaAAIAACcgAgNhLIAAgiIAaAAIAAAig");
    this.shape_7.setTransform(152.75, 22.85);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f("#333333").s().p("AgWBmQgJgIAAgRIAAi7IAaAAIAACyQAAAIAFAGQADAEAJAAIAIAAIAIgDIAEAVIgPAFIgQACQgPAAgIgJg");
    this.shape_8.setTransform(146.175, 22.95);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#333333")
      .s()
      .p(
        "AgfBLQgOgHgLgLQgLgLgFgPQgGgPAAgQQAAgQAGgOQAFgPALgMQALgLAOgGQAPgGARAAQASAAAOAGQAOAHALALQAKALAGAPQAFAOAAAPIAAAGIgBADIiAAAQABANAEAJQAEAJAIAIQAHAGAJAFQAJADAKAAIANgBIAOgGQAFgDAFgFQAEgFADgGIAXAGQgEAJgHAIQgGAGgKAGQgIAFgLADQgLADgLAAQgRAAgPgGgAA3gKQgCgLgFgJQgEgKgHgHQgHgGgKgEQgJgDgKAAQgJAAgKADQgJAEgHAHQgHAHgEAJQgFAJgBALIBqAAIAAAAg"
      );
    this.shape_9.setTransform(132.05, 26);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#333333")
      .s()
      .p(
        "AgtBnQgRgIgLgQIAQgOQAJAOAPAGQAOAIARgBQAKAAAKgCQAKgEAHgFQAHgHAEgJQAFgIAAgNIAAgbQgFAGgGAGQgGAHgHADQgHAFgJACQgIACgHAAQgQAAgNgHQgOgHgJgKQgKgMgFgNQgFgPAAgPQAAgQAFgPQAFgPAKgMQAJgLAOgGQANgGAQAAQATAAAOAJQAPAKAKAOIAAgeIAXAAIAACZQAAARgGAMQgGANgLAJQgLAJgPAEQgOAFgQAAQgaAAgRgKgAgUhVQgJAGgHAIQgGAJgEAKQgEALAAAKQAAANAFAKQAEAKAHAHQAHAIAKAEQAKAFAKAAQAIAAAIgDQAIgDAHgFQAGgFAFgGQAEgGACgGIAAgtQgEgIgFgHQgFgGgHgFQgGgFgIgDQgHgCgIAAQgLAAgKAEg"
      );
    this.shape_10.setTransform(105.675, 29.2);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#333333")
      .s()
      .p(
        "AAqBQIAAhXQAAgagIgKQgHgMgQAAQgIAAgIADQgHADgHAGQgIAFgFAHQgGAIgCAJIAABeIgbAAIAAicIAYAAIAAAiQAKgRARgKQARgJAUAAQAOAAAJAEQAJAFAFAJQAFAJADAMQACAMAAAOIAABdg"
      );
    this.shape_11.setTransform(88.05, 25.85);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics.f("#333333").s().p("AgNBuIAAicIAaAAIAACcgAgNhLIAAgiIAaAAIAAAig");
    this.shape_12.setTransform(75.7, 22.85);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#333333")
      .s()
      .p(
        "AgZBLQgPgIgKgKQgLgMgGgOQgFgPAAgQQAAgQAFgPQAGgOAKgMQALgLAOgGQAPgGARAAQAXAAARAKQARALAJARIgaAIQgGgLgLgGQgKgHgOABQgJAAgKAEQgJAFgIAHQgGAIgEALQgEAKAAAMQAAALAEAMQAEALAHAHQAHAIAJAEQAKAFAKAAQAHAAAGgBIANgGIAJgIQAFgEABgFIAaAHQgDAJgHAIQgGAHgJAFQgJAFgKADQgLADgMAAQgQAAgPgGg"
      );
    this.shape_13.setTransform(64.075, 26);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics.f("#333333").s().p("AgNBuIAAicIAaAAIAACcgAgNhLIAAgiIAaAAIAAAig");
    this.shape_14.setTransform(52.2, 22.85);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#333333")
      .s()
      .p(
        "AghBLQgSgFgNgMIALgRQANAKAPAGQAOAEANAAQARABAKgIQALgGAAgNQAAgFgDgEQgDgEgFgDIgOgFIgTgGIgXgGQgLgDgGgEQgHgFgDgGQgDgHAAgIQAAgMAFgKQAFgIAHgHQAJgGAKgDQAMgDALAAQARAAAQAFQAPAGALAKIgNAPQgJgIgMgFQgMgEgOAAQgNAAgKAGQgKAGAAANQAAAGACADQACAEAEADIAMAFIAQAEIAbAIQALADAIAFQAIAFAEAGQADAIAAAJQAAAWgRANQgQANgdAAQgSAAgSgGg"
      );
    this.shape_15.setTransform(41.25, 26);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics.f("#333333").s().p("AgMBuIAAicIAaAAIAACcgAgMhLIAAgiIAaAAIAAAig");
    this.shape_16.setTransform(30.5, 22.85);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#333333")
      .s()
      .p(
        "AhMBwIAAjcIAXAAIAAAdQAJgOAQgJQAOgIARAAQAQAAAOAGQANAHALALQAJALAFAOQAHAQAAAPQgBARgFAOQgFAOgJALQgJALgOAHQgNAGgPABQgTAAgPgKQgOgKgIgPIAABggAgRhVQgIACgGAGQgHAEgGAHQgEAGgBAHIAAAtQACAHAGAHQAEAGAIAFQAGAFAHADQAIACAIAAQALAAAJgEQAKgFAGgJQAHgHADgKQAFgLAAgLQgBgMgEgKQgEgLgIgIQgHgHgJgFQgKgFgKAAQgIAAgHADg"
      );
    this.shape_17.setTransform(18.25, 29.05);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics.f("#333333").s().p("AgNBuIAAicIAaAAIAACcgAgNhLIAAgiIAaAAIAAAig");
    this.shape_18.setTransform(4.95, 22.85);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f("#333333")
      .s()
      .p(
        "AgkBpQgOgIgKgKQgJgMgGgOQgGgPAAgQQAAgQAGgOQAFgPAJgMQAKgLANgGQANgGAPAAQASAAAPAJQAPAKAJAOIAAhdIAaAAIAAC5QAAAKAJAAIAAAXIgHABIgFAAQgIAAgGgFQgGgFAAgIIAAgMQgJAPgPAIQgQAJgQAAQgQAAgOgGgAgXgXQgKAFgGAJQgHAIgEAKQgDAKAAALQAAAMAEALQAEALAHAHQAHAIAKAEQAKAFALAAQAHAAAHgCQAIgDAHgFQAGgFAFgHQAFgGACgHIAAgtQgDgIgFgFQgGgHgHgFQgGgFgIgDQgHgCgHAAQgMAAgJAEg"
      );
    this.shape_19.setTransform(-8.075, 23);

    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics
      .f("#333333")
      .s()
      .p(
        "AgnBOQgKgEgHgHQgHgGgEgKQgEgJAAgKQAAgLAFgIQAEgJAJgGQAJgGAMgEQAMgDAPAAQAKAAAMACQAMACAJADIAAgMQAAgTgLgLQgLgLgTAAQgXAAgbATIgIgSQAegUAfAAQAdAAASAQQARARAAAeIAAA+QAAAKAIAAIAAAXIgHABIgFAAQgIAAgFgEQgEgFgBgHIgBgLQgKAOgQAIQgPAHgTAAQgLAAgJgDgAgiAIQgMAIAAAOQAAAHADAFQACAGAFAEQAEAEAHADQAGACAHAAQANAAAMgFQANgFAGgJQAGgFAAgHIAAgXQgUgHgTAAQgUAAgNAIg"
      );
    this.shape_20.setTransform(-25.825, 26);

    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics.f("#333333").s().p("AgoBPIAAibIAYAAIAAAkQAJgRAMgJQANgLAPgBIAFAAIAEABIAAAXQgVABgPAJQgOALgFAQIAABgg");
    this.shape_21.setTransform(-46.1, 25.9);

    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics
      .f("#333333")
      .s()
      .p("Ag8A/QgMgQAAghIAAhdIAaAAIAABYQAAAwAiAAQAOAAAPgKQAOgLAHgSIAAhhIAaAAIAAB7QAAAKAJAAIAAAXIgHAAIgFABQgIAAgFgFQgFgFAAgGIgBgTQgLASgRAJQgQAKgUAAQgZAAgNgRg");
    this.shape_22.setTransform(-61.05, 26.125);

    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics
      .f("#333333")
      .s()
      .p("AgOBhQgLgIAAgQIAAhpIgVAAIAAgUIAVAAIAAg0IAZAAIAAA0IAjAAIAAAUIgjAAIAABhQABAIAFAEQAFAEAHAAQAIAAAGgDIAJgEIAGAVIgGADIgJAEIgKACIgNABQgNAAgKgIg");
    this.shape_23.setTransform(-75.425, 23.475);

    this.shape_24 = new cjs.Shape();
    this.shape_24.graphics
      .f("#333333")
      .s()
      .p(
        "AgfBLQgOgHgLgLQgLgLgFgPQgGgPAAgQQAAgQAGgOQAFgPALgMQALgLAOgGQAPgGARAAQARAAAPAGQAOAHALALQAKALAFAPQAGAOAAAPIAAAGIAAADIiCAAQABANAFAJQAFAJAHAIQAHAGAJAFQAJADAJAAIAPgBIAMgGQAGgDAFgFQAEgFADgGIAXAGQgEAJgHAIQgHAGgIAGQgJAFgLADQgLADgMAAQgQAAgPgGgAA2gKQAAgLgGgJQgEgKgHgHQgHgGgKgEQgIgDgLAAQgJAAgKADQgJAEgHAHQgHAHgEAJQgFAJgBALIBpAAIAAAAg"
      );
    this.shape_24.setTransform(-89.6, 26);

    this.shape_25 = new cjs.Shape();
    this.shape_25.graphics
      .f("#333333")
      .s()
      .p("AgOBhQgLgIAAgQIAAhpIgVAAIAAgUIAVAAIAAg0IAZAAIAAA0IAjAAIAAAUIgjAAIAABhQABAIAFAEQAFAEAHAAQAIAAAGgDIAJgEIAGAVIgGADIgJAEIgKACIgNABQgNAAgKgIg");
    this.shape_25.setTransform(-103.675, 23.475);

    this.shape_26 = new cjs.Shape();
    this.shape_26.graphics
      .f("#333333")
      .s()
      .p(
        "AgZBLQgPgIgKgKQgLgMgGgOQgFgPAAgQQAAgQAFgPQAGgOAKgMQALgLAOgGQAPgGARAAQAXAAARAKQARALAJARIgaAIQgGgLgLgGQgKgHgOABQgJAAgKAEQgJAFgIAHQgGAIgEALQgEAKAAAMQAAALAEAMQAEALAHAHQAHAIAJAEQAKAFAKAAQAHAAAGgBIANgGIAJgIQAFgEABgFIAaAHQgDAJgHAIQgGAHgJAFQgJAFgKADQgLADgMAAQgQAAgPgGg"
      );
    this.shape_26.setTransform(-117.325, 26);

    this.shape_27 = new cjs.Shape();
    this.shape_27.graphics
      .f("#333333")
      .s()
      .p(
        "AgfBLQgPgHgKgLQgKgLgHgPQgFgPAAgQQAAgQAFgOQAHgPAKgMQALgLAOgGQAPgGARAAQASAAAOAGQAPAHAKALQAKALAGAPQAFAOAAAPIAAAGIgBADIiAAAQABANAEAJQAEAJAIAIQAHAGAJAFQAKADAJAAIANgBIAOgGQAFgDAFgFQAFgFACgGIAXAGQgEAJgHAIQgGAGgKAGQgIAFgLADQgLADgLAAQgRAAgPgGgAA3gKQgCgLgFgJQgEgKgHgHQgHgGgJgEQgKgDgKAAQgKAAgJADQgJAEgHAHQgHAHgFAJQgEAJgBALIBqAAIAAAAg"
      );
    this.shape_27.setTransform(-134.45, 26);

    this.shape_28 = new cjs.Shape();
    this.shape_28.graphics
      .f("#333333")
      .s()
      .p(
        "AghBLQgSgFgOgMIAMgRQANAKAOAGQAOAEAPAAQARABAKgIQAKgGAAgNQAAgFgDgEQgDgEgFgDIgOgFIgSgGIgZgGQgKgDgHgEQgGgFgDgGQgDgHAAgIQAAgMAEgKQAGgIAIgHQAHgGAMgDQALgDALAAQASAAAPAFQAPAGAKAKIgLAPQgKgIgNgFQgMgEgNAAQgNAAgKAGQgKAGAAANQAAAGACADQACAEAFADIALAFIAQAEIAbAIQAMADAHAFQAIAFADAGQAEAIABAJQAAAWgRANQgSANgcAAQgSAAgSgGg"
      );
    this.shape_28.setTransform(-150.95, 26);

    this.shape_29 = new cjs.Shape();
    this.shape_29.graphics
      .f("#333333")
      .s()
      .p(
        "AAqBQIAAhXQAAgagIgKQgHgMgQAAQgIAAgIADQgHADgHAGQgIAFgFAHQgGAIgCAJIAABeIgbAAIAAicIAYAAIAAAiQAJgRASgKQARgJAUAAQAOAAAJAEQAJAFAFAJQAGAJACAMQACAMAAAOIAABdg"
      );
    this.shape_29.setTransform(-167, 25.85);

    this.shape_30 = new cjs.Shape();
    this.shape_30.graphics
      .f("#333333")
      .s()
      .p(
        "AggBLQgOgIgLgKQgKgMgGgOQgFgPAAgQQAAgPAFgPQAHgPAKgLQAKgLAOgHQAPgGARAAQARAAAOAGQAQAHAKALQAKALAGAPQAGAPAAAPQAAAQgGAPQgFAOgLAMQgKAKgPAIQgOAGgSAAQgRAAgPgGgAgUg1QgJAFgHAIQgHAIgEALQgEAKAAALQAAANAEAKQAEAKAHAIQAHAIAJAEQAKAFAKAAQAKAAAKgFQAJgEAIgIQAGgHAFgLQAEgLAAgMQAAgLgEgLQgFgKgGgIQgIgJgJgEQgKgEgKAAQgKAAgKAEg"
      );
    this.shape_30.setTransform(-184.85, 26);

    this.shape_31 = new cjs.Shape();
    this.shape_31.graphics
      .f("#333333")
      .s()
      .p(
        "AgZBLQgPgIgKgKQgLgMgGgOQgFgPAAgQQAAgQAFgPQAGgOAKgMQALgLAOgGQAPgGARAAQAXAAARAKQARALAJARIgaAIQgGgLgLgGQgKgHgOABQgJAAgKAEQgJAFgIAHQgGAIgEALQgEAKAAAMQAAALAEAMQAEALAHAHQAHAIAJAEQAKAFAKAAQAHAAAGgBIANgGIAJgIQAFgEABgFIAaAHQgDAJgHAIQgGAHgJAFQgJAFgKADQgLADgMAAQgQAAgPgGg"
      );
    this.shape_31.setTransform(-202.025, 26);

    this.shape_32 = new cjs.Shape();
    this.shape_32.graphics.f("#333333").s().p("AgIAdIAGgbIgJAAIAAgeIAXAAIAAAeIgJAbg");
    this.shape_32.setTransform(179.6, -7.85);

    this.shape_33 = new cjs.Shape();
    this.shape_33.graphics
      .f("#333333")
      .s()
      .p("AgOBhQgLgIAAgQIAAhpIgVAAIAAgUIAVAAIAAg0IAZAAIAAA0IAjAAIAAAUIgjAAIAABhQABAIAFAEQAFAEAHAAQAIAAAGgDIAJgEIAGAVIgGADIgJAEIgKACIgNABQgNAAgKgIg");
    this.shape_33.setTransform(171.375, -17.725);

    this.shape_34 = new cjs.Shape();
    this.shape_34.graphics
      .f("#333333")
      .s()
      .p(
        "AgfBLQgPgHgKgLQgKgLgHgPQgFgPAAgQQAAgQAFgPQAHgOAKgMQALgLAPgGQAOgGARAAQARAAAPAGQAOAHALALQAKALAFAOQAGAPAAAPIAAAFIAAAFIiCAAQACALAEAKQAEAJAIAIQAHAGAJAEQAKAEAIAAIAPgCIAMgFQAHgDAEgFQAEgFADgGIAXAGQgEAJgGAHQgHAHgJAGQgJAFgLADQgLADgMAAQgQAAgPgGgAA2gKQgBgLgEgKQgFgJgHgHQgHgGgKgEQgIgEgLABQgKgBgJAEQgJAEgHAHQgHAGgEAKQgFAJgBALIBpAAIAAAAg"
      );
    this.shape_34.setTransform(157.2, -15.2);

    this.shape_35 = new cjs.Shape();
    this.shape_35.graphics
      .f("#333333")
      .s()
      .p(
        "ABcBQIAAhXQAAgYgIgNQgIgLgQAAQgQAAgNALQgMAMgGASIAABeIgZAAIAAhXQAAgZgIgMQgIgLgPAAQgQAAgNALQgNALgFATIAABeIgbAAIAAicIAYAAIAAAhQAKgRAPgKQAPgJATAAQAUAAAMALQAKALADAQQAVglAngBQANABAJAEQAKAFAFAJQAFAJADAMQACAMAAAOIAABdg"
      );
    this.shape_35.setTransform(134.425, -15.35);

    this.shape_36 = new cjs.Shape();
    this.shape_36.graphics
      .f("#333333")
      .s()
      .p(
        "AgnBNQgKgEgHgGQgHgHgEgJQgEgJAAgKQAAgKAFgKQAEgJAJgFQAJgGAMgEQAMgDAPAAQAKAAAMACQAMACAJAEIAAgNQAAgTgLgLQgLgLgTAAQgXAAgbATIgIgSQAegUAfAAQAdAAASAQQARARAAAeIAAA/QAAAJAIAAIAAAXIgHABIgFAAQgIAAgFgEQgEgFgBgGIgBgMQgKAOgQAIQgPAHgTAAQgLAAgJgEgAgiAIQgMAJAAANQAAAHADAFQACAGAFAEQAEAEAHADQAGACAHAAQANAAAMgFQANgFAGgJQAGgGAAgGIAAgXQgUgHgTAAQgUAAgNAIg"
      );
    this.shape_36.setTransform(112.025, -15.2);

    this.shape_37 = new cjs.Shape();
    this.shape_37.graphics
      .f("#333333")
      .s()
      .p("AgOBhQgLgIAAgQIAAhpIgVAAIAAgUIAVAAIAAg0IAZAAIAAA0IAjAAIAAAUIgjAAIAABhQABAIAFAEQAFAEAHAAQAIAAAGgDIAJgEIAGAVIgGADIgJAEIgKACIgNABQgNAAgKgIg");
    this.shape_37.setTransform(91.275, -17.725);

    this.shape_38 = new cjs.Shape();
    this.shape_38.graphics.f("#333333").s().p("AgMBuIAAicIAZAAIAACcgAgMhMIAAghIAZAAIAAAhg");
    this.shape_38.setTransform(82.35, -18.35);

    this.shape_39 = new cjs.Shape();
    this.shape_39.graphics
      .f("#333333")
      .s()
      .p(
        "AghBLQgTgGgMgLIALgSQANALAPAGQAOAEANAAQARAAAKgGQALgHAAgMQAAgGgDgEQgDgEgFgDIgOgGIgTgEIgXgHQgLgDgGgEQgHgFgDgGQgDgGAAgKQAAgMAFgIQAFgJAHgHQAJgGAKgDQAMgDALAAQASAAAPAFQAPAGALAKIgNAPQgJgJgMgEQgMgEgOAAQgNAAgKAGQgKAGAAAOQAAAFACAEQACAEAEACIAMAFIAQAEIAbAHQALAEAIAEQAIAFAEAHQADAIAAAJQAAAWgRANQgQANgdAAQgSAAgSgGg"
      );
    this.shape_39.setTransform(71.4, -15.2);

    this.shape_40 = new cjs.Shape();
    this.shape_40.graphics.f("#333333").s().p("AgpBPIAAibIAaAAIAAAkQAHgQAMgLQAOgKAPgBIAFAAIADABIAAAXQgTABgQAKQgNAJgHASIAABfg");
    this.shape_40.setTransform(51.95, -15.3);

    this.shape_41 = new cjs.Shape();
    this.shape_41.graphics
      .f("#333333")
      .s()
      .p(
        "AggBLQgOgIgLgKQgJgLgGgPQgGgPAAgQQAAgPAGgPQAFgPALgLQAKgLAOgHQAQgGAQAAQARAAAOAGQAPAHALALQAKALAGAPQAGAPAAAPQAAAQgGAPQgGAPgKALQgLAKgOAIQgPAGgRAAQgRAAgPgGgAgTg1QgKAFgHAIQgHAHgEALQgEALAAAMQAAAMAEAKQAEAKAHAIQAHAIAKAFQAJAEAKAAQALAAAJgEQAJgFAIgIQAGgIAFgLQAEgKAAgMQAAgLgEgLQgFgKgGgJQgIgIgJgEQgJgEgLgBQgKABgJAEg"
      );
    this.shape_41.setTransform(36.75, -15.2);

    this.shape_42 = new cjs.Shape();
    this.shape_42.graphics.f("#333333").s().p("AgWBmQgJgIAAgRIAAi7IAaAAIAACyQAAAIAFAGQADAEAJAAIAIgBIAIgCIAEAVIgPAFIgQABQgPAAgIgIg");
    this.shape_42.setTransform(24.625, -18.25);

    this.shape_43 = new cjs.Shape();
    this.shape_43.graphics
      .f("#333333")
      .s()
      .p(
        "AgfBLQgPgIgLgKQgJgLgHgPQgFgPAAgQQAAgPAFgPQAHgPAKgLQAKgLAPgHQAPgGAQAAQARAAAPAGQAOAHALALQAKALAGAPQAGAPAAAPQAAAQgGAPQgFAPgLALQgKAKgPAIQgOAGgSAAQgRAAgOgGgAgUg1QgJAFgHAIQgHAHgEALQgEALAAAMQAAAMAEAKQAEAKAHAIQAHAIAJAFQAKAEAKAAQAKAAAKgEQAKgFAGgIQAIgIAEgLQAEgKAAgMQAAgLgEgLQgEgKgIgJQgGgIgKgEQgKgEgKgBQgKABgKAEg"
      );
    this.shape_43.setTransform(10.25, -15.2);

    this.shape_44 = new cjs.Shape();
    this.shape_44.graphics
      .f("#333333")
      .s()
      .p(
        "AgkBpQgOgIgKgKQgJgLgGgPQgGgPAAgQQAAgRAGgOQAFgOAJgMQAKgLANgGQANgGAPAAQASAAAPAKQAPAJAJAOIAAhdIAaAAIAAC6QAAAJAJAAIAAAXIgHABIgFAAQgIAAgGgFQgGgFAAgIIAAgNQgJAQgPAJQgQAIgQAAQgQAAgOgGgAgXgWQgKAFgGAHQgHAJgEAJQgDALAAAMQAAALAEAKQAEALAHAIQAHAIAKAFQAKAEALAAQAHAAAHgCQAIgDAHgFQAGgFAFgGQAFgHACgHIAAgtQgDgHgFgGQgGgHgHgFQgGgFgIgDQgHgDgHAAQgMAAgJAGg"
      );
    this.shape_44.setTransform(-8.325, -18.2);

    this.shape_45 = new cjs.Shape();
    this.shape_45.graphics
      .f("#333333")
      .s()
      .p(
        "ABcBQIAAhXQAAgYgIgNQgIgLgQAAQgQAAgNALQgMAMgGASIAABeIgZAAIAAhXQAAgZgIgMQgIgLgPAAQgQAAgNALQgNALgFATIAABeIgbAAIAAicIAYAAIAAAhQAKgRAPgKQAPgJATAAQAUAAAMALQAKALADAQQAVglAngBQANABAJAEQAKAFAFAJQAFAJADAMQACAMAAAOIAABdg"
      );
    this.shape_45.setTransform(-38.925, -15.35);

    this.shape_46 = new cjs.Shape();
    this.shape_46.graphics
      .f("#333333")
      .s()
      .p("Ag7A/QgNgQAAghIAAhdIAaAAIAABYQAAAwAhAAQAPAAAPgKQAOgLAHgSIAAhhIAbAAIAAB7QAAAKAIAAIAAAXIgHAAIgFABQgIAAgFgFQgGgFAAgGIAAgTQgLASgRAJQgQAKgVAAQgYAAgMgRg");
    this.shape_46.setTransform(-61.55, -15.075);

    this.shape_47 = new cjs.Shape();
    this.shape_47.graphics
      .f("#333333")
      .s()
      .p(
        "AghBLQgTgGgMgLIALgSQANALAOAGQAOAEAOAAQARAAAKgGQALgHAAgMQAAgGgDgEQgDgEgFgDIgOgGIgTgEIgXgHQgLgDgGgEQgHgFgDgGQgDgGAAgKQAAgMAEgIQAFgJAIgHQAJgGALgDQAKgDAMAAQARAAAQAFQAPAGALAKIgNAPQgJgJgMgEQgNgEgNAAQgNAAgKAGQgKAGAAAOQAAAFACAEQACAEAEACIAMAFIAQAEIAbAHQALAEAIAEQAIAFAEAHQADAIAAAJQABAWgSANQgQANgdAAQgSAAgSgGg"
      );
    this.shape_47.setTransform(-78.35, -15.2);

    this.shape_48 = new cjs.Shape();
    this.shape_48.graphics
      .f("#333333")
      .s()
      .p(
        "AhNBwIAAjcIAYAAIAAAeQAJgPAQgJQAOgJARAAQAQABAOAGQAOAHAJALQAKALAFAPQAGAOABAQQAAARgGAOQgFAPgJAKQgKALgNAHQgNAGgPAAQgSAAgQgJQgOgKgJgPIAABggAgRhVQgIADgHAFQgHAEgFAGQgEAHgCAHIAAAtQAEAIAEAFQAGAHAHAFQAGAFAHADQAIADAIAAQAKgBAKgFQAJgEAHgIQAHgIADgKQAFgLAAgLQAAgLgFgLQgEgLgHgHQgIgJgJgFQgKgEgKAAQgIAAgHADg"
      );
    this.shape_48.setTransform(-94.45, -12.15);

    this.shape_49 = new cjs.Shape();
    this.shape_49.graphics.f("#333333").s().p("AgMBuIAAicIAaAAIAACcgAgMhMIAAghIAaAAIAAAhg");
    this.shape_49.setTransform(-107.75, -18.35);

    this.shape_50 = new cjs.Shape();
    this.shape_50.graphics
      .f("#333333")
      .s()
      .p(
        "ABcBQIAAhXQAAgYgIgNQgIgLgQAAQgQAAgNALQgMAMgGASIAABeIgZAAIAAhXQAAgZgIgMQgIgLgPAAQgQAAgNALQgNALgFATIAABeIgbAAIAAicIAYAAIAAAhQAKgRAPgKQAPgJATAAQAUAAAMALQAKALADAQQAVglAngBQANABAJAEQAKAFAFAJQAFAJADAMQACAMAAAOIAABdg"
      );
    this.shape_50.setTransform(-132.525, -15.35);

    this.shape_51 = new cjs.Shape();
    this.shape_51.graphics
      .f("#333333")
      .s()
      .p(
        "AgfBLQgPgHgKgLQgKgLgHgPQgFgPAAgQQAAgQAFgPQAHgOAKgMQALgLAOgGQAPgGARAAQASAAAOAGQAPAHAKALQAKALAGAOQAFAPAAAPIAAAFIgBAFIiAAAQABALAEAKQAEAJAIAIQAHAGAJAEQAKAEAJAAIANgCIAOgFQAFgDAFgFQAFgFACgGIAXAGQgEAJgHAHQgGAHgKAGQgIAFgLADQgLADgLAAQgRAAgPgGgAA3gKQgCgLgFgKQgEgJgHgHQgHgGgJgEQgKgEgKABQgKgBgJAEQgJAEgHAHQgHAGgFAKQgEAJgBALIBqAAIAAAAg"
      );
    this.shape_51.setTransform(-155.15, -15.2);

    this.shape_52 = new cjs.Shape();
    this.shape_52.graphics.f("#333333").s().p("AgoBPIAAibIAZAAIAAAkQAHgQAMgLQAOgKAPgBIAFAAIADABIAAAXQgTABgQAKQgOAJgFASIAABfg");
    this.shape_52.setTransform(-168.75, -15.3);

    this.shape_53 = new cjs.Shape();
    this.shape_53.graphics
      .f("#333333")
      .s()
      .p(
        "AggBLQgOgIgLgKQgKgLgGgPQgFgPAAgQQAAgPAFgPQAHgPAKgLQAKgLAOgHQAPgGARAAQARAAAOAGQAQAHAKALQAKALAGAPQAGAPAAAPQAAAQgGAPQgFAPgLALQgKAKgPAIQgOAGgSAAQgRAAgPgGgAgUg1QgJAFgHAIQgHAHgEALQgEALAAAMQAAAMAEAKQAEAKAHAIQAHAIAJAFQAKAEAKAAQAKAAAKgEQAJgFAIgIQAGgIAFgLQAEgKAAgMQAAgLgEgLQgFgKgGgJQgIgIgJgEQgKgEgKgBQgKABgKAEg"
      );
    this.shape_53.setTransform(-183.95, -15.2);

    this.shape_54 = new cjs.Shape();
    this.shape_54.graphics.f("#333333").s().p("AhIBrIAAjVIAbAAIAAC8IB2AAIAAAZg");
    this.shape_54.setTransform(-200.625, -18.05);

    this.shape_55 = new cjs.Shape();
    this.shape_55.graphics
      .f("#333333")
      .s()
      .p("AgKAaIgJgGQgEgEgCgFQgCgFAAgGQAAgFACgFQACgFAEgEIAJgGQAGgCAEAAQAGAAAFACIAJAGIAGAJQACAFAAAFQAAAGgCAFIgGAJIgJAGQgFACgGAAQgEAAgGgCg");
    this.shape_55.setTransform(-223.125, -17.825);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_55 },
            { t: this.shape_54 },
            { t: this.shape_53 },
            { t: this.shape_52 },
            { t: this.shape_51 },
            { t: this.shape_50 },
            { t: this.shape_49 },
            { t: this.shape_48 },
            { t: this.shape_47 },
            { t: this.shape_46 },
            { t: this.shape_45 },
            { t: this.shape_44 },
            { t: this.shape_43 },
            { t: this.shape_42 },
            { t: this.shape_41 },
            { t: this.shape_40 },
            { t: this.shape_39 },
            { t: this.shape_38 },
            { t: this.shape_37 },
            { t: this.shape_36 },
            { t: this.shape_35 },
            { t: this.shape_34 },
            { t: this.shape_33 },
            { t: this.shape_32 },
            { t: this.shape_31 },
            { t: this.shape_30 },
            { t: this.shape_29 },
            { t: this.shape_28 },
            { t: this.shape_27 },
            { t: this.shape_26 },
            { t: this.shape_25 },
            { t: this.shape_24 },
            { t: this.shape_23 },
            { t: this.shape_22 },
            { t: this.shape_21 },
            { t: this.shape_20 },
            { t: this.shape_19 },
            { t: this.shape_18 },
            { t: this.shape_17 },
            { t: this.shape_16 },
            { t: this.shape_15 },
            { t: this.shape_14 },
            { t: this.shape_13 },
            { t: this.shape_12 },
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-230.4, -37.6, 533.3, 80.4);

  (lib.Tween13 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#333333")
      .s()
      .p(
        "AgfBLQgPgIgLgKQgKgMgGgOQgFgPAAgQQAAgPAFgPQAHgPAKgLQAKgLAPgHQAOgGARAAQARAAAOAGQAQAHAKALQAKALAGAPQAGAPAAAPQAAAQgGAPQgFAOgLAMQgKAKgPAIQgPAGgRAAQgRAAgOgGgAgUg1QgJAFgHAIQgHAIgEALQgEAKAAALQAAANAEAKQAEAKAHAIQAHAIAJAEQAKAFAKAAQAKAAAKgFQAJgEAIgIQAGgHAFgLQAEgLAAgMQAAgLgEgLQgFgKgGgIQgIgJgJgEQgKgEgKAAQgKAAgKAEg"
      );
    this.shape.setTransform(267.3, 26);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#333333")
      .s()
      .p(
        "AgkBpQgOgIgKgKQgJgMgGgOQgGgPAAgQQAAgQAGgOQAFgPAJgMQAKgLANgGQANgGAPAAQASAAAPAJQAPAKAJAOIAAhdIAaAAIAAC5QAAAKAJAAIAAAXIgHABIgFAAQgIAAgGgFQgGgFAAgIIAAgMQgJAPgPAIQgQAJgQAAQgQAAgOgGgAgXgXQgKAFgGAJQgHAIgEAKQgDAKAAALQAAAMAEALQAEALAHAHQAHAIAKAEQAKAFALAAQAHAAAHgCQAIgDAHgFQAGgFAFgHQAFgGACgHIAAgtQgDgIgFgFQgGgHgHgFQgGgFgIgDQgHgCgHAAQgMAAgJAEg"
      );
    this.shape_1.setTransform(248.725, 23);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#333333")
      .s()
      .p(
        "AgkBpQgOgIgKgKQgJgMgGgOQgGgPAAgQQAAgQAGgOQAFgPAJgMQAKgLANgGQANgGAPAAQASAAAPAJQAPAKAJAOIAAhdIAaAAIAAC5QAAAKAJAAIAAAXIgHABIgFAAQgIAAgGgFQgGgFAAgIIAAgMQgJAPgPAIQgQAJgQAAQgQAAgOgGgAgXgXQgKAFgGAJQgHAIgEAKQgDAKAAALQAAAMAEALQAEALAHAHQAHAIAKAEQAKAFALAAQAHAAAHgCQAIgDAHgFQAGgFAFgHQAFgGACgHIAAgtQgDgIgFgFQgGgHgHgFQgGgFgIgDQgHgCgHAAQgMAAgJAEg"
      );
    this.shape_2.setTransform(222.325, 23);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#333333")
      .s()
      .p(
        "AgfBLQgOgHgLgLQgLgLgFgPQgGgPAAgQQAAgQAGgOQAFgPALgMQALgLAPgGQAOgGARAAQARAAAPAGQAOAHALALQAKALAFAPQAGAOAAAPIAAAGIAAADIiCAAQABANAFAJQAFAJAHAIQAHAGAJAFQAJADAJAAIAPgBIAMgGQAHgDAEgFQAEgFADgGIAXAGQgEAJgGAIQgIAGgIAGQgJAFgLADQgLADgMAAQgQAAgPgGgAA2gKQAAgLgGgJQgEgKgHgHQgHgGgKgEQgJgDgKAAQgKAAgJADQgJAEgHAHQgHAHgEAJQgFAJgBALIBpAAIAAAAg"
      );
    this.shape_3.setTransform(204.35, 26);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#333333")
      .s()
      .p(
        "AghBLQgTgFgNgMIAMgRQAOAKAOAGQAOAEANAAQARABALgIQAKgGAAgNQAAgFgDgEQgCgEgGgDIgOgFIgTgGIgXgGQgLgDgGgEQgHgFgDgGQgDgHAAgIQAAgMAFgKQAFgIAHgHQAJgGAKgDQAMgDALAAQASAAAPAFQAQAGAJAKIgMAPQgJgIgMgFQgMgEgNAAQgOAAgKAGQgKAGAAANQAAAGACADQACAEAEADIAMAFIAQAEIAbAIQAMADAHAFQAIAFAEAGQADAIAAAJQAAAWgRANQgQANgdAAQgRAAgTgGg"
      );
    this.shape_4.setTransform(187.85, 26);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#333333").s().p("AgIAdIAGgbIgKAAIAAgeIAYAAIAAAeIgJAbg");
    this.shape_5.setTransform(169.85, 33.35);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#333333")
      .s()
      .p("AgOBhQgLgIAAgQIAAhpIgVAAIAAgUIAVAAIAAg0IAZAAIAAA0IAjAAIAAAUIgjAAIAABhQABAIAFAEQAFAEAHAAQAIAAAGgDIAJgEIAGAVIgGADIgJAEIgKACIgNABQgNAAgKgIg");
    this.shape_6.setTransform(161.625, 23.475);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f("#333333").s().p("AgMBuIAAicIAaAAIAACcgAgMhLIAAgiIAaAAIAAAig");
    this.shape_7.setTransform(152.7, 22.85);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f("#333333").s().p("AgWBmQgJgIAAgRIAAi7IAaAAIAACyQAAAIAFAGQADAEAJAAIAIAAIAIgDIAEAVIgPAFIgQACQgPAAgIgJg");
    this.shape_8.setTransform(146.125, 22.95);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#333333")
      .s()
      .p(
        "AgfBLQgOgHgLgLQgKgLgGgPQgGgPAAgQQAAgQAGgOQAGgPAKgMQALgLAPgGQAOgGARAAQARAAAPAGQAOAHALALQAKALAFAPQAGAOAAAPIAAAGIAAADIiCAAQACANAEAJQAEAJAIAIQAHAGAJAFQAKADAIAAIAPgBIAMgGQAHgDAEgFQAEgFADgGIAXAGQgEAJgGAIQgHAGgJAGQgJAFgLADQgLADgMAAQgQAAgPgGgAA2gKQgBgLgEgJQgFgKgHgHQgHgGgKgEQgIgDgLAAQgKAAgJADQgJAEgHAHQgHAHgFAJQgEAJgBALIBpAAIAAAAg"
      );
    this.shape_9.setTransform(132, 26);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#333333")
      .s()
      .p(
        "AgtBnQgRgIgLgQIAQgOQAJAOAPAGQAOAIARgBQAKAAAKgCQAKgEAHgFQAHgHAEgJQAFgIAAgNIAAgbQgFAGgGAGQgGAHgHADQgHAFgJACQgIACgHAAQgQAAgNgHQgOgHgJgKQgKgMgFgNQgFgPAAgPQAAgQAFgPQAFgPAKgMQAJgLAOgGQANgGAQAAQATAAAOAJQAPAKAKAOIAAgeIAXAAIAACZQAAARgGAMQgGANgLAJQgLAJgPAEQgOAFgQAAQgaAAgRgKgAgUhVQgJAGgHAIQgGAJgEAKQgEALAAAKQAAANAFAKQAEAKAHAHQAHAIAKAEQAKAFAKAAQAIAAAIgDQAIgDAHgFQAGgFAFgGQAEgGACgGIAAgtQgEgIgFgHQgFgGgHgFQgGgFgIgDQgHgCgIAAQgLAAgKAEg"
      );
    this.shape_10.setTransform(105.625, 29.2);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#333333")
      .s()
      .p(
        "AAqBQIAAhXQAAgagIgKQgIgMgPAAQgIAAgHADQgIADgIAGQgHAFgFAHQgGAIgCAJIAABeIgbAAIAAicIAYAAIAAAiQAKgRARgKQAQgJAWAAQANAAAJAEQAJAFAGAJQAEAJADAMQACAMAAAOIAABdg"
      );
    this.shape_11.setTransform(88, 25.85);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics.f("#333333").s().p("AgMBuIAAicIAaAAIAACcgAgMhLIAAgiIAaAAIAAAig");
    this.shape_12.setTransform(75.65, 22.85);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#333333")
      .s()
      .p(
        "AgZBLQgPgIgKgKQgLgMgGgOQgFgPAAgQQAAgQAFgPQAGgOAKgMQALgLAOgGQAPgGARAAQAXAAARAKQARALAJARIgaAIQgGgLgLgGQgKgHgOABQgJAAgKAEQgJAFgIAHQgGAIgEALQgEAKAAAMQAAALAEAMQAEALAHAHQAHAIAJAEQAKAFAKAAQAHAAAGgBIANgGIAJgIQAFgEABgFIAaAHQgDAJgHAIQgGAHgJAFQgJAFgKADQgLADgMAAQgQAAgPgGg"
      );
    this.shape_13.setTransform(64.025, 26);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics.f("#333333").s().p("AgNBuIAAicIAaAAIAACcgAgNhLIAAgiIAaAAIAAAig");
    this.shape_14.setTransform(52.15, 22.85);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#333333")
      .s()
      .p(
        "AghBLQgSgFgOgMIAMgRQANAKAOAGQAOAEAPAAQARABAKgIQAKgGAAgNQAAgFgDgEQgDgEgFgDIgOgFIgSgGIgZgGQgKgDgHgEQgGgFgDgGQgDgHAAgIQAAgMAEgKQAGgIAIgHQAHgGAMgDQALgDALAAQASAAAPAFQAPAGAKAKIgLAPQgKgIgNgFQgMgEgNAAQgNAAgKAGQgKAGAAANQAAAGACADQACAEAFADIALAFIAQAEIAbAIQAMADAHAFQAIAFADAGQAEAIABAJQAAAWgRANQgSANgcAAQgSAAgSgGg"
      );
    this.shape_15.setTransform(41.2, 26);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics.f("#333333").s().p("AgNBuIAAicIAaAAIAACcgAgNhLIAAgiIAaAAIAAAig");
    this.shape_16.setTransform(30.45, 22.85);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#333333")
      .s()
      .p(
        "AhNBwIAAjcIAYAAIAAAdQAJgOAPgJQAPgIARAAQARAAANAGQANAHALALQAJALAGAOQAFAQAAAPQABARgGAOQgFAOgJALQgJALgNAHQgNAGgQABQgSAAgPgKQgPgKgJgPIAABggAgRhVQgIACgHAGQgGAEgFAHQgGAGgBAHIAAAtQAEAHAEAHQAFAGAHAFQAHAFAIADQAHACAIAAQALAAAJgEQAJgFAIgJQAGgHAEgKQADgLAAgLQABgMgFgKQgEgLgHgIQgIgHgJgFQgKgFgLAAQgGAAgIADg"
      );
    this.shape_17.setTransform(18.2, 29.05);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics.f("#333333").s().p("AgNBuIAAicIAaAAIAACcgAgNhLIAAgiIAaAAIAAAig");
    this.shape_18.setTransform(4.9, 22.85);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f("#333333")
      .s()
      .p(
        "AgkBpQgOgIgKgKQgJgMgGgOQgGgPAAgQQAAgQAGgOQAFgPAJgMQAKgLANgGQANgGAPAAQASAAAPAJQAPAKAJAOIAAhdIAaAAIAAC5QAAAKAJAAIAAAXIgHABIgFAAQgIAAgGgFQgGgFAAgIIAAgMQgJAPgPAIQgQAJgQAAQgQAAgOgGgAgXgXQgKAFgGAJQgHAIgEAKQgDAKAAALQAAAMAEALQAEALAHAHQAHAIAKAEQAKAFALAAQAHAAAHgCQAIgDAHgFQAGgFAFgHQAFgGACgHIAAgtQgDgIgFgFQgGgHgHgFQgGgFgIgDQgHgCgHAAQgMAAgJAEg"
      );
    this.shape_19.setTransform(-8.125, 23);

    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics
      .f("#333333")
      .s()
      .p(
        "AgnBOQgKgEgHgHQgHgGgEgKQgEgJAAgKQAAgLAFgIQAEgJAJgGQAJgGAMgEQAMgDAPAAQAKAAAMACQAMACAJADIAAgMQAAgTgLgLQgLgLgTAAQgXAAgbATIgIgSQAegUAfAAQAdAAASAQQARARAAAeIAAA+QAAAKAIAAIAAAXIgHABIgFAAQgIAAgFgEQgEgFgBgHIgBgLQgKAOgQAIQgPAHgTAAQgLAAgJgDgAgiAIQgMAIAAAOQAAAHADAFQACAGAFAEQAEAEAHADQAGACAHAAQANAAAMgFQANgFAGgJQAGgFAAgHIAAgXQgUgHgTAAQgUAAgNAIg"
      );
    this.shape_20.setTransform(-25.875, 26);

    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics.f("#333333").s().p("AgpBPIAAibIAaAAIAAAkQAHgRAMgJQAOgLAPgBIAFAAIADABIAAAXQgTABgQAJQgNALgHAQIAABgg");
    this.shape_21.setTransform(-46.15, 25.9);

    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics
      .f("#333333")
      .s()
      .p("Ag7A/QgNgQAAghIAAhdIAaAAIAABYQAAAwAhAAQAPAAAPgKQAOgLAHgSIAAhhIAbAAIAAB7QAAAKAIAAIAAAXIgHAAIgFABQgIAAgFgFQgGgFAAgGIAAgTQgLASgRAJQgQAKgVAAQgYAAgMgRg");
    this.shape_22.setTransform(-61.1, 26.125);

    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics
      .f("#333333")
      .s()
      .p("AgOBhQgLgIAAgQIAAhpIgVAAIAAgUIAVAAIAAg0IAZAAIAAA0IAjAAIAAAUIgjAAIAABhQABAIAFAEQAFAEAHAAQAIAAAGgDIAJgEIAGAVIgGADIgJAEIgKACIgNABQgNAAgKgIg");
    this.shape_23.setTransform(-75.475, 23.475);

    this.shape_24 = new cjs.Shape();
    this.shape_24.graphics
      .f("#333333")
      .s()
      .p(
        "AgfBLQgPgHgKgLQgKgLgHgPQgFgPAAgQQAAgQAFgOQAHgPAKgMQALgLAPgGQAOgGARAAQARAAAPAGQAPAHAKALQAKALAGAPQAFAOAAAPIAAAGIgBADIiAAAQAAANAFAJQAFAJAHAIQAHAGAJAFQAKADAJAAIANgBIAOgGQAGgDAEgFQAFgFACgGIAXAGQgEAJgGAIQgIAGgJAGQgIAFgLADQgLADgMAAQgQAAgPgGgAA2gKQgBgLgEgJQgFgKgHgHQgHgGgJgEQgJgDgLAAQgKAAgJADQgJAEgHAHQgHAHgFAJQgEAJgBALIBpAAIAAAAg"
      );
    this.shape_24.setTransform(-89.65, 26);

    this.shape_25 = new cjs.Shape();
    this.shape_25.graphics
      .f("#333333")
      .s()
      .p("AgOBhQgLgIAAgQIAAhpIgVAAIAAgUIAVAAIAAg0IAZAAIAAA0IAjAAIAAAUIgjAAIAABhQABAIAFAEQAFAEAHAAQAIAAAGgDIAJgEIAGAVIgGADIgJAEIgKACIgNABQgNAAgKgIg");
    this.shape_25.setTransform(-103.725, 23.475);

    this.shape_26 = new cjs.Shape();
    this.shape_26.graphics
      .f("#333333")
      .s()
      .p(
        "AgZBLQgPgIgKgKQgLgMgGgOQgFgPAAgQQAAgQAFgPQAGgOAKgMQALgLAOgGQAPgGARAAQAXAAARAKQARALAJARIgaAIQgGgLgLgGQgKgHgOABQgJAAgKAEQgJAFgIAHQgGAIgEALQgEAKAAAMQAAALAEAMQAEALAHAHQAHAIAJAEQAKAFAKAAQAHAAAGgBIANgGIAJgIQAFgEABgFIAaAHQgDAJgHAIQgGAHgJAFQgJAFgKADQgLADgMAAQgQAAgPgGg"
      );
    this.shape_26.setTransform(-117.375, 26);

    this.shape_27 = new cjs.Shape();
    this.shape_27.graphics
      .f("#333333")
      .s()
      .p(
        "AgfBLQgOgHgLgLQgLgLgFgPQgGgPAAgQQAAgQAGgOQAFgPALgMQALgLAPgGQAOgGARAAQARAAAPAGQAOAHALALQAKALAFAPQAGAOAAAPIAAAGIAAADIiCAAQABANAFAJQAFAJAHAIQAHAGAJAFQAJADAJAAIAPgBIAMgGQAHgDAEgFQAEgFADgGIAXAGQgEAJgGAIQgIAGgIAGQgJAFgLADQgLADgMAAQgQAAgPgGgAA2gKQAAgLgGgJQgEgKgHgHQgHgGgKgEQgJgDgKAAQgKAAgJADQgJAEgHAHQgHAHgEAJQgFAJgBALIBpAAIAAAAg"
      );
    this.shape_27.setTransform(-134.5, 26);

    this.shape_28 = new cjs.Shape();
    this.shape_28.graphics
      .f("#333333")
      .s()
      .p(
        "AghBLQgTgFgNgMIAMgRQAOAKAOAGQAOAEANAAQARABAKgIQALgGAAgNQAAgFgDgEQgCgEgGgDIgOgFIgTgGIgXgGQgLgDgGgEQgHgFgDgGQgDgHAAgIQAAgMAFgKQAFgIAHgHQAJgGAKgDQAMgDALAAQASAAAPAFQAQAGAJAKIgMAPQgJgIgMgFQgMgEgNAAQgOAAgKAGQgKAGAAANQAAAGACADQACAEAEADIAMAFIAQAEIAbAIQAMADAHAFQAIAFAEAGQADAIAAAJQAAAWgRANQgQANgdAAQgSAAgSgGg"
      );
    this.shape_28.setTransform(-151, 26);

    this.shape_29 = new cjs.Shape();
    this.shape_29.graphics
      .f("#333333")
      .s()
      .p(
        "AAqBQIAAhXQAAgagIgKQgIgMgPAAQgIAAgHADQgIADgIAGQgHAFgFAHQgFAIgDAJIAABeIgbAAIAAicIAZAAIAAAiQAIgRASgKQAQgJAWAAQANAAAJAEQAJAFAGAJQAEAJADAMQACAMAAAOIAABdg"
      );
    this.shape_29.setTransform(-167.05, 25.85);

    this.shape_30 = new cjs.Shape();
    this.shape_30.graphics
      .f("#333333")
      .s()
      .p(
        "AggBLQgOgIgKgKQgLgMgFgOQgGgPAAgQQAAgPAGgPQAFgPALgLQAKgLAOgHQAQgGAQAAQARAAAPAGQAPAHAKALQAKALAGAPQAGAPAAAPQAAAQgGAPQgGAOgKAMQgLAKgOAIQgPAGgRAAQgRAAgPgGgAgTg1QgKAFgHAIQgHAIgEALQgEAKAAALQAAANAEAKQAEAKAHAIQAHAIAKAEQAJAFAKAAQALAAAJgFQAJgEAHgIQAIgHAEgLQAEgLAAgMQAAgLgEgLQgEgKgIgIQgHgJgJgEQgJgEgLAAQgKAAgJAEg"
      );
    this.shape_30.setTransform(-184.9, 26);

    this.shape_31 = new cjs.Shape();
    this.shape_31.graphics
      .f("#333333")
      .s()
      .p(
        "AgZBLQgPgIgKgKQgLgMgGgOQgFgPAAgQQAAgQAFgPQAGgOAKgMQALgLAOgGQAPgGARAAQAXAAARAKQARALAJARIgaAIQgGgLgLgGQgKgHgOABQgJAAgKAEQgJAFgIAHQgGAIgEALQgEAKAAAMQAAALAEAMQAEALAHAHQAHAIAJAEQAKAFAKAAQAHAAAGgBIANgGIAJgIQAFgEABgFIAaAHQgDAJgHAIQgGAHgJAFQgJAFgKADQgLADgMAAQgQAAgPgGg"
      );
    this.shape_31.setTransform(-202.075, 26);

    this.shape_32 = new cjs.Shape();
    this.shape_32.graphics.f("#333333").s().p("AgIAdIAGgbIgKAAIAAgeIAZAAIAAAeIgJAbg");
    this.shape_32.setTransform(179.55, -7.85);

    this.shape_33 = new cjs.Shape();
    this.shape_33.graphics
      .f("#333333")
      .s()
      .p("AgOBhQgLgIAAgQIAAhpIgVAAIAAgUIAVAAIAAg0IAZAAIAAA0IAjAAIAAAUIgjAAIAABhQABAIAFAEQAFAEAHAAQAIAAAGgDIAJgEIAGAVIgGADIgJAEIgKACIgNABQgNAAgKgIg");
    this.shape_33.setTransform(171.325, -17.725);

    this.shape_34 = new cjs.Shape();
    this.shape_34.graphics
      .f("#333333")
      .s()
      .p(
        "AgfBLQgPgHgKgLQgKgLgHgPQgFgPAAgQQAAgQAFgPQAHgOAKgMQALgLAOgGQAPgGARAAQASAAAOAGQAPAHAKALQAKALAGAOQAFAPAAAPIAAAFIgBAFIiAAAQABALAEAKQAEAJAIAIQAHAGAJAEQAKAEAJAAIANgCIAOgFQAFgDAFgFQAFgFACgGIAXAGQgEAJgHAHQgGAHgKAGQgIAFgLADQgLADgLAAQgRAAgPgGgAA3gKQgCgLgFgKQgEgJgHgHQgHgGgJgEQgKgEgKABQgKgBgJAEQgJAEgHAHQgHAGgFAKQgEAJgBALIBqAAIAAAAg"
      );
    this.shape_34.setTransform(157.15, -15.2);

    this.shape_35 = new cjs.Shape();
    this.shape_35.graphics
      .f("#333333")
      .s()
      .p(
        "ABcBQIAAhXQAAgYgIgNQgIgLgQAAQgQAAgNALQgMAMgGASIAABeIgZAAIAAhXQAAgZgIgMQgIgLgPAAQgQAAgNALQgNALgFATIAABeIgbAAIAAicIAYAAIAAAhQAKgRAPgKQAPgJATAAQAUAAAMALQAKALADAQQAVglAngBQANABAJAEQAKAFAFAJQAFAJADAMQACAMAAAOIAABdg"
      );
    this.shape_35.setTransform(134.375, -15.35);

    this.shape_36 = new cjs.Shape();
    this.shape_36.graphics
      .f("#333333")
      .s()
      .p(
        "AgnBNQgKgEgHgGQgHgHgEgJQgEgJAAgKQAAgKAFgKQAEgJAJgFQAJgGAMgEQAMgDAPAAQAKAAAMACQAMACAJAEIAAgNQAAgTgLgLQgLgLgTAAQgXAAgbATIgIgSQAegUAfAAQAdAAASAQQARARAAAeIAAA/QAAAJAIAAIAAAXIgHABIgFAAQgIAAgFgEQgEgFgBgGIgBgMQgKAOgQAIQgPAHgTAAQgLAAgJgEgAgiAIQgMAJAAANQAAAHADAFQACAGAFAEQAEAEAHADQAGACAHAAQANAAAMgFQANgFAGgJQAGgGAAgGIAAgXQgUgHgTAAQgUAAgNAIg"
      );
    this.shape_36.setTransform(111.975, -15.2);

    this.shape_37 = new cjs.Shape();
    this.shape_37.graphics
      .f("#333333")
      .s()
      .p("AgOBhQgLgIAAgQIAAhpIgVAAIAAgUIAVAAIAAg0IAZAAIAAA0IAjAAIAAAUIgjAAIAABhQABAIAFAEQAFAEAHAAQAIAAAGgDIAJgEIAGAVIgGADIgJAEIgKACIgNABQgNAAgKgIg");
    this.shape_37.setTransform(91.225, -17.725);

    this.shape_38 = new cjs.Shape();
    this.shape_38.graphics.f("#333333").s().p("AgNBuIAAicIAaAAIAACcgAgNhMIAAghIAaAAIAAAhg");
    this.shape_38.setTransform(82.3, -18.35);

    this.shape_39 = new cjs.Shape();
    this.shape_39.graphics
      .f("#333333")
      .s()
      .p(
        "AghBLQgSgGgOgLIAMgSQANALAOAGQAOAEAPAAQARAAAKgGQAKgHAAgMQAAgGgDgEQgDgEgFgDIgOgGIgSgEIgZgHQgKgDgHgEQgGgFgDgGQgDgGAAgKQAAgMAEgIQAGgJAIgHQAHgGAMgDQALgDALAAQASAAAPAFQAPAGALAKIgMAPQgKgJgNgEQgMgEgNAAQgNAAgKAGQgKAGAAAOQAAAFACAEQACAEAFACIALAFIAQAEIAbAHQAMAEAHAEQAIAFADAHQAEAIABAJQAAAWgRANQgSANgcAAQgSAAgSgGg"
      );
    this.shape_39.setTransform(71.35, -15.2);

    this.shape_40 = new cjs.Shape();
    this.shape_40.graphics.f("#333333").s().p("AgoBPIAAibIAYAAIAAAkQAJgQAMgLQANgKAPgBIAFAAIAEABIAAAXQgVABgOAKQgOAJgGASIAABfg");
    this.shape_40.setTransform(51.9, -15.3);

    this.shape_41 = new cjs.Shape();
    this.shape_41.graphics
      .f("#333333")
      .s()
      .p(
        "AgfBLQgPgIgKgKQgKgLgHgPQgFgPAAgQQAAgPAFgPQAHgPAKgLQAKgLAPgHQAPgGAQAAQARAAAPAGQAOAHALALQAKALAGAPQAGAPAAAPQAAAQgGAPQgGAPgKALQgLAKgOAIQgOAGgSAAQgRAAgOgGgAgUg1QgJAFgHAIQgHAHgEALQgEALAAAMQAAAMAEAKQAEAKAHAIQAHAIAJAFQAKAEAKAAQAKAAAKgEQAKgFAGgIQAIgIAEgLQAEgKAAgMQAAgLgEgLQgEgKgIgJQgGgIgKgEQgKgEgKgBQgKABgKAEg"
      );
    this.shape_41.setTransform(36.7, -15.2);

    this.shape_42 = new cjs.Shape();
    this.shape_42.graphics.f("#333333").s().p("AgWBmQgJgIAAgRIAAi7IAaAAIAACyQAAAIAFAGQADAEAJAAIAIgBIAIgCIAEAVIgPAFIgQABQgPAAgIgIg");
    this.shape_42.setTransform(24.575, -18.25);

    this.shape_43 = new cjs.Shape();
    this.shape_43.graphics
      .f("#333333")
      .s()
      .p(
        "AggBLQgOgIgLgKQgJgLgGgPQgGgPAAgQQAAgPAGgPQAFgPALgLQAKgLAOgHQAQgGAQAAQARAAAOAGQAPAHALALQAKALAGAPQAGAPAAAPQAAAQgGAPQgGAPgKALQgKAKgPAIQgPAGgRAAQgRAAgPgGgAgTg1QgKAFgHAIQgHAHgEALQgEALAAAMQAAAMAEAKQAEAKAHAIQAHAIAKAFQAJAEAKAAQALAAAJgEQAJgFAIgIQAGgIAFgLQAEgKAAgMQAAgLgEgLQgFgKgGgJQgIgIgJgEQgJgEgLgBQgKABgJAEg"
      );
    this.shape_43.setTransform(10.2, -15.2);

    this.shape_44 = new cjs.Shape();
    this.shape_44.graphics
      .f("#333333")
      .s()
      .p(
        "AgkBpQgOgIgKgKQgJgLgGgPQgGgPAAgQQAAgRAGgOQAFgOAJgMQAKgLANgGQANgGAPAAQASAAAPAKQAPAJAJAOIAAhdIAaAAIAAC6QAAAJAJAAIAAAXIgHABIgFAAQgIAAgGgFQgGgFAAgIIAAgNQgJAQgPAJQgQAIgQAAQgQAAgOgGgAgXgWQgKAFgGAHQgHAJgEAJQgDALAAAMQAAALAEAKQAEALAHAIQAHAIAKAFQAKAEALAAQAHAAAHgCQAIgDAHgFQAGgFAFgGQAFgHACgHIAAgtQgDgHgFgGQgGgHgHgFQgGgFgIgDQgHgDgHAAQgMAAgJAGg"
      );
    this.shape_44.setTransform(-8.375, -18.2);

    this.shape_45 = new cjs.Shape();
    this.shape_45.graphics
      .f("#333333")
      .s()
      .p(
        "ABcBQIAAhXQAAgYgIgNQgIgLgQAAQgQAAgNALQgMAMgGASIAABeIgZAAIAAhXQAAgZgIgMQgIgLgPAAQgQAAgNALQgNALgFATIAABeIgbAAIAAicIAYAAIAAAhQAKgRAPgKQAPgJATAAQAUAAAMALQAKALADAQQAVglAngBQANABAJAEQAKAFAFAJQAFAJADAMQACAMAAAOIAABdg"
      );
    this.shape_45.setTransform(-38.975, -15.35);

    this.shape_46 = new cjs.Shape();
    this.shape_46.graphics
      .f("#333333")
      .s()
      .p("Ag8A/QgMgQAAghIAAhdIAaAAIAABYQAAAwAiAAQAOAAAPgKQAOgLAHgSIAAhhIAaAAIAAB7QAAAKAJAAIAAAXIgHAAIgFABQgIAAgFgFQgGgFABgGIgBgTQgLASgRAJQgQAKgVAAQgYAAgNgRg");
    this.shape_46.setTransform(-61.6, -15.075);

    this.shape_47 = new cjs.Shape();
    this.shape_47.graphics
      .f("#333333")
      .s()
      .p(
        "AghBLQgSgGgOgLIAMgSQANALAOAGQAOAEAPAAQAQAAALgGQAKgHAAgMQAAgGgDgEQgCgEgGgDIgOgGIgSgEIgZgHQgKgDgHgEQgGgFgDgGQgDgGAAgKQAAgMAEgIQAFgJAJgHQAHgGALgDQAMgDALAAQARAAAQAFQAPAGAKAKIgLAPQgKgJgNgEQgMgEgMAAQgOAAgKAGQgKAGAAAOQAAAFACAEQACAEAFACIALAFIAQAEIAbAHQAMAEAHAEQAIAFADAHQAFAIAAAJQAAAWgRANQgRANgdAAQgSAAgSgGg"
      );
    this.shape_47.setTransform(-78.4, -15.2);

    this.shape_48 = new cjs.Shape();
    this.shape_48.graphics
      .f("#333333")
      .s()
      .p(
        "AhMBwIAAjcIAXAAIAAAeQAKgPAOgJQAPgJARAAQARABANAGQAOAHAKALQAJALAFAPQAHAOgBAQQAAARgFAOQgFAPgJAKQgJALgOAHQgNAGgPAAQgSAAgQgJQgOgKgIgPIAABggAgRhVQgIADgGAFQgIAEgEAGQgGAHAAAHIAAAtQACAIAGAFQAFAHAGAFQAHAFAIADQAHADAIAAQALgBAJgFQAJgEAIgIQAGgIAEgKQADgLAAgLQAAgLgEgLQgEgLgIgHQgGgJgKgFQgKgEgLAAQgGAAgIADg"
      );
    this.shape_48.setTransform(-94.5, -12.15);

    this.shape_49 = new cjs.Shape();
    this.shape_49.graphics.f("#333333").s().p("AgNBuIAAicIAaAAIAACcgAgNhMIAAghIAaAAIAAAhg");
    this.shape_49.setTransform(-107.8, -18.35);

    this.shape_50 = new cjs.Shape();
    this.shape_50.graphics
      .f("#333333")
      .s()
      .p(
        "ABcBQIAAhXQAAgYgIgNQgIgLgQAAQgQAAgNALQgMAMgGASIAABeIgZAAIAAhXQAAgZgIgMQgIgLgPAAQgQAAgNALQgNALgFATIAABeIgbAAIAAicIAYAAIAAAhQAKgRAPgKQAPgJATAAQAUAAAMALQAKALADAQQAVglAngBQANABAJAEQAKAFAFAJQAFAJADAMQACAMAAAOIAABdg"
      );
    this.shape_50.setTransform(-132.575, -15.35);

    this.shape_51 = new cjs.Shape();
    this.shape_51.graphics
      .f("#333333")
      .s()
      .p(
        "AgfBLQgOgHgLgLQgLgLgFgPQgGgPAAgQQAAgQAGgPQAFgOALgMQALgLAPgGQAOgGARAAQARAAAPAGQAOAHALALQAKALAFAOQAGAPAAAPIAAAFIAAAFIiCAAQABALAFAKQAFAJAHAIQAHAGAJAEQAJAEAJAAIAPgCIAMgFQAHgDAEgFQAEgFADgGIAXAGQgEAJgGAHQgIAHgIAGQgJAFgLADQgLADgMAAQgQAAgPgGgAA2gKQAAgLgGgKQgEgJgHgHQgHgGgKgEQgJgEgKABQgKgBgJAEQgJAEgHAHQgHAGgEAKQgFAJgBALIBpAAIAAAAg"
      );
    this.shape_51.setTransform(-155.2, -15.2);

    this.shape_52 = new cjs.Shape();
    this.shape_52.graphics.f("#333333").s().p("AgpBPIAAibIAZAAIAAAkQAIgQAMgLQAOgKAPgBIAFAAIAEABIAAAXQgVABgOAKQgOAJgHASIAABfg");
    this.shape_52.setTransform(-168.8, -15.3);

    this.shape_53 = new cjs.Shape();
    this.shape_53.graphics
      .f("#333333")
      .s()
      .p(
        "AggBLQgOgIgKgKQgLgLgFgPQgGgPAAgQQAAgPAGgPQAFgPALgLQAKgLAOgHQAQgGAQAAQARAAAPAGQAPAHAKALQAKALAGAPQAGAPAAAPQAAAQgGAPQgGAPgKALQgLAKgOAIQgPAGgRAAQgRAAgPgGgAgTg1QgKAFgHAIQgHAHgEALQgEALAAAMQAAAMAEAKQAEAKAHAIQAHAIAKAFQAJAEAKAAQALAAAJgEQAJgFAHgIQAIgIAEgLQAEgKAAgMQAAgLgEgLQgEgKgIgJQgHgIgJgEQgJgEgLgBQgKABgJAEg"
      );
    this.shape_53.setTransform(-184, -15.2);

    this.shape_54 = new cjs.Shape();
    this.shape_54.graphics.f("#333333").s().p("AhIBrIAAjVIAbAAIAAC8IB2AAIAAAZg");
    this.shape_54.setTransform(-200.675, -18.05);

    this.shape_55 = new cjs.Shape();
    this.shape_55.graphics
      .f("#333333")
      .s()
      .p("AgKAaIgJgGQgEgEgCgFQgCgFAAgGQAAgFACgFQACgFAEgEIAJgGQAGgCAEAAQAGAAAFACIAJAGIAGAJQACAFAAAFQAAAGgCAFIgGAJIgJAGQgFACgGAAQgEAAgGgCg");
    this.shape_55.setTransform(-223.175, -17.825);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_55 },
            { t: this.shape_54 },
            { t: this.shape_53 },
            { t: this.shape_52 },
            { t: this.shape_51 },
            { t: this.shape_50 },
            { t: this.shape_49 },
            { t: this.shape_48 },
            { t: this.shape_47 },
            { t: this.shape_46 },
            { t: this.shape_45 },
            { t: this.shape_44 },
            { t: this.shape_43 },
            { t: this.shape_42 },
            { t: this.shape_41 },
            { t: this.shape_40 },
            { t: this.shape_39 },
            { t: this.shape_38 },
            { t: this.shape_37 },
            { t: this.shape_36 },
            { t: this.shape_35 },
            { t: this.shape_34 },
            { t: this.shape_33 },
            { t: this.shape_32 },
            { t: this.shape_31 },
            { t: this.shape_30 },
            { t: this.shape_29 },
            { t: this.shape_28 },
            { t: this.shape_27 },
            { t: this.shape_26 },
            { t: this.shape_25 },
            { t: this.shape_24 },
            { t: this.shape_23 },
            { t: this.shape_22 },
            { t: this.shape_21 },
            { t: this.shape_20 },
            { t: this.shape_19 },
            { t: this.shape_18 },
            { t: this.shape_17 },
            { t: this.shape_16 },
            { t: this.shape_15 },
            { t: this.shape_14 },
            { t: this.shape_13 },
            { t: this.shape_12 },
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-230.5, -37.6, 520.4, 80.4);

  (lib.Tween12 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#333333")
      .s()
      .p(
        "AggBLQgOgIgLgKQgJgMgGgOQgGgPAAgQQAAgPAGgPQAFgPALgLQAKgLAOgHQAPgGARAAQARAAAOAGQAPAHALALQAKALAGAPQAGAPAAAPQAAAQgGAPQgGAOgKAMQgKAKgPAIQgOAGgSAAQgRAAgPgGgAgUg1QgJAFgHAIQgHAIgEALQgEAKAAALQAAANAEAKQAEAKAHAIQAHAIAJAEQAKAFAKAAQAKAAAKgFQAJgEAIgIQAGgHAFgLQAEgLAAgMQAAgLgEgLQgFgKgGgIQgIgJgJgEQgKgEgKAAQgKAAgKAEg"
      );
    this.shape.setTransform(231.05, 44);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#333333")
      .s()
      .p(
        "AgkBpQgOgIgKgKQgJgMgGgOQgGgPAAgQQAAgQAGgOQAFgPAJgMQAKgLANgGQANgGAPAAQASAAAPAJQAPAKAJAOIAAhdIAaAAIAAC5QAAAKAJAAIAAAXIgHABIgFAAQgIAAgGgFQgGgFAAgIIAAgMQgJAPgPAIQgQAJgQAAQgQAAgOgGgAgXgXQgKAFgGAJQgHAIgEAJQgDALAAALQAAAMAEALQAEALAHAHQAHAIAKAEQAKAFALAAQAHAAAHgCQAIgDAHgFQAGgFAFgHQAFgGACgHIAAgtQgDgIgFgFQgGgHgHgFQgGgFgIgDQgHgCgHAAQgMAAgJAEg"
      );
    this.shape_1.setTransform(212.475, 41);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#333333")
      .s()
      .p(
        "AgkBpQgOgIgKgKQgJgMgGgOQgGgPAAgQQAAgQAGgOQAFgPAJgMQAKgLANgGQANgGAPAAQASAAAPAJQAPAKAJAOIAAhdIAaAAIAAC5QAAAKAJAAIAAAXIgHABIgFAAQgIAAgGgFQgGgFAAgIIAAgMQgJAPgPAIQgQAJgQAAQgQAAgOgGgAgXgXQgKAFgGAJQgHAIgEAJQgDALAAALQAAAMAEALQAEALAHAHQAHAIAKAEQAKAFALAAQAHAAAHgCQAIgDAHgFQAGgFAFgHQAFgGACgHIAAgtQgDgIgFgFQgGgHgHgFQgGgFgIgDQgHgCgHAAQgMAAgJAEg"
      );
    this.shape_2.setTransform(186.075, 41);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#333333")
      .s()
      .p(
        "AgfBLQgPgHgKgLQgKgLgHgPQgFgPAAgQQAAgQAFgOQAHgPAKgMQALgLAPgGQAOgGARAAQARAAAPAGQAPAHAKALQAKALAFAPQAGAOAAAPIAAAGIgBADIiAAAQAAANAFAJQAEAJAIAIQAHAGAJAFQAJADAJAAIAOgBIANgGQAHgDAEgFQAEgFADgGIAXAGQgEAJgGAIQgHAGgKAGQgIAFgLADQgLADgMAAQgQAAgPgGgAA2gKQgBgLgEgJQgFgKgHgHQgHgGgJgEQgJgDgLAAQgKAAgJADQgJAEgHAHQgHAHgFAJQgEAJgBALIBpAAIAAAAg"
      );
    this.shape_3.setTransform(168.1, 44);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#333333")
      .s()
      .p(
        "AghBLQgTgFgMgMIALgRQANAKAOAGQAOAEAOAAQARABAKgIQALgGAAgNQAAgFgDgEQgDgEgFgDIgOgFIgTgGIgXgGQgLgDgGgEQgHgFgDgGQgDgHAAgIQAAgMAEgKQAFgIAIgHQAJgGALgDQAKgDAMAAQARAAAQAGQAPAFALAKIgNAPQgJgIgMgFQgNgEgNAAQgNAAgKAGQgKAGAAANQAAAGACADQACAEAEADIAMAFIAQAEIAbAIQALADAIAFQAIAFAEAGQADAHAAAKQABAWgSANQgQANgdAAQgSAAgSgGg"
      );
    this.shape_4.setTransform(151.6, 44);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#333333").s().p("AgIAdIAGgbIgJAAIAAgeIAXAAIAAAeIgJAbg");
    this.shape_5.setTransform(133.6, 51.35);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#333333")
      .s()
      .p("AgOBhQgLgIAAgQIAAhpIgVAAIAAgUIAVAAIAAg0IAZAAIAAA0IAjAAIAAAUIgjAAIAABhQABAIAFAEQAFAEAHAAQAIAAAGgDIAJgEIAGAVIgGADIgJAEIgKACIgNABQgNAAgKgIg");
    this.shape_6.setTransform(125.375, 41.475);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f("#333333").s().p("AgMBuIAAicIAaAAIAACcgAgMhLIAAgiIAaAAIAAAig");
    this.shape_7.setTransform(116.45, 40.85);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f("#333333").s().p("AgWBmQgJgIAAgRIAAi7IAaAAIAACyQAAAIAFAGQADAEAJAAIAIgBIAIgCIAEAVIgPAFIgQACQgPAAgIgJg");
    this.shape_8.setTransform(109.875, 40.95);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#333333")
      .s()
      .p(
        "AgfBLQgPgHgKgLQgKgLgHgPQgFgPAAgQQAAgQAFgOQAHgPAKgMQALgLAPgGQAOgGARAAQARAAAPAGQAPAHAKALQAKALAGAPQAFAOAAAPIAAAGIgBADIiAAAQAAANAFAJQAFAJAHAIQAHAGAJAFQAKADAJAAIANgBIAOgGQAGgDAEgFQAFgFACgGIAXAGQgEAJgGAIQgIAGgJAGQgIAFgLADQgLADgMAAQgQAAgPgGgAA2gKQgBgLgEgJQgFgKgHgHQgHgGgJgEQgJgDgLAAQgKAAgJADQgJAEgHAHQgHAHgFAJQgEAJgBALIBpAAIAAAAg"
      );
    this.shape_9.setTransform(95.75, 44);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#333333")
      .s()
      .p(
        "AgtBnQgRgIgLgQIAQgOQAJAOAPAGQAOAIARgBQAKAAAKgCQAKgEAHgFQAHgHAEgJQAFgIAAgNIAAgbQgFAGgGAGQgGAHgHADQgHAFgJABQgIADgHAAQgQAAgNgHQgOgHgJgKQgKgMgFgNQgFgPAAgPQAAgQAFgPQAFgPAKgMQAJgLAOgGQANgGAQAAQATAAAOAJQAPAKAKAOIAAgeIAXAAIAACZQAAARgGAMQgGANgLAJQgLAJgPAEQgOAFgQAAQgaAAgRgKgAgUhVQgJAGgHAIQgGAJgEAKQgEALAAAKQAAANAFAKQAEAKAHAHQAHAIAKAEQAKAFAKAAQAIAAAIgDQAIgDAHgFQAGgFAFgGQAEgGACgGIAAgtQgEgIgFgHQgFgGgHgFQgGgFgIgDQgHgCgIAAQgLAAgKAEg"
      );
    this.shape_10.setTransform(69.375, 47.2);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#333333")
      .s()
      .p(
        "AAqBQIAAhXQAAgagIgKQgIgMgPAAQgIAAgHADQgIADgIAGQgHAFgFAHQgFAIgDAJIAABeIgbAAIAAicIAZAAIAAAiQAIgRASgKQAQgJAWAAQANAAAJAEQAJAFAFAJQAFAJADAMQACAMAAAOIAABdg"
      );
    this.shape_11.setTransform(51.75, 43.85);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics.f("#333333").s().p("AgMBuIAAicIAaAAIAACcgAgMhLIAAgiIAaAAIAAAig");
    this.shape_12.setTransform(39.4, 40.85);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#333333")
      .s()
      .p(
        "AgZBLQgPgIgKgKQgLgMgGgOQgFgPAAgQQAAgQAFgPQAGgOAKgMQALgLAOgGQAPgGARAAQAXAAARAKQARALAJARIgaAIQgGgLgLgGQgKgHgOABQgJAAgKAEQgJAFgIAHQgGAIgEALQgEAKAAAMQAAALAEAMQAEALAHAHQAHAIAJAEQAKAFAKAAQAHAAAGgBIANgGIAJgIQAFgEABgFIAaAHQgDAJgHAIQgGAHgJAFQgJAFgKADQgLADgMAAQgQAAgPgGg"
      );
    this.shape_13.setTransform(27.775, 44);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics.f("#333333").s().p("AgMBuIAAicIAaAAIAACcgAgMhLIAAgiIAaAAIAAAig");
    this.shape_14.setTransform(15.9, 40.85);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#333333")
      .s()
      .p(
        "AghBLQgSgFgOgMIAMgRQAOAKAOAGQAOAEAOAAQAQABALgIQAKgGAAgNQAAgFgDgEQgCgEgGgDIgOgFIgTgGIgYgGQgKgDgHgEQgGgFgDgGQgDgHAAgIQAAgMAFgKQAEgIAIgHQAJgGAKgDQALgDAMAAQASAAAPAGQAPAFAKAKIgLAPQgKgIgNgFQgLgEgNAAQgOAAgKAGQgKAGAAANQAAAGACADQACAEAFADIALAFIAQAEIAbAIQALADAIAFQAIAFADAGQAFAHAAAKQgBAWgQANQgRANgdAAQgRAAgTgGg"
      );
    this.shape_15.setTransform(4.95, 44);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics.f("#333333").s().p("AgMBuIAAicIAaAAIAACcgAgMhLIAAgiIAaAAIAAAig");
    this.shape_16.setTransform(-5.8, 40.85);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#333333")
      .s()
      .p(
        "AhNBwIAAjcIAYAAIAAAdQAKgOAPgJQAOgIARAAQAQAAAOAGQANAHAKALQAKALAGAOQAFAQABAPQAAARgGAOQgFAOgJALQgKALgMAHQgOAGgPABQgSAAgPgKQgPgKgJgPIAABggAgRhVQgIACgHAGQgHAEgFAHQgEAGgCAHIAAAtQAEAHAEAHQAGAGAHAFQAGAFAHADQAIACAIAAQAKAAAKgEQAJgFAHgJQAHgHADgKQAEgLABgLQAAgMgFgKQgEgLgHgIQgIgHgJgFQgKgFgKAAQgIAAgHADg"
      );
    this.shape_17.setTransform(-18.05, 47.05);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics.f("#333333").s().p("AgMBuIAAicIAaAAIAACcgAgMhLIAAgiIAaAAIAAAig");
    this.shape_18.setTransform(-31.35, 40.85);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f("#333333")
      .s()
      .p(
        "AgkBpQgOgIgKgKQgJgMgGgOQgGgPAAgQQAAgQAGgOQAFgPAJgMQAKgLANgGQANgGAPAAQASAAAPAJQAPAKAJAOIAAhdIAaAAIAAC5QAAAKAJAAIAAAXIgHABIgFAAQgIAAgGgFQgGgFAAgIIAAgMQgJAPgPAIQgQAJgQAAQgQAAgOgGgAgXgXQgKAFgGAJQgHAIgEAJQgDALAAALQAAAMAEALQAEALAHAHQAHAIAKAEQAKAFALAAQAHAAAHgCQAIgDAHgFQAGgFAFgHQAFgGACgHIAAgtQgDgIgFgFQgGgHgHgFQgGgFgIgDQgHgCgHAAQgMAAgJAEg"
      );
    this.shape_19.setTransform(-44.375, 41);

    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics
      .f("#333333")
      .s()
      .p(
        "AgnBOQgKgEgHgHQgHgGgEgKQgEgJAAgKQAAgLAFgIQAEgJAJgGQAJgGAMgEQAMgDAPAAQAKAAAMACQAMACAJADIAAgMQAAgTgLgLQgLgLgTAAQgXAAgbATIgIgSQAegUAfAAQAdAAASAQQARARAAAeIAAA+QAAAKAIAAIAAAXIgHABIgFAAQgIAAgFgEQgEgFgBgHIgBgLQgKAOgQAIQgPAHgTAAQgLAAgJgDgAgiAIQgMAIAAAOQAAAHADAFQACAGAFAEQAEAEAHADQAGACAHAAQANAAAMgFQANgFAGgJQAGgFAAgHIAAgXQgUgHgTAAQgUAAgNAIg"
      );
    this.shape_20.setTransform(-62.125, 44);

    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics.f("#333333").s().p("AgpBPIAAibIAZAAIAAAkQAIgRAMgJQAOgLAPgBIAFAAIAEABIAAAXQgVABgOAJQgOALgHAQIAABgg");
    this.shape_21.setTransform(-82.4, 43.9);

    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics
      .f("#333333")
      .s()
      .p("Ag8A/QgMgQAAghIAAhdIAaAAIAABYQAAAwAhAAQAQAAAOgKQAOgLAHgSIAAhhIAaAAIAAB7QABAKAIAAIAAAXIgHAAIgFABQgIAAgFgFQgGgFABgGIgBgTQgLASgRAJQgQAKgVAAQgYAAgNgRg");
    this.shape_22.setTransform(-97.35, 44.125);

    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics
      .f("#333333")
      .s()
      .p("AgOBhQgLgIAAgQIAAhpIgVAAIAAgUIAVAAIAAg0IAZAAIAAA0IAjAAIAAAUIgjAAIAABhQABAIAFAEQAFAEAHAAQAIAAAGgDIAJgEIAGAVIgGADIgJAEIgKACIgNABQgNAAgKgIg");
    this.shape_23.setTransform(-111.725, 41.475);

    this.shape_24 = new cjs.Shape();
    this.shape_24.graphics
      .f("#333333")
      .s()
      .p(
        "AgfBLQgPgHgKgLQgKgLgHgPQgFgPAAgQQAAgQAFgOQAHgPAKgMQALgLAOgGQAPgGARAAQASAAAOAGQAPAHAKALQAKALAGAPQAFAOAAAPIAAAGIgBADIiAAAQABANAEAJQAEAJAIAIQAHAGAJAFQAKADAJAAIANgBIAOgGQAFgDAFgFQAFgFACgGIAXAGQgEAJgHAIQgGAGgKAGQgIAFgLADQgLADgLAAQgRAAgPgGgAA3gKQgCgLgFgJQgEgKgHgHQgHgGgJgEQgKgDgKAAQgKAAgJADQgJAEgHAHQgHAHgFAJQgEAJgBALIBqAAIAAAAg"
      );
    this.shape_24.setTransform(-125.9, 44);

    this.shape_25 = new cjs.Shape();
    this.shape_25.graphics
      .f("#333333")
      .s()
      .p("AgOBhQgLgIAAgQIAAhpIgVAAIAAgUIAVAAIAAg0IAZAAIAAA0IAjAAIAAAUIgjAAIAABhQABAIAFAEQAFAEAHAAQAIAAAGgDIAJgEIAGAVIgGADIgJAEIgKACIgNABQgNAAgKgIg");
    this.shape_25.setTransform(-139.975, 41.475);

    this.shape_26 = new cjs.Shape();
    this.shape_26.graphics
      .f("#333333")
      .s()
      .p(
        "AgZBLQgPgIgKgKQgLgMgGgOQgFgPAAgQQAAgQAFgPQAGgOAKgMQALgLAOgGQAPgGARAAQAXAAARAKQARALAJARIgaAIQgGgLgLgGQgKgHgOABQgJAAgKAEQgJAFgIAHQgGAIgEALQgEAKAAAMQAAALAEAMQAEALAHAHQAHAIAJAEQAKAFAKAAQAHAAAGgBIANgGIAJgIQAFgEABgFIAaAHQgDAJgHAIQgGAHgJAFQgJAFgKADQgLADgMAAQgQAAgPgGg"
      );
    this.shape_26.setTransform(-153.625, 44);

    this.shape_27 = new cjs.Shape();
    this.shape_27.graphics
      .f("#333333")
      .s()
      .p(
        "AgfBLQgPgHgKgLQgKgLgHgPQgFgPAAgQQAAgQAFgOQAHgPAKgMQALgLAPgGQAOgGARAAQARAAAPAGQAPAHAKALQAKALAFAPQAGAOAAAPIAAAGIgBADIiAAAQAAANAFAJQAEAJAIAIQAHAGAJAFQAJADAJAAIAOgBIANgGQAHgDAEgFQAEgFADgGIAXAGQgEAJgGAIQgIAGgJAGQgIAFgLADQgLADgMAAQgQAAgPgGgAA2gKQgBgLgEgJQgFgKgHgHQgHgGgJgEQgJgDgLAAQgKAAgJADQgJAEgHAHQgHAHgFAJQgEAJgBALIBpAAIAAAAg"
      );
    this.shape_27.setTransform(-170.75, 44);

    this.shape_28 = new cjs.Shape();
    this.shape_28.graphics
      .f("#333333")
      .s()
      .p(
        "AghBLQgTgFgMgMIALgRQANAKAOAGQAOAEAOAAQARABAKgIQALgGAAgNQAAgFgDgEQgDgEgFgDIgOgFIgTgGIgXgGQgLgDgGgEQgHgFgDgGQgDgHAAgIQAAgMAEgKQAFgIAIgHQAJgGALgDQAKgDAMAAQARAAAQAGQAPAFALAKIgNAPQgJgIgMgFQgNgEgNAAQgNAAgKAGQgKAGAAANQAAAGACADQACAEAEADIAMAFIAQAEIAbAIQALADAIAFQAIAFAEAGQADAHAAAKQABAWgSANQgQANgdAAQgSAAgSgGg"
      );
    this.shape_28.setTransform(-187.25, 44);

    this.shape_29 = new cjs.Shape();
    this.shape_29.graphics
      .f("#333333")
      .s()
      .p(
        "AAqBQIAAhXQAAgagIgKQgIgMgPAAQgIAAgIADQgIADgHAGQgHAFgFAHQgFAIgDAJIAABeIgbAAIAAicIAZAAIAAAiQAIgRASgKQARgJAUAAQAOAAAJAEQAJAFAFAJQAFAJADAMQACAMAAAOIAABdg"
      );
    this.shape_29.setTransform(-203.3, 43.85);

    this.shape_30 = new cjs.Shape();
    this.shape_30.graphics
      .f("#333333")
      .s()
      .p(
        "AgfBLQgPgIgKgKQgKgMgHgOQgFgPAAgQQAAgPAFgPQAHgPAKgLQAKgLAPgHQAPgGAQAAQARAAAPAGQAOAHALALQAKALAGAPQAGAPAAAPQAAAQgGAPQgGAOgKAMQgLAKgOAIQgOAGgSAAQgRAAgOgGgAgUg1QgJAFgHAIQgHAIgEALQgEAKAAALQAAANAEAKQAEAKAHAIQAHAIAJAEQAKAFAKAAQAKAAAKgFQAKgEAGgIQAIgHAEgLQAEgLAAgMQAAgLgEgLQgEgKgIgIQgGgJgKgEQgKgEgKAAQgKAAgKAEg"
      );
    this.shape_30.setTransform(-221.15, 44);

    this.shape_31 = new cjs.Shape();
    this.shape_31.graphics
      .f("#333333")
      .s()
      .p(
        "AgZBLQgPgIgKgKQgLgMgGgOQgFgPAAgQQAAgQAFgPQAGgOAKgMQALgLAOgGQAPgGARAAQAXAAARAKQARALAJARIgaAIQgGgLgLgGQgKgHgOABQgJAAgKAEQgJAFgIAHQgGAIgEALQgEAKAAAMQAAALAEAMQAEALAHAHQAHAIAJAEQAKAFAKAAQAHAAAGgBIANgGIAJgIQAFgEABgFIAaAHQgDAJgHAIQgGAHgJAFQgJAFgKADQgLADgMAAQgQAAgPgGg"
      );
    this.shape_31.setTransform(-238.325, 44);

    this.shape_32 = new cjs.Shape();
    this.shape_32.graphics.f("#333333").s().p("AgIAdIAGgbIgKAAIAAgeIAYAAIAAAeIgJAbg");
    this.shape_32.setTransform(143.3, 10.15);

    this.shape_33 = new cjs.Shape();
    this.shape_33.graphics
      .f("#333333")
      .s()
      .p("AgOBhQgLgIAAgQIAAhpIgVAAIAAgUIAVAAIAAg0IAZAAIAAA0IAjAAIAAAUIgjAAIAABhQABAIAFAEQAFAEAHAAQAIAAAGgDIAJgEIAGAVIgGADIgJAEIgKACIgNABQgNAAgKgIg");
    this.shape_33.setTransform(135.075, 0.275);

    this.shape_34 = new cjs.Shape();
    this.shape_34.graphics
      .f("#333333")
      .s()
      .p(
        "AgfBLQgOgHgLgLQgLgLgFgPQgGgPAAgQQAAgQAGgPQAFgOALgMQALgLAOgGQAPgGARAAQASAAAOAGQAOAHALALQAKALAFAOQAGAPAAAPIAAAFIAAAFIiCAAQACALAEAKQAFAJAHAIQAHAGAJAFQAJADAJAAIAPgCIAMgFQAGgDAFgFQAEgFADgGIAXAGQgEAJgHAIQgHAGgIAGQgJAFgLADQgLADgLAAQgRAAgPgGgAA3gKQgBgLgGgKQgEgJgHgHQgHgGgKgEQgJgEgKABQgJgBgKAEQgJAEgHAHQgHAGgEAKQgFAJgBALIBqAAIAAAAg"
      );
    this.shape_34.setTransform(120.9, 2.8);

    this.shape_35 = new cjs.Shape();
    this.shape_35.graphics
      .f("#333333")
      .s()
      .p(
        "ABcBQIAAhXQAAgYgIgNQgIgLgQAAQgQAAgNALQgMAMgGASIAABeIgZAAIAAhXQAAgZgIgMQgIgLgPAAQgQAAgNALQgNALgFATIAABeIgbAAIAAicIAYAAIAAAhQAKgRAPgKQAPgJATAAQAUAAAMALQAKALADAQQAVglAngBQANABAJAEQAKAFAFAJQAFAJADAMQACAMAAAOIAABdg"
      );
    this.shape_35.setTransform(98.125, 2.65);

    this.shape_36 = new cjs.Shape();
    this.shape_36.graphics
      .f("#333333")
      .s()
      .p(
        "AgnBNQgKgEgHgGQgHgHgEgJQgEgJAAgKQAAgKAFgKQAEgJAJgFQAJgGAMgEQAMgDAPAAQAKAAAMACQAMACAJAEIAAgNQAAgTgLgLQgLgLgTAAQgXAAgbATIgIgSQAegUAfAAQAdAAASAQQARARAAAeIAAA/QAAAJAIAAIAAAXIgHABIgFAAQgIAAgFgEQgEgFgBgGIgBgMQgKAOgQAIQgPAHgTAAQgLAAgJgEgAgiAIQgMAJAAANQAAAHADAFQACAGAFAEQAEAEAHADQAGACAHAAQANAAAMgFQANgFAGgJQAGgGAAgGIAAgXQgUgHgTAAQgUAAgNAIg"
      );
    this.shape_36.setTransform(75.725, 2.8);

    this.shape_37 = new cjs.Shape();
    this.shape_37.graphics
      .f("#333333")
      .s()
      .p("AgOBhQgLgIAAgQIAAhpIgVAAIAAgUIAVAAIAAg0IAZAAIAAA0IAjAAIAAAUIgjAAIAABhQABAIAFAEQAFAEAHAAQAIAAAGgDIAJgEIAGAVIgGADIgJAEIgKACIgNABQgNAAgKgIg");
    this.shape_37.setTransform(54.975, 0.275);

    this.shape_38 = new cjs.Shape();
    this.shape_38.graphics.f("#333333").s().p("AgMBuIAAicIAaAAIAACcgAgMhMIAAghIAaAAIAAAhg");
    this.shape_38.setTransform(46.05, -0.35);

    this.shape_39 = new cjs.Shape();
    this.shape_39.graphics
      .f("#333333")
      .s()
      .p(
        "AghBLQgSgGgOgLIAMgSQAOALAOAGQAOAEAOAAQAQAAALgGQAKgHAAgMQAAgGgDgEQgCgEgGgDIgOgGIgTgEIgYgHQgKgDgHgEQgGgFgDgGQgDgGAAgKQAAgMAFgIQAEgJAIgHQAJgGAKgDQALgDAMAAQASAAAPAFQAPAGAKAKIgLAPQgKgJgNgEQgLgEgNAAQgOAAgKAGQgKAGAAAOQAAAFACAEQACAEAFACIALAFIAQAEIAbAHQALAEAIAEQAIAFADAHQAFAIAAAJQgBAWgQANQgSANgcAAQgRAAgTgGg"
      );
    this.shape_39.setTransform(35.1, 2.8);

    this.shape_40 = new cjs.Shape();
    this.shape_40.graphics.f("#333333").s().p("AgoBPIAAibIAZAAIAAAkQAHgQANgLQANgKAPgBIAFAAIADABIAAAXQgTABgQAKQgOAJgFASIAABfg");
    this.shape_40.setTransform(15.65, 2.7);

    this.shape_41 = new cjs.Shape();
    this.shape_41.graphics
      .f("#333333")
      .s()
      .p(
        "AgfBLQgPgIgLgKQgKgLgGgPQgFgPAAgQQAAgPAFgPQAHgPAKgLQAKgLAPgHQAOgGARAAQARAAAOAGQAQAHAKALQAKALAGAPQAGAPAAAPQAAAQgGAPQgFAPgLALQgKAKgPAIQgPAGgRAAQgRAAgOgGgAgUg1QgJAFgHAIQgHAHgEALQgEALAAAMQAAAMAEAKQAEAKAHAIQAHAIAJAFQAKAEAKAAQALAAAJgEQAJgFAIgIQAGgIAFgLQAEgKAAgMQAAgLgEgLQgFgKgGgJQgIgIgJgEQgJgEgLgBQgKABgKAEg"
      );
    this.shape_41.setTransform(0.45, 2.8);

    this.shape_42 = new cjs.Shape();
    this.shape_42.graphics.f("#333333").s().p("AgWBmQgJgIAAgRIAAi7IAaAAIAACyQAAAIAFAGQADAEAJAAIAIgBIAIgCIAEAVIgPAFIgQACQgPgBgIgIg");
    this.shape_42.setTransform(-11.675, -0.25);

    this.shape_43 = new cjs.Shape();
    this.shape_43.graphics
      .f("#333333")
      .s()
      .p(
        "AggBLQgOgIgKgKQgLgLgFgPQgGgPAAgQQAAgPAGgPQAFgPALgLQAKgLAOgHQAQgGAQAAQARAAAPAGQAPAHAKALQAKALAGAPQAGAPAAAPQAAAQgGAPQgGAPgKALQgLAKgOAIQgPAGgRAAQgRAAgPgGgAgTg1QgKAFgHAIQgHAHgEALQgEALAAAMQAAAMAEAKQAEAKAHAIQAHAIAKAFQAJAEAKAAQALAAAJgEQAJgFAHgIQAIgIAEgLQAEgKAAgMQAAgLgEgLQgEgKgIgJQgHgIgJgEQgJgEgLgBQgKABgJAEg"
      );
    this.shape_43.setTransform(-26.05, 2.8);

    this.shape_44 = new cjs.Shape();
    this.shape_44.graphics
      .f("#333333")
      .s()
      .p(
        "AgkBpQgOgIgKgKQgJgLgGgPQgGgPAAgQQAAgRAGgOQAFgOAJgMQAKgLANgGQANgGAPAAQASAAAPAKQAPAJAJAOIAAhdIAaAAIAAC6QAAAJAJAAIAAAXIgHABIgFAAQgIAAgGgFQgGgFAAgIIAAgMQgJAPgPAJQgQAIgQAAQgQAAgOgGgAgXgWQgKAFgGAHQgHAJgEAJQgDALAAAMQAAALAEAKQAEALAHAIQAHAIAKAFQAKAEALAAQAHAAAHgCQAIgDAHgFQAGgFAFgGQAFgHACgHIAAgtQgDgHgFgGQgGgHgHgFQgGgFgIgDQgHgDgHAAQgMAAgJAGg"
      );
    this.shape_44.setTransform(-44.625, -0.2);

    this.shape_45 = new cjs.Shape();
    this.shape_45.graphics
      .f("#333333")
      .s()
      .p(
        "ABcBQIAAhXQAAgYgIgNQgIgLgQAAQgQAAgNALQgMAMgGASIAABeIgZAAIAAhXQAAgZgIgMQgIgLgPAAQgQAAgNALQgNALgFATIAABeIgbAAIAAicIAYAAIAAAhQAKgRAPgKQAPgJATAAQAUAAAMALQAKALADAQQAVglAngBQANABAJAEQAKAFAFAJQAFAJADAMQACAMAAAOIAABdg"
      );
    this.shape_45.setTransform(-75.225, 2.65);

    this.shape_46 = new cjs.Shape();
    this.shape_46.graphics
      .f("#333333")
      .s()
      .p("Ag7A/QgNgQAAghIAAhdIAaAAIAABYQAAAwAiAAQAPAAAOgKQAOgLAHgSIAAhhIAaAAIAAB7QAAAKAJAAIAAAXIgHAAIgFABQgIAAgFgFQgFgFgBgGIAAgTQgLASgRAJQgQAKgUAAQgZAAgMgRg");
    this.shape_46.setTransform(-97.85, 2.925);

    this.shape_47 = new cjs.Shape();
    this.shape_47.graphics
      .f("#333333")
      .s()
      .p(
        "AghBLQgTgGgNgLIAMgSQAOALAOAGQAOAEAOAAQAQAAALgGQAKgHAAgMQAAgGgDgEQgCgEgGgDIgOgGIgTgEIgYgHQgKgDgGgEQgHgFgDgGQgDgGAAgKQAAgMAFgIQAFgJAHgHQAIgGALgDQALgDAMAAQASAAAPAFQAQAGAJAKIgMAPQgJgJgMgEQgMgEgNAAQgOAAgKAGQgKAGAAAOQAAAFACAEQACAEAFACIALAFIAQAEIAbAHQALAEAIAEQAIAFADAHQAFAIAAAJQgBAWgRANQgQANgdAAQgRAAgTgGg"
      );
    this.shape_47.setTransform(-114.65, 2.8);

    this.shape_48 = new cjs.Shape();
    this.shape_48.graphics
      .f("#333333")
      .s()
      .p(
        "AhNBwIAAjcIAYAAIAAAeQAJgPAPgJQAPgJARAAQARABANAGQANAHAKALQAKALAGAPQAFAOAAAQQABARgGAOQgFAPgJAKQgJALgNAHQgNAGgQAAQgSAAgPgJQgPgKgJgPIAABggAgRhVQgIADgHAFQgGAEgFAGQgGAHgBAHIAAAtQAEAIAEAFQAFAHAHAFQAHAFAIADQAHADAIAAQALgBAJgFQAJgEAIgIQAGgIAEgKQADgLAAgLQABgLgFgLQgEgLgHgHQgIgJgJgFQgKgEgLAAQgGAAgIADg"
      );
    this.shape_48.setTransform(-130.75, 5.85);

    this.shape_49 = new cjs.Shape();
    this.shape_49.graphics.f("#333333").s().p("AgNBuIAAicIAaAAIAACcgAgNhMIAAghIAaAAIAAAhg");
    this.shape_49.setTransform(-144.05, -0.35);

    this.shape_50 = new cjs.Shape();
    this.shape_50.graphics
      .f("#333333")
      .s()
      .p(
        "ABcBQIAAhXQAAgYgIgNQgIgLgQAAQgQAAgNALQgMAMgGASIAABeIgZAAIAAhXQAAgZgIgMQgIgLgPAAQgQAAgNALQgNALgFATIAABeIgbAAIAAicIAYAAIAAAhQAKgRAPgKQAPgJATAAQAUAAAMALQAKALADAQQAVglAngBQANABAJAEQAKAFAFAJQAFAJADAMQACAMAAAOIAABdg"
      );
    this.shape_50.setTransform(-168.825, 2.65);

    this.shape_51 = new cjs.Shape();
    this.shape_51.graphics
      .f("#333333")
      .s()
      .p(
        "AgfBLQgPgHgKgLQgKgLgHgPQgFgPAAgQQAAgQAFgPQAHgOAKgMQALgLAPgGQAOgGARAAQARAAAPAGQAPAHAKALQAKALAFAOQAGAPAAAPIAAAFIgBAFIiAAAQAAALAFAKQAEAJAIAIQAHAGAJAFQAJADAJAAIAOgCIANgFQAHgDAEgFQAEgFADgGIAXAGQgEAJgGAIQgIAGgJAGQgIAFgLADQgLADgMAAQgQAAgPgGgAA2gKQgBgLgEgKQgFgJgHgHQgHgGgJgEQgJgEgLABQgKgBgJAEQgJAEgHAHQgHAGgFAKQgEAJgBALIBpAAIAAAAg"
      );
    this.shape_51.setTransform(-191.45, 2.8);

    this.shape_52 = new cjs.Shape();
    this.shape_52.graphics.f("#333333").s().p("AgoBPIAAibIAYAAIAAAkQAJgQAMgLQANgKAPgBIAFAAIAEABIAAAXQgVABgOAKQgOAJgGASIAABfg");
    this.shape_52.setTransform(-205.05, 2.7);

    this.shape_53 = new cjs.Shape();
    this.shape_53.graphics
      .f("#333333")
      .s()
      .p(
        "AgfBLQgPgIgKgKQgKgLgHgPQgFgPAAgQQAAgPAFgPQAHgPAKgLQAKgLAPgHQAPgGAQAAQARAAAPAGQAOAHALALQAKALAGAPQAGAPAAAPQAAAQgGAPQgGAPgKALQgLAKgOAIQgOAGgSAAQgRAAgOgGgAgUg1QgJAFgHAIQgHAHgEALQgEALAAAMQAAAMAEAKQAEAKAHAIQAHAIAJAFQAKAEAKAAQAKAAAKgEQAKgFAGgIQAIgIAEgLQAEgKAAgMQAAgLgEgLQgEgKgIgJQgGgIgKgEQgKgEgKgBQgKABgKAEg"
      );
    this.shape_53.setTransform(-220.25, 2.8);

    this.shape_54 = new cjs.Shape();
    this.shape_54.graphics.f("#333333").s().p("AhIBrIAAjVIAbAAIAAC8IB2AAIAAAZg");
    this.shape_54.setTransform(-236.925, -0.05);

    this.shape_55 = new cjs.Shape();
    this.shape_55.graphics
      .f("#333333")
      .s()
      .p("AgKAaIgJgGQgEgEgCgFQgCgFAAgGQAAgFACgFQACgFAEgEIAJgGQAGgCAEAAQAGAAAFACIAJAGIAGAJQACAFAAAFQAAAGgCAFIgGAJIgJAGQgFACgGAAQgEAAgGgCg");
    this.shape_55.setTransform(-259.425, 0.175);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_55 },
            { t: this.shape_54 },
            { t: this.shape_53 },
            { t: this.shape_52 },
            { t: this.shape_51 },
            { t: this.shape_50 },
            { t: this.shape_49 },
            { t: this.shape_48 },
            { t: this.shape_47 },
            { t: this.shape_46 },
            { t: this.shape_45 },
            { t: this.shape_44 },
            { t: this.shape_43 },
            { t: this.shape_42 },
            { t: this.shape_41 },
            { t: this.shape_40 },
            { t: this.shape_39 },
            { t: this.shape_38 },
            { t: this.shape_37 },
            { t: this.shape_36 },
            { t: this.shape_35 },
            { t: this.shape_34 },
            { t: this.shape_33 },
            { t: this.shape_32 },
            { t: this.shape_31 },
            { t: this.shape_30 },
            { t: this.shape_29 },
            { t: this.shape_28 },
            { t: this.shape_27 },
            { t: this.shape_26 },
            { t: this.shape_25 },
            { t: this.shape_24 },
            { t: this.shape_23 },
            { t: this.shape_22 },
            { t: this.shape_21 },
            { t: this.shape_20 },
            { t: this.shape_19 },
            { t: this.shape_18 },
            { t: this.shape_17 },
            { t: this.shape_16 },
            { t: this.shape_15 },
            { t: this.shape_14 },
            { t: this.shape_13 },
            { t: this.shape_12 },
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-266.7, -19.6, 517.5, 80.4);

  (lib.Tween11 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#333333")
      .s()
      .p(
        "AgfBLQgPgIgKgKQgLgMgGgOQgFgPAAgQQAAgPAFgPQAHgPAKgLQAKgLAPgHQAPgGAQAAQARAAAPAGQAOAHALALQAKALAGAPQAGAPAAAPQAAAQgGAPQgGAOgKAMQgLAKgOAIQgPAGgRAAQgRAAgOgGgAgTg1QgKAFgHAIQgHAIgEALQgEAKAAALQAAANAEAKQAEAKAHAIQAHAIAKAEQAJAFAKAAQAKAAAKgFQAKgEAGgIQAIgHAEgLQAEgLAAgMQAAgLgEgLQgEgKgIgIQgGgJgKgEQgKgEgKAAQgKAAgJAEg"
      );
    this.shape.setTransform(231, 44);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#333333")
      .s()
      .p(
        "AgkBpQgOgIgKgKQgJgMgGgOQgGgPAAgQQAAgQAGgOQAFgPAJgMQAKgLANgGQANgGAPAAQASAAAPAJQAPAKAJAOIAAhdIAaAAIAAC5QAAAKAJAAIAAAXIgHABIgFAAQgIAAgGgFQgGgFAAgIIAAgMQgJAPgPAIQgQAJgQAAQgQAAgOgGgAgXgXQgKAFgGAJQgHAIgEAJQgDALAAALQAAAMAEALQAEALAHAHQAHAIAKAEQAKAFALAAQAHAAAHgCQAIgDAHgFQAGgFAFgHQAFgGACgHIAAgtQgDgIgFgFQgGgHgHgFQgGgFgIgDQgHgCgHAAQgMAAgJAEg"
      );
    this.shape_1.setTransform(212.425, 41);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#333333")
      .s()
      .p(
        "AgkBpQgOgIgKgKQgJgMgGgOQgGgPAAgQQAAgQAGgOQAFgPAJgMQAKgLANgGQANgGAPAAQASAAAPAJQAPAKAJAOIAAhdIAaAAIAAC5QAAAKAJAAIAAAXIgHABIgFAAQgIAAgGgFQgGgFAAgIIAAgMQgJAPgPAIQgQAJgQAAQgQAAgOgGgAgXgXQgKAFgGAJQgHAIgEAJQgDALAAALQAAAMAEALQAEALAHAHQAHAIAKAEQAKAFALAAQAHAAAHgCQAIgDAHgFQAGgFAFgHQAFgGACgHIAAgtQgDgIgFgFQgGgHgHgFQgGgFgIgDQgHgCgHAAQgMAAgJAEg"
      );
    this.shape_2.setTransform(186.025, 41);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#333333")
      .s()
      .p(
        "AgfBLQgOgHgLgLQgLgLgFgPQgGgPAAgQQAAgQAGgOQAFgPALgMQALgLAOgGQAPgGARAAQASAAAOAGQAOAHALALQAKALAGAPQAFAOAAAPIAAAGIgBADIiBAAQACANAEAJQAEAJAIAIQAHAGAJAFQAJADAKAAIANgBIAOgGQAFgDAFgFQAEgFADgGIAXAGQgEAJgHAIQgGAGgKAGQgIAFgLADQgLADgLAAQgRAAgPgGgAA3gKQgCgLgFgJQgEgKgHgHQgHgGgKgEQgJgDgKAAQgJAAgKADQgJAEgHAHQgHAHgEAJQgFAJgBALIBqAAIAAAAg"
      );
    this.shape_3.setTransform(168.05, 44);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#333333")
      .s()
      .p(
        "AghBLQgSgFgOgMIAMgRQANAKAOAGQAPAEAOAAQAQABALgIQAKgGAAgNQAAgFgDgEQgCgEgGgDIgOgFIgSgGIgZgGQgKgDgHgEQgGgFgDgGQgDgHAAgIQAAgMAEgKQAFgIAJgHQAHgGALgDQAMgDALAAQARAAAQAGQAPAFAKAKIgLAPQgKgIgNgFQgMgEgMAAQgOAAgKAGQgKAGAAANQAAAGACADQACAEAFADIALAFIAQAEIAbAIQAMADAHAFQAIAFADAGQAFAHAAAKQAAAWgRANQgRANgdAAQgSAAgSgGg"
      );
    this.shape_4.setTransform(151.55, 44);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#333333").s().p("AgIAdIAGgbIgJAAIAAgeIAYAAIAAAeIgJAbg");
    this.shape_5.setTransform(133.55, 51.35);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#333333")
      .s()
      .p("AgOBhQgLgIAAgQIAAhpIgVAAIAAgUIAVAAIAAg0IAZAAIAAA0IAjAAIAAAUIgjAAIAABhQABAIAFAEQAFAEAHAAQAIAAAGgDIAJgEIAGAVIgGADIgJAEIgKACIgNABQgNAAgKgIg");
    this.shape_6.setTransform(125.325, 41.475);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f("#333333").s().p("AgNBuIAAicIAaAAIAACcgAgNhLIAAgiIAaAAIAAAig");
    this.shape_7.setTransform(116.4, 40.85);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f("#333333").s().p("AgWBmQgJgIAAgRIAAi7IAaAAIAACyQAAAIAFAGQADAEAJAAIAIgBIAIgCIAEAVIgPAFIgQACQgPAAgIgJg");
    this.shape_8.setTransform(109.825, 40.95);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#333333")
      .s()
      .p(
        "AgfBLQgOgHgLgLQgLgLgFgPQgGgPAAgQQAAgQAGgOQAFgPALgMQALgLAOgGQAPgGARAAQASAAAOAGQAOAHALALQAKALAFAPQAGAOAAAPIAAAGIAAADIiCAAQACANAEAJQAFAJAHAIQAHAGAJAFQAJADAJAAIAPgBIAMgGQAGgDAFgFQAEgFADgGIAXAGQgEAJgHAIQgHAGgIAGQgJAFgLADQgLADgLAAQgRAAgPgGgAA3gKQgBgLgGgJQgEgKgHgHQgHgGgKgEQgJgDgKAAQgJAAgKADQgJAEgHAHQgHAHgEAJQgFAJgBALIBqAAIAAAAg"
      );
    this.shape_9.setTransform(95.7, 44);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#333333")
      .s()
      .p(
        "AgtBnQgRgIgLgQIAQgOQAJAOAPAGQAOAIARgBQAKAAAKgCQAKgEAHgFQAHgHAEgJQAFgIAAgNIAAgbQgFAGgGAGQgGAHgHADQgHAFgJABQgIADgHAAQgQAAgNgHQgOgHgJgKQgKgMgFgNQgFgPAAgPQAAgQAFgPQAFgPAKgMQAJgLAOgGQANgGAQAAQATAAAOAJQAPAKAKAOIAAgeIAXAAIAACZQAAARgGAMQgGANgLAJQgLAJgPAEQgOAFgQAAQgaAAgRgKgAgUhVQgJAGgHAIQgGAJgEAKQgEALAAAKQAAANAFAKQAEAKAHAHQAHAIAKAEQAKAFAKAAQAIAAAIgDQAIgDAHgFQAGgFAFgGQAEgGACgGIAAgtQgEgIgFgHQgFgGgHgFQgGgFgIgDQgHgCgIAAQgLAAgKAEg"
      );
    this.shape_10.setTransform(69.325, 47.2);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#333333")
      .s()
      .p(
        "AAqBQIAAhXQAAgagIgKQgHgMgQAAQgIAAgIADQgHADgHAGQgIAFgFAHQgGAIgCAJIAABeIgbAAIAAicIAYAAIAAAiQAJgRASgKQARgJAUAAQAOAAAJAEQAJAFAFAJQAGAJACAMQACAMAAAOIAABdg"
      );
    this.shape_11.setTransform(51.7, 43.85);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics.f("#333333").s().p("AgNBuIAAicIAaAAIAACcgAgNhLIAAgiIAaAAIAAAig");
    this.shape_12.setTransform(39.35, 40.85);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#333333")
      .s()
      .p(
        "AgZBLQgPgIgKgKQgLgMgGgOQgFgPAAgQQAAgQAFgPQAGgOAKgMQALgLAOgGQAPgGARAAQAXAAARAKQARALAJARIgaAIQgGgLgLgGQgKgHgOABQgJAAgKAEQgJAFgIAHQgGAIgEALQgEAKAAAMQAAALAEAMQAEALAHAHQAHAIAJAEQAKAFAKAAQAHAAAGgBIANgGIAJgIQAFgEABgFIAaAHQgDAJgHAIQgGAHgJAFQgJAFgKADQgLADgMAAQgQAAgPgGg"
      );
    this.shape_13.setTransform(27.725, 44);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics.f("#333333").s().p("AgNBuIAAicIAaAAIAACcgAgNhLIAAgiIAaAAIAAAig");
    this.shape_14.setTransform(15.85, 40.85);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#333333")
      .s()
      .p(
        "AghBLQgTgFgMgMIALgRQANAKAPAGQANAEAOAAQARABAKgIQALgGAAgNQAAgFgDgEQgDgEgFgDIgOgFIgTgGIgXgGQgLgDgGgEQgHgFgDgGQgDgHAAgIQAAgMAEgKQAFgIAIgHQAJgGALgDQAKgDAMAAQARAAAQAGQAPAFALAKIgNAPQgJgIgMgFQgNgEgNAAQgNAAgKAGQgKAGAAANQAAAGACADQACAEAEADIAMAFIAQAEIAbAIQALADAIAFQAIAFAEAGQADAHAAAKQABAWgSANQgQANgdAAQgSAAgSgGg"
      );
    this.shape_15.setTransform(4.9, 44);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics.f("#333333").s().p("AgNBuIAAicIAaAAIAACcgAgNhLIAAgiIAaAAIAAAig");
    this.shape_16.setTransform(-5.85, 40.85);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#333333")
      .s()
      .p(
        "AhMBwIAAjcIAXAAIAAAdQAKgOAOgJQAPgIARAAQAQAAAOAGQAOAHAKALQAJALAFAOQAHAQgBAPQAAARgFAOQgFAOgJALQgJALgOAHQgNAGgPABQgTAAgPgKQgOgKgIgPIAABggAgRhVQgIACgGAGQgIAEgFAHQgEAGgBAHIAAAtQACAHAGAHQAEAGAHAFQAHAFAIADQAHACAIAAQAKAAAKgEQAKgFAGgJQAHgHAEgKQADgLAAgLQAAgMgEgKQgEgLgIgIQgGgHgKgFQgKgFgLAAQgHAAgHADg"
      );
    this.shape_17.setTransform(-18.1, 47.05);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics.f("#333333").s().p("AgNBuIAAicIAaAAIAACcgAgNhLIAAgiIAaAAIAAAig");
    this.shape_18.setTransform(-31.4, 40.85);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f("#333333")
      .s()
      .p(
        "AgkBpQgOgIgKgKQgJgMgGgOQgGgPAAgQQAAgQAGgOQAFgPAJgMQAKgLANgGQANgGAPAAQASAAAPAJQAPAKAJAOIAAhdIAaAAIAAC5QAAAKAJAAIAAAXIgHABIgFAAQgIAAgGgFQgGgFAAgIIAAgMQgJAPgPAIQgQAJgQAAQgQAAgOgGgAgXgXQgKAFgGAJQgHAIgEAJQgDALAAALQAAAMAEALQAEALAHAHQAHAIAKAEQAKAFALAAQAHAAAHgCQAIgDAHgFQAGgFAFgHQAFgGACgHIAAgtQgDgIgFgFQgGgHgHgFQgGgFgIgDQgHgCgHAAQgMAAgJAEg"
      );
    this.shape_19.setTransform(-44.425, 41);

    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics
      .f("#333333")
      .s()
      .p(
        "AgnBOQgKgEgHgHQgHgGgEgKQgEgJAAgKQAAgLAFgIQAEgJAJgGQAJgGAMgEQAMgDAPAAQAKAAAMACQAMACAJADIAAgMQAAgTgLgLQgLgLgTAAQgXAAgbATIgIgSQAegUAfAAQAdAAASAQQARARAAAeIAAA+QAAAKAIAAIAAAXIgHABIgFAAQgIAAgFgEQgEgFgBgHIgBgLQgKAOgQAIQgPAHgTAAQgLAAgJgDgAgiAIQgMAIAAAOQAAAHADAFQACAGAFAEQAEAEAHADQAGACAHAAQANAAAMgFQANgFAGgJQAGgFAAgHIAAgXQgUgHgTAAQgUAAgNAIg"
      );
    this.shape_20.setTransform(-62.175, 44);

    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics.f("#333333").s().p("AgoBPIAAibIAZAAIAAAkQAHgRANgJQANgLAPgBIAFAAIADABIAAAXQgTABgQAJQgOALgFAQIAABgg");
    this.shape_21.setTransform(-82.45, 43.9);

    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics
      .f("#333333")
      .s()
      .p("Ag7A/QgNgQAAghIAAhdIAaAAIAABYQAAAwAiAAQAPAAAOgKQAOgLAHgSIAAhhIAaAAIAAB7QAAAKAJAAIAAAXIgHAAIgFABQgIAAgFgFQgFgFgBgGIAAgTQgLASgRAJQgQAKgUAAQgZAAgMgRg");
    this.shape_22.setTransform(-97.4, 44.125);

    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics
      .f("#333333")
      .s()
      .p("AgOBhQgLgIAAgQIAAhpIgVAAIAAgUIAVAAIAAg0IAZAAIAAA0IAjAAIAAAUIgjAAIAABhQABAIAFAEQAFAEAHAAQAIAAAGgDIAJgEIAGAVIgGADIgJAEIgKACIgNABQgNAAgKgIg");
    this.shape_23.setTransform(-111.775, 41.475);

    this.shape_24 = new cjs.Shape();
    this.shape_24.graphics
      .f("#333333")
      .s()
      .p(
        "AgfBLQgOgHgLgLQgLgLgFgPQgGgPAAgQQAAgQAGgOQAFgPALgMQALgLAPgGQAOgGARAAQARAAAPAGQAOAHALALQAKALAFAPQAGAOAAAPIAAAGIAAADIiCAAQABANAFAJQAFAJAHAIQAHAGAJAFQAJADAJAAIAPgBIAMgGQAHgDAEgFQAEgFADgGIAXAGQgEAJgGAIQgIAGgIAGQgJAFgLADQgLADgMAAQgQAAgPgGgAA2gKQAAgLgGgJQgEgKgHgHQgHgGgKgEQgJgDgKAAQgKAAgJADQgJAEgHAHQgHAHgEAJQgFAJgBALIBpAAIAAAAg"
      );
    this.shape_24.setTransform(-125.95, 44);

    this.shape_25 = new cjs.Shape();
    this.shape_25.graphics
      .f("#333333")
      .s()
      .p("AgOBhQgLgIAAgQIAAhpIgVAAIAAgUIAVAAIAAg0IAZAAIAAA0IAjAAIAAAUIgjAAIAABhQABAIAFAEQAFAEAHAAQAIAAAGgDIAJgEIAGAVIgGADIgJAEIgKACIgNABQgNAAgKgIg");
    this.shape_25.setTransform(-140.025, 41.475);

    this.shape_26 = new cjs.Shape();
    this.shape_26.graphics
      .f("#333333")
      .s()
      .p(
        "AgZBLQgPgIgKgKQgLgMgGgOQgFgPAAgQQAAgQAFgPQAGgOAKgMQALgLAOgGQAPgGARAAQAXAAARAKQARALAJARIgaAIQgGgLgLgGQgKgHgOABQgJAAgKAEQgJAFgIAHQgGAIgEALQgEAKAAAMQAAALAEAMQAEALAHAHQAHAIAJAEQAKAFAKAAQAHAAAGgBIANgGIAJgIQAFgEABgFIAaAHQgDAJgHAIQgGAHgJAFQgJAFgKADQgLADgMAAQgQAAgPgGg"
      );
    this.shape_26.setTransform(-153.675, 44);

    this.shape_27 = new cjs.Shape();
    this.shape_27.graphics
      .f("#333333")
      .s()
      .p(
        "AgfBLQgOgHgLgLQgLgLgFgPQgGgPAAgQQAAgQAGgOQAFgPALgMQALgLAOgGQAPgGARAAQASAAAOAGQAOAHALALQAKALAGAPQAFAOAAAPIAAAGIgBADIiBAAQACANAEAJQAEAJAIAIQAHAGAJAFQAJADAKAAIANgBIAOgGQAFgDAFgFQAEgFADgGIAXAGQgEAJgHAIQgGAGgKAGQgIAFgLADQgLADgLAAQgRAAgPgGgAA3gKQgCgLgFgJQgEgKgHgHQgHgGgKgEQgJgDgKAAQgJAAgKADQgJAEgHAHQgHAHgEAJQgFAJgBALIBqAAIAAAAg"
      );
    this.shape_27.setTransform(-170.8, 44);

    this.shape_28 = new cjs.Shape();
    this.shape_28.graphics
      .f("#333333")
      .s()
      .p(
        "AghBLQgSgFgOgMIAMgRQANAKAOAGQAOAEAPAAQAQABALgIQAKgGAAgNQAAgFgDgEQgCgEgGgDIgOgFIgSgGIgZgGQgKgDgHgEQgGgFgDgGQgDgHAAgIQAAgMAEgKQAFgIAJgHQAHgGALgDQAMgDALAAQARAAAQAGQAPAFAKAKIgLAPQgKgIgNgFQgMgEgMAAQgOAAgKAGQgKAGAAANQAAAGACADQACAEAFADIALAFIAQAEIAbAIQAMADAHAFQAIAFADAGQAFAHAAAKQAAAWgRANQgRANgdAAQgSAAgSgGg"
      );
    this.shape_28.setTransform(-187.3, 44);

    this.shape_29 = new cjs.Shape();
    this.shape_29.graphics
      .f("#333333")
      .s()
      .p(
        "AAqBQIAAhXQAAgagIgKQgHgMgQAAQgIAAgIADQgIADgGAGQgIAFgFAHQgGAIgCAJIAABeIgbAAIAAicIAYAAIAAAiQAJgRASgKQARgJAUAAQAOAAAJAEQAJAFAGAJQAFAJACAMQACAMAAAOIAABdg"
      );
    this.shape_29.setTransform(-203.35, 43.85);

    this.shape_30 = new cjs.Shape();
    this.shape_30.graphics
      .f("#333333")
      .s()
      .p(
        "AggBLQgOgIgLgKQgJgMgGgOQgGgPAAgQQAAgPAGgPQAFgPALgLQAKgLAOgHQAPgGARAAQARAAAOAGQAPAHALALQAKALAGAPQAGAPAAAPQAAAQgGAPQgGAOgKAMQgKAKgPAIQgOAGgSAAQgRAAgPgGgAgUg1QgJAFgHAIQgHAIgEALQgEAKAAALQAAANAEAKQAEAKAHAIQAHAIAJAEQAKAFAKAAQAKAAAKgFQAJgEAIgIQAGgHAFgLQAEgLAAgMQAAgLgEgLQgFgKgGgIQgIgJgJgEQgKgEgKAAQgKAAgKAEg"
      );
    this.shape_30.setTransform(-221.2, 44);

    this.shape_31 = new cjs.Shape();
    this.shape_31.graphics
      .f("#333333")
      .s()
      .p(
        "AgZBLQgPgIgKgKQgLgMgGgOQgFgPAAgQQAAgQAFgPQAGgOAKgMQALgLAOgGQAPgGARAAQAXAAARAKQARALAJARIgaAIQgGgLgLgGQgKgHgOABQgJAAgKAEQgJAFgIAHQgGAIgEALQgEAKAAAMQAAALAEAMQAEALAHAHQAHAIAJAEQAKAFAKAAQAHAAAGgBIANgGIAJgIQAFgEABgFIAaAHQgDAJgHAIQgGAHgJAFQgJAFgKADQgLADgMAAQgQAAgPgGg"
      );
    this.shape_31.setTransform(-238.375, 44);

    this.shape_32 = new cjs.Shape();
    this.shape_32.graphics.f("#333333").s().p("AgIAdIAGgbIgJAAIAAgeIAYAAIAAAeIgJAbg");
    this.shape_32.setTransform(143.25, 10.15);

    this.shape_33 = new cjs.Shape();
    this.shape_33.graphics
      .f("#333333")
      .s()
      .p("AgOBhQgLgIAAgQIAAhpIgVAAIAAgUIAVAAIAAg0IAZAAIAAA0IAjAAIAAAUIgjAAIAABhQABAIAFAEQAFAEAHAAQAIAAAGgDIAJgEIAGAVIgGADIgJAEIgKACIgNABQgNAAgKgIg");
    this.shape_33.setTransform(135.025, 0.275);

    this.shape_34 = new cjs.Shape();
    this.shape_34.graphics
      .f("#333333")
      .s()
      .p(
        "AgfBLQgPgHgKgLQgKgLgHgPQgFgPAAgQQAAgQAFgPQAHgOAKgMQALgLAPgGQAOgGARAAQARAAAPAGQAPAHAKALQAKALAFAOQAGAPAAAPIAAAFIgBAFIiAAAQAAALAFAKQAEAJAIAIQAHAGAJAFQAJADAJAAIAPgCIAMgFQAHgDAEgFQAEgFADgGIAXAGQgEAJgGAIQgHAGgKAGQgIAFgLADQgLADgMAAQgQAAgPgGgAA2gKQgBgLgEgKQgFgJgHgHQgHgGgJgEQgJgEgLABQgKgBgJAEQgJAEgHAHQgHAGgFAKQgEAJgBALIBpAAIAAAAg"
      );
    this.shape_34.setTransform(120.85, 2.8);

    this.shape_35 = new cjs.Shape();
    this.shape_35.graphics
      .f("#333333")
      .s()
      .p(
        "ABcBQIAAhXQAAgYgIgNQgIgLgQAAQgQAAgNALQgMAMgGASIAABeIgZAAIAAhXQAAgZgIgMQgIgLgPAAQgQAAgNALQgNALgFATIAABeIgbAAIAAicIAYAAIAAAhQAKgRAPgKQAPgJATAAQAUAAAMALQAKALADAQQAVglAngBQANABAJAEQAKAFAFAJQAFAJADAMQACAMAAAOIAABdg"
      );
    this.shape_35.setTransform(98.075, 2.65);

    this.shape_36 = new cjs.Shape();
    this.shape_36.graphics
      .f("#333333")
      .s()
      .p(
        "AgnBNQgKgEgHgGQgHgHgEgJQgEgJAAgKQAAgKAFgKQAEgJAJgFQAJgGAMgEQAMgDAPAAQAKAAAMACQAMACAJAEIAAgNQAAgTgLgLQgLgLgTAAQgXAAgbATIgIgSQAegUAfAAQAdAAASAQQARARAAAeIAAA/QAAAJAIAAIAAAXIgHABIgFAAQgIAAgFgEQgEgFgBgGIgBgMQgKAOgQAIQgPAHgTAAQgLAAgJgEgAgiAIQgMAJAAANQAAAHADAFQACAGAFAEQAEAEAHADQAGACAHAAQANAAAMgFQANgFAGgJQAGgGAAgGIAAgXQgUgHgTAAQgUAAgNAIg"
      );
    this.shape_36.setTransform(75.675, 2.8);

    this.shape_37 = new cjs.Shape();
    this.shape_37.graphics
      .f("#333333")
      .s()
      .p("AgOBhQgLgIAAgQIAAhpIgVAAIAAgUIAVAAIAAg0IAZAAIAAA0IAjAAIAAAUIgjAAIAABhQABAIAFAEQAFAEAHAAQAIAAAGgDIAJgEIAGAVIgGADIgJAEIgKACIgNABQgNAAgKgIg");
    this.shape_37.setTransform(54.925, 0.275);

    this.shape_38 = new cjs.Shape();
    this.shape_38.graphics.f("#333333").s().p("AgNBuIAAicIAaAAIAACcgAgNhMIAAghIAaAAIAAAhg");
    this.shape_38.setTransform(46, -0.35);

    this.shape_39 = new cjs.Shape();
    this.shape_39.graphics
      .f("#333333")
      .s()
      .p(
        "AghBLQgTgGgMgLIALgSQANALAOAGQAOAEAOAAQARAAAKgGQALgHAAgMQAAgGgDgEQgDgEgFgDIgOgGIgTgEIgXgHQgLgDgGgEQgHgFgDgGQgDgGAAgKQAAgMAEgIQAFgJAIgHQAJgGALgDQAKgDAMAAQARAAAQAFQAPAGALAKIgNAPQgJgJgMgEQgNgEgNAAQgNAAgKAGQgKAGAAAOQAAAFACAEQACAEAEACIAMAFIAQAEIAbAHQALAEAIAEQAIAFAEAHQADAIAAAJQABAWgSANQgQANgdAAQgSAAgSgGg"
      );
    this.shape_39.setTransform(35.05, 2.8);

    this.shape_40 = new cjs.Shape();
    this.shape_40.graphics.f("#333333").s().p("AgpBPIAAibIAZAAIAAAkQAJgQALgLQAOgKAPgBIAFAAIADABIAAAXQgTABgPAKQgPAJgGASIAABfg");
    this.shape_40.setTransform(15.6, 2.7);

    this.shape_41 = new cjs.Shape();
    this.shape_41.graphics
      .f("#333333")
      .s()
      .p(
        "AggBLQgOgIgKgKQgLgLgFgPQgGgPAAgQQAAgPAGgPQAFgPALgLQAKgLAOgHQAPgGARAAQARAAAOAGQAQAHAKALQAKALAGAPQAGAPAAAPQAAAQgGAPQgFAPgLALQgLAKgOAIQgPAGgRAAQgRAAgPgGgAgTg1QgKAFgHAIQgHAHgEALQgEALAAAMQAAAMAEAKQAEAKAHAIQAHAIAKAFQAJAEAKAAQALAAAJgEQAJgFAHgIQAHgIAFgLQAEgKAAgMQAAgLgEgLQgFgKgHgJQgHgIgJgEQgJgEgLgBQgKABgJAEg"
      );
    this.shape_41.setTransform(0.4, 2.8);

    this.shape_42 = new cjs.Shape();
    this.shape_42.graphics.f("#333333").s().p("AgWBmQgJgIAAgRIAAi7IAaAAIAACyQAAAIAFAGQADAEAJAAIAIgBIAIgCIAEAVIgPAFIgQACQgPgBgIgIg");
    this.shape_42.setTransform(-11.725, -0.25);

    this.shape_43 = new cjs.Shape();
    this.shape_43.graphics
      .f("#333333")
      .s()
      .p(
        "AgfBLQgPgIgLgKQgKgLgGgPQgFgPAAgQQAAgPAFgPQAHgPAKgLQAKgLAPgHQAOgGARAAQARAAAOAGQAQAHAKALQAKALAGAPQAGAPAAAPQAAAQgGAPQgFAPgLALQgKAKgPAIQgPAGgRAAQgRAAgOgGgAgUg1QgJAFgHAIQgHAHgEALQgEALAAAMQAAAMAEAKQAEAKAHAIQAHAIAJAFQAKAEAKAAQALAAAJgEQAJgFAIgIQAGgIAFgLQAEgKAAgMQAAgLgEgLQgFgKgGgJQgIgIgJgEQgJgEgLgBQgKABgKAEg"
      );
    this.shape_43.setTransform(-26.1, 2.8);

    this.shape_44 = new cjs.Shape();
    this.shape_44.graphics
      .f("#333333")
      .s()
      .p(
        "AgkBpQgOgIgKgKQgJgLgGgPQgGgPAAgQQAAgRAGgOQAFgOAJgMQAKgLANgGQANgGAPAAQASAAAPAKQAPAJAJAOIAAhdIAaAAIAAC6QAAAJAJAAIAAAXIgHABIgFAAQgIAAgGgFQgGgFAAgIIAAgMQgJAPgPAJQgQAIgQAAQgQAAgOgGgAgXgWQgKAFgGAHQgHAJgEAJQgDALAAAMQAAALAEAKQAEALAHAIQAHAIAKAFQAKAEALAAQAHAAAHgCQAIgDAHgFQAGgFAFgGQAFgHACgHIAAgtQgDgHgFgGQgGgHgHgFQgGgFgIgDQgHgDgHAAQgMAAgJAGg"
      );
    this.shape_44.setTransform(-44.675, -0.2);

    this.shape_45 = new cjs.Shape();
    this.shape_45.graphics
      .f("#333333")
      .s()
      .p(
        "ABcBQIAAhXQAAgYgIgNQgIgLgQAAQgQAAgNALQgMAMgGASIAABeIgZAAIAAhXQAAgZgIgMQgIgLgPAAQgQAAgNALQgNALgFATIAABeIgbAAIAAicIAYAAIAAAhQAKgRAPgKQAPgJATAAQAUAAAMALQAKALADAQQAVglAngBQANABAJAEQAKAFAFAJQAFAJADAMQACAMAAAOIAABdg"
      );
    this.shape_45.setTransform(-75.275, 2.65);

    this.shape_46 = new cjs.Shape();
    this.shape_46.graphics
      .f("#333333")
      .s()
      .p("Ag8A/QgMgQAAghIAAhdIAaAAIAABYQAAAwAhAAQAPAAAPgKQAOgLAHgSIAAhhIAbAAIAAB7QAAAKAIAAIAAAXIgHAAIgFABQgIAAgFgFQgGgFAAgGIAAgTQgLASgRAJQgQAKgVAAQgYAAgNgRg");
    this.shape_46.setTransform(-97.9, 2.925);

    this.shape_47 = new cjs.Shape();
    this.shape_47.graphics
      .f("#333333")
      .s()
      .p(
        "AghBLQgTgGgMgLIALgSQAOALANAGQAOAEAOAAQASAAAJgGQALgHAAgMQAAgGgDgEQgDgEgFgDIgOgGIgSgEIgYgHQgLgDgHgEQgGgFgDgGQgDgGAAgKQAAgMAEgIQAFgJAJgHQAHgGAMgDQAKgDAMAAQARAAAQAFQAQAGAKAKIgNAPQgJgJgNgEQgMgEgNAAQgNAAgKAGQgKAGAAAOQAAAFACAEQACAEAEACIAMAFIAQAEIAbAHQAMAEAHAEQAIAFAEAHQADAIAAAJQABAWgSANQgRANgcAAQgRAAgTgGg"
      );
    this.shape_47.setTransform(-114.7, 2.8);

    this.shape_48 = new cjs.Shape();
    this.shape_48.graphics
      .f("#333333")
      .s()
      .p(
        "AhMBwIAAjcIAXAAIAAAeQAJgPAQgJQAOgJARAAQAQABAOAGQAOAHAJALQAKALAFAPQAHAOAAAQQgBARgFAOQgFAPgJAKQgKALgNAHQgMAGgQAAQgTAAgPgJQgOgKgIgPIAABggAgRhVQgIADgGAFQgHAEgGAGQgEAHgBAHIAAAtQADAIAEAFQAFAHAIAFQAGAFAHADQAIADAIAAQAKgBAKgFQAKgEAGgIQAHgIADgKQAFgLAAgLQgBgLgEgLQgEgLgIgHQgHgJgJgFQgKgEgKAAQgIAAgHADg"
      );
    this.shape_48.setTransform(-130.8, 5.85);

    this.shape_49 = new cjs.Shape();
    this.shape_49.graphics.f("#333333").s().p("AgMBuIAAicIAaAAIAACcgAgMhMIAAghIAaAAIAAAhg");
    this.shape_49.setTransform(-144.1, -0.35);

    this.shape_50 = new cjs.Shape();
    this.shape_50.graphics
      .f("#333333")
      .s()
      .p(
        "ABcBQIAAhXQAAgYgIgNQgIgLgQAAQgQAAgNALQgMAMgGASIAABeIgZAAIAAhXQAAgZgIgMQgIgLgPAAQgQAAgNALQgNALgFATIAABeIgbAAIAAicIAYAAIAAAhQAKgRAPgKQAPgJATAAQAUAAAMALQAKALADAQQAVglAngBQANABAJAEQAKAFAFAJQAFAJADAMQACAMAAAOIAABdg"
      );
    this.shape_50.setTransform(-168.875, 2.65);

    this.shape_51 = new cjs.Shape();
    this.shape_51.graphics
      .f("#333333")
      .s()
      .p(
        "AgfBLQgOgHgLgLQgLgLgFgPQgGgPAAgQQAAgQAGgPQAFgOALgMQALgLAOgGQAPgGARAAQASAAAOAGQAOAHALALQAKALAGAOQAFAPAAAPIAAAFIgBAFIiBAAQACALAEAKQAEAJAIAIQAHAGAJAFQAJADAKAAIANgCIAOgFQAFgDAFgFQAEgFADgGIAXAGQgEAJgHAIQgGAGgKAGQgIAFgLADQgLADgLAAQgRAAgPgGgAA3gKQgCgLgFgKQgEgJgHgHQgHgGgKgEQgJgEgKABQgJgBgKAEQgJAEgHAHQgHAGgEAKQgFAJgBALIBqAAIAAAAg"
      );
    this.shape_51.setTransform(-191.5, 2.8);

    this.shape_52 = new cjs.Shape();
    this.shape_52.graphics.f("#333333").s().p("AgpBPIAAibIAaAAIAAAkQAHgQAMgLQAOgKAPgBIAFAAIADABIAAAXQgUABgPAKQgOAJgGASIAABfg");
    this.shape_52.setTransform(-205.1, 2.7);

    this.shape_53 = new cjs.Shape();
    this.shape_53.graphics
      .f("#333333")
      .s()
      .p(
        "AggBLQgOgIgLgKQgJgLgGgPQgGgPAAgQQAAgPAGgPQAFgPALgLQAKgLAOgHQAPgGARAAQARAAAOAGQAPAHALALQAKALAGAPQAGAPAAAPQAAAQgGAPQgGAPgKALQgKAKgPAIQgOAGgSAAQgRAAgPgGgAgUg1QgJAFgHAIQgHAHgEALQgEALAAAMQAAAMAEAKQAEAKAHAIQAHAIAJAFQAKAEAKAAQAKAAAKgEQAJgFAIgIQAGgIAFgLQAEgKAAgMQAAgLgEgLQgFgKgGgJQgIgIgJgEQgKgEgKgBQgKABgKAEg"
      );
    this.shape_53.setTransform(-220.3, 2.8);

    this.shape_54 = new cjs.Shape();
    this.shape_54.graphics.f("#333333").s().p("AhIBrIAAjVIAbAAIAAC8IB2AAIAAAZg");
    this.shape_54.setTransform(-236.975, -0.05);

    this.shape_55 = new cjs.Shape();
    this.shape_55.graphics
      .f("#333333")
      .s()
      .p("AgKAaIgJgGQgEgEgCgFQgCgFAAgGQAAgFACgFQACgFAEgEIAJgGQAGgCAEAAQAGAAAFACIAJAGIAGAJQACAFAAAFQAAAGgCAFIgGAJIgJAGQgFACgGAAQgEAAgGgCg");
    this.shape_55.setTransform(-259.475, 0.175);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_55 },
            { t: this.shape_54 },
            { t: this.shape_53 },
            { t: this.shape_52 },
            { t: this.shape_51 },
            { t: this.shape_50 },
            { t: this.shape_49 },
            { t: this.shape_48 },
            { t: this.shape_47 },
            { t: this.shape_46 },
            { t: this.shape_45 },
            { t: this.shape_44 },
            { t: this.shape_43 },
            { t: this.shape_42 },
            { t: this.shape_41 },
            { t: this.shape_40 },
            { t: this.shape_39 },
            { t: this.shape_38 },
            { t: this.shape_37 },
            { t: this.shape_36 },
            { t: this.shape_35 },
            { t: this.shape_34 },
            { t: this.shape_33 },
            { t: this.shape_32 },
            { t: this.shape_31 },
            { t: this.shape_30 },
            { t: this.shape_29 },
            { t: this.shape_28 },
            { t: this.shape_27 },
            { t: this.shape_26 },
            { t: this.shape_25 },
            { t: this.shape_24 },
            { t: this.shape_23 },
            { t: this.shape_22 },
            { t: this.shape_21 },
            { t: this.shape_20 },
            { t: this.shape_19 },
            { t: this.shape_18 },
            { t: this.shape_17 },
            { t: this.shape_16 },
            { t: this.shape_15 },
            { t: this.shape_14 },
            { t: this.shape_13 },
            { t: this.shape_12 },
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-266.8, -19.6, 516.8, 80.4);

  (lib.Tween10 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.Image_1();
    this.instance.parent = this;
    this.instance.setTransform(-220.2, -175.65, 0.2399, 0.2398);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-220.2, -175.6, 440.4, 351.29999999999995);

  (lib.Tween9 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.Image_1();
    this.instance.parent = this;
    this.instance.setTransform(-220.2, -175.65, 0.2399, 0.2398);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-220.2, -175.6, 440.4, 351.29999999999995);

  (lib.Tween6 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#333333")
      .s()
      .p(
        "AguBtQgTgLgMgQQgMgQgFgWQgFgVAAgWIAAh2IAeAAIAAB2QAAARADAQQAEARAIANQAIAMANAIQAOAHATABQAUgBAOgHQANgJAIgMQAIgNAEgQQADgQAAgRIAAh2IAeAAIAAB2QAAAYgGAVQgFAVgMAQQgMAQgTAKQgTAJgbAAQgbAAgTgJg"
      );
    this.shape.setTransform(152.025, 0);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#333333").s().p("ABKB1IiPiyIAACyIgdAAIAAjpIAXAAICRC1IAAi1IAdAAIAADpg");
    this.shape_1.setTransform(126.85, -0.075);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#333333").s().p("AhOB1IAAjpICaAAIAAAaIh9AAIAABMIBtAAIAAAYIhtAAIAABRICAAAIAAAag");
    this.shape_2.setTransform(104.95, -0.075);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#333333").s().p("ABWB1IAAi0IhNCKIgQAAIhPiKIAAC0IgdAAIAAjpIAfAAIBUCXIBViXIAfAAIAADpg");
    this.shape_3.setTransform(79.825, -0.075);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#333333")
      .s()
      .p(
        "Ag6B0QgNgFgKgJQgLgJgFgMQgGgMAAgOQAAgLAEgKQAEgKAGgIQAHgJAHgHIASgMIgNgQIgJgOIgGgMIgCgMQAAgMAGgJQAEgKAIgHQAIgHALgEQALgEANAAQAMAAAKADQAKAEAHAGQAIAGAFAJQAEAJAAALQAAAKgDAIQgFAJgGAHQgHAIgIAGIgSANIA6A+QAHgMADgOQAEgOAAgPIAYAAQgBAVgEASQgGATgJAPIAtAvIgmAAIgZgZQgOAOgRAHQgRAHgUAAQgRAAgOgEgAhCAcQgJAMAAAQQAAAJAEAIQAFAIAHAGQAHAFAJADQAJACAKAAQAPAAALgGQAOgFAKgLIhChGQgPALgLAMgAgyhYQgJAJAAAMIAAAHIAFAIIAHALIANAOQASgLAKgKQAJgKAAgMQAAgMgHgHQgJgIgNAAQgPAAgJAJg"
      );
    this.shape_4.setTransform(46.55, -0.075);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#333333").s().p("AhPB1IAAjpICcAAIAAAaIh+AAIAABMIBtAAIAAAYIhtAAIAABRICBAAIAAAag");
    this.shape_5.setTransform(17.15, -0.075);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#333333")
      .s()
      .p(
        "AgkBtQgUgLgPgQQgOgRgIgVQgJgWAAgWQAAgXAIgWQAJgVAOgQQAPgQAUgKQAUgKAWAAQAiAAAWAPQAWAOAMAWIgXAQQgLgUgRgKQgSgKgVAAQgRAAgPAIQgOAIgKAMQgLANgFARQgGAQAAARQAAATAGARQAHAQALANQAKANAPAHQAPAHARAAQAmAAAfglIAAggIgzAAIAAgXIBMAAIAAB1IgZAAIAAgfQgfAhgpAAQgWAAgUgKg"
      );
    this.shape_6.setTransform(-5.575, -0.075);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f("#333333").s().p("ABNB1IgchEIhhAAIgbBEIghAAIBhjpIAYAAIBfDpgAArAaIgrhsIgqBsIBVAAg");
    this.shape_7.setTransform(-28.3, -0.075);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#333333")
      .s()
      .p(
        "AhTB1IAAjpIBgAAQAQAAANAGQANAHAKAKQAJALAFAOQAFANAAAOQAAAOgFAOQgEANgKAKQgJALgMAGQgNAGgPAAIhGAAIAABUgAg2AHIBEAAQAJAAAIgEQAHgDAFgHQAFgGADgJQADgJAAgKQAAgKgDgJQgEgJgFgHQgGgGgIgEQgIgEgIAAIhCAAg"
      );
    this.shape_8.setTransform(-47.225, -0.075);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f("#333333").s().p("AhOB1IAAjpICaAAIAAAaIh9AAIAABMIBtAAIAAAYIhtAAIAABRICAAAIAAAag");
    this.shape_9.setTransform(-75.95, -0.075);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics.f("#333333").s().p("ABWB1IAAi0IhNCKIgQAAIhPiKIAAC0IgdAAIAAjpIAfAAIBUCXIBViXIAfAAIAADpg");
    this.shape_10.setTransform(-101.075, -0.075);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#333333")
      .s()
      .p(
        "AgsBtQgVgKgOgRQgPgQgHgWQgIgVAAgXQAAgWAIgWQAIgVAPgRQAPgQAVgKQAUgKAXAAQAYAAAUALQAUAKAPARQAPARAHAVQAIAVAAAVQAAAYgIAVQgIAWgPAQQgPAQgUAKQgUAKgYAAQgYAAgUgKgAgghTQgPAIgLANQgKANgGAQQgFARAAAQQAAASAFARQAGAQALANQAKANAPAIQAPAHARAAQATAAAPgIQAPgIAKgNQAKgNAGgRQAFgQAAgRQAAgRgFgQQgGgRgLgNQgLgMgOgIQgPgIgSAAQgSAAgOAIg"
      );
    this.shape_11.setTransform(-127.825, -0.075);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics.f("#333333").s().p("ABBB1IAAhqIiBAAIAABqIgdAAIAAjpIAdAAIAABlICBAAIAAhlIAdAAIAADpg");
    this.shape_12.setTransform(-152.375, -0.075);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_12 },
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-166.6, -21.3, 333.29999999999995, 42.7);

  (lib.Tween5 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#333333")
      .s()
      .p(
        "AguBtQgTgLgMgQQgMgQgFgWQgFgVAAgWIAAh2IAeAAIAAB2QAAARADAQQAEARAIANQAIAMANAIQAOAHATABQAUgBAOgHQANgJAIgMQAIgNAEgQQADgQAAgRIAAh2IAeAAIAAB2QAAAYgGAVQgFAVgMAQQgMAQgTAKQgTAJgbAAQgbAAgTgJg"
      );
    this.shape.setTransform(152.025, 0);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#333333").s().p("ABKB1IiPiyIAACyIgdAAIAAjpIAXAAICRC1IAAi1IAdAAIAADpg");
    this.shape_1.setTransform(126.85, -0.075);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#333333").s().p("AhOB1IAAjpICaAAIAAAaIh9AAIAABMIBtAAIAAAYIhtAAIAABRICAAAIAAAag");
    this.shape_2.setTransform(104.95, -0.075);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#333333").s().p("ABWB1IAAi0IhNCKIgQAAIhPiKIAAC0IgdAAIAAjpIAfAAIBUCXIBViXIAfAAIAADpg");
    this.shape_3.setTransform(79.825, -0.075);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#333333")
      .s()
      .p(
        "Ag6B0QgNgFgKgJQgLgJgFgMQgGgMAAgOQAAgLAEgKQAEgKAGgIQAHgJAHgHIASgMIgNgQIgJgOIgGgMIgCgMQAAgMAGgJQAEgKAIgHQAIgHALgEQALgEANAAQAMAAAKADQAKAEAHAGQAIAGAFAJQAEAJAAALQAAAKgDAIQgFAJgGAHQgHAIgIAGIgSANIA6A+QAHgMADgOQAEgOAAgPIAYAAQgBAVgEASQgGATgJAPIAtAvIgmAAIgZgZQgOAOgRAHQgRAHgUAAQgRAAgOgEgAhCAcQgJAMAAAQQAAAJAEAIQAFAIAHAGQAHAFAJADQAJACAKAAQAPAAALgGQAOgFAKgLIhChGQgPALgLAMgAgyhYQgJAJAAAMIAAAHIAFAIIAHALIANAOQASgLAKgKQAJgKAAgMQAAgMgHgHQgJgIgNAAQgPAAgJAJg"
      );
    this.shape_4.setTransform(46.55, -0.075);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#333333").s().p("AhPB1IAAjpICcAAIAAAaIh+AAIAABMIBtAAIAAAYIhtAAIAABRICBAAIAAAag");
    this.shape_5.setTransform(17.15, -0.075);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#333333")
      .s()
      .p(
        "AgkBtQgUgLgPgQQgOgRgIgVQgJgWAAgWQAAgXAIgWQAJgVAOgQQAPgQAUgKQAUgKAWAAQAiAAAWAPQAWAOAMAWIgXAQQgLgUgRgKQgSgKgVAAQgRAAgPAIQgOAIgKAMQgLANgFARQgGAQAAARQAAATAGARQAHAQALANQAKANAPAHQAPAHARAAQAmAAAfglIAAggIgzAAIAAgXIBMAAIAAB1IgZAAIAAgfQgfAhgpAAQgWAAgUgKg"
      );
    this.shape_6.setTransform(-5.575, -0.075);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f("#333333").s().p("ABNB1IgchEIhhAAIgbBEIghAAIBhjpIAYAAIBfDpgAArAaIgrhsIgqBsIBVAAg");
    this.shape_7.setTransform(-28.3, -0.075);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#333333")
      .s()
      .p(
        "AhTB1IAAjpIBgAAQAQAAANAGQANAHAKAKQAJALAFAOQAFANAAAOQAAAOgFAOQgEANgKAKQgJALgMAGQgNAGgPAAIhGAAIAABUgAg2AHIBEAAQAJAAAIgEQAHgDAFgHQAFgGADgJQADgJAAgKQAAgKgDgJQgEgJgFgHQgGgGgIgEQgIgEgIAAIhCAAg"
      );
    this.shape_8.setTransform(-47.225, -0.075);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f("#333333").s().p("AhOB1IAAjpICaAAIAAAaIh9AAIAABMIBtAAIAAAYIhtAAIAABRICAAAIAAAag");
    this.shape_9.setTransform(-75.95, -0.075);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics.f("#333333").s().p("ABWB1IAAi0IhNCKIgQAAIhPiKIAAC0IgdAAIAAjpIAfAAIBUCXIBViXIAfAAIAADpg");
    this.shape_10.setTransform(-101.075, -0.075);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#333333")
      .s()
      .p(
        "AgsBtQgVgKgOgRQgPgQgHgWQgIgVAAgXQAAgWAIgWQAIgVAPgRQAPgQAVgKQAUgKAXAAQAYAAAUALQAUAKAPARQAPARAHAVQAIAVAAAVQAAAYgIAVQgIAWgPAQQgPAQgUAKQgUAKgYAAQgYAAgUgKgAgghTQgPAIgLANQgKANgGAQQgFARAAAQQAAASAFARQAGAQALANQAKANAPAIQAPAHARAAQATAAAPgIQAPgIAKgNQAKgNAGgRQAFgQAAgRQAAgRgFgQQgGgRgLgNQgLgMgOgIQgPgIgSAAQgSAAgOAIg"
      );
    this.shape_11.setTransform(-127.825, -0.075);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics.f("#333333").s().p("ABBB1IAAhqIiBAAIAABqIgdAAIAAjpIAdAAIAABlICBAAIAAhlIAdAAIAADpg");
    this.shape_12.setTransform(-152.375, -0.075);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_12 },
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-166.6, -21.3, 333.29999999999995, 42.7);

  (lib.Tween4 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#333333").s().p("ABGB1Ihdh4IgwAwIAABIIgRAAIAAjpIARAAIAACNICHiNIAUAAIhgBnIBlCCg");
    this.shape.setTransform(151.8, -0.075);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#333333")
      .s()
      .p(
        "AgsBtQgUgLgOgQQgPgQgIgWQgIgVAAgXQAAgWAJgWQAIgVAPgRQAOgQAVgKQAUgKAWAAQAZAAAUALQAUAKAPARQAOARAIAVQAIAVAAAVQAAAYgJAVQgIAWgPAQQgPAQgUAKQgUAKgXAAQgYAAgUgKgAglhdQgRAJgNAOQgMAPgGASQgHATAAASQAAAUAHATQAHASAMAPQAMAOASAJQARAIATAAQAVAAARgIQARgJAMgPQAMgPAHgSQAHgTAAgTQAAgTgHgTQgHgSgNgPQgMgOgRgJQgRgIgUAAQgUAAgRAJg"
      );
    this.shape_1.setTransform(127.475, -0.075);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#333333")
      .s()
      .p(
        "AgsBtQgUgLgOgQQgPgQgIgWQgIgVAAgXQAAgWAJgWQAIgVAPgRQAOgQAVgKQAUgKAWAAQAZAAAUALQAUAKAPARQAOARAIAVQAIAVAAAVQAAAYgJAVQgIAWgPAQQgPAQgUAKQgUAKgXAAQgYAAgUgKgAglhdQgRAJgNAOQgMAPgGASQgHATAAASQAAAUAHATQAHASAMAPQAMAOASAJQARAIATAAQAVAAARgIQARgJAMgPQAMgPAHgSQAHgTAAgTQAAgTgHgTQgHgSgNgPQgMgOgRgJQgRgIgUAAQgUAAgRAJg"
      );
    this.shape_2.setTransform(102.675, -0.075);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#333333")
      .s()
      .p(
        "AhWB1IAAjpIBtAAQAMAAAKAFQAKAFAHAJQAHAIADALQAEALABALQgBARgIAPQgKAPgPAHQAUAFALAQQANARAAAVQgBAMgFAMQgEAKgJAJQgJAIgMAFQgLAEgNAAgAhFBmIBcAAQAKAAAJgEQAIgEAGgHQAGgGAEgJQADgJABgJQgBgJgDgJQgDgJgGgGQgGgHgIgEQgIgEgJAAIhfAAgAhFgHIBWAAQAJAAAIgEQAIgEAFgGQAHgHACgJQAEgIAAgJQAAgKgEgIQgDgIgFgHQgGgGgHgEQgHgEgKAAIhXAAg"
      );
    this.shape_3.setTransform(80.15, -0.075);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f("#333333").s().p("AgHB1IAAhZIhciQIASAAIBRCBIBSiBIATAAIhdCRIAABYg");
    this.shape_4.setTransform(57.8, -0.075);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#333333").s().p("ABZB1IghhNIhvAAIghBNIgSAAIBkjpIAOAAIBjDpgAAzAaIgzh6IgzB6IBmAAg");
    this.shape_5.setTransform(38.375, -0.075);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f("#333333").s().p("AhNB1IAAjpIARAAIAADaICKAAIAAAPg");
    this.shape_6.setTransform(19, -0.075);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#333333")
      .s()
      .p(
        "AhRB1IAAjpIBfAAQAPAAAMAGQANAHAJAKQAJAKAFANQAGANgBANQABAPgGANQgEANgJAJQgJALgMAGQgMAGgPAAIhQAAIAABYgAhAANIBQAAQALAAAJgFQAKgEAGgHQAGgIAEgLQADgKAAgMQAAgLgEgKQgEgLgHgIQgHgIgJgEQgKgFgLAAIhNAAg"
      );
    this.shape_7.setTransform(-1.05, -0.075);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f("#333333").s().p("AhNB1IAAjpICYAAIAAAPIiHAAIAABcIB2AAIAAAOIh2AAIAABhICKAAIAAAPg");
    this.shape_8.setTransform(-30.075, -0.075);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#333333")
      .s()
      .p(
        "ABBB1Ig5hYIhLAAIAABYIgRAAIAAjpIBhAAQAPAAAMAGQANAHAJAKQAJAKAFANQAFANABANQgBANgEAMQgDANgIAIQgHAKgKAGQgLAGgMACIA7BbgAhDANIBRAAQAMAAAJgFQAKgFAGgHQAHgIADgKQAEgLAAgLQAAgLgFgKQgDgKgIgIQgHgIgKgFQgJgFgKAAIhQAAg"
      );
    this.shape_9.setTransform(-50.85, -0.075);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics.f("#333333").s().p("ABZB1IghhNIhvAAIghBNIgSAAIBkjpIAOAAIBjDpgAAzAaIgzh6IgzB6IBmAAg");
    this.shape_10.setTransform(-73.475, -0.075);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#333333")
      .s()
      .p(
        "AgjBsQgUgKgOgRQgPgRgIgWQgIgWAAgVQAAgVAHgVQAIgVAOgRQAOgQAVgLQAUgKAaAAQAfAAAWAPQAWAOALAWIgOAIQgGgMgIgIQgJgJgKgFQgJgFgLgCQgLgCgKAAQgVAAgRAJQgRAJgMAOQgMAPgGASQgGASAAATQAAAUAHATQAHASANAPQAMAOARAJQARAIATAAQALAAALgCQALgDAKgGQALgFAJgJQAJgJAFgMIAPAHQgGANgKALQgKAKgNAHQgMAHgOADQgOAEgOAAQgXAAgUgLg"
      );
    this.shape_11.setTransform(-95.525, -0.025);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics.f("#333333").s().p("AhNB1IAAjpICYAAIAAAPIiHAAIAABcIB2AAIAAAOIh2AAIAABhICKAAIAAAPg");
    this.shape_12.setTransform(-116.375, -0.075);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics.f("#333333").s().p("AgIB1IAAhZIhciQIATAAIBRCBIBRiBIATAAIhcCRIAABYg");
    this.shape_13.setTransform(-137.9, -0.075);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics.f("#333333").s().p("AhNB1IAAjpICYAAIAAAPIiHAAIAABcIB2AAIAAAOIh2AAIAABhICKAAIAAAPg");
    this.shape_14.setTransform(-157.875, -0.075);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_14 },
            { t: this.shape_13 },
            { t: this.shape_12 },
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-170.7, -21.3, 341.5, 42.7);

  (lib.Tween3 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#333333").s().p("ABGB1Ihdh4IgwAwIAABIIgRAAIAAjpIARAAIAACNICHiNIAUAAIhgBnIBlCCg");
    this.shape.setTransform(151.8, -0.075);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#333333")
      .s()
      .p(
        "AgsBtQgUgLgOgQQgPgQgIgWQgIgVAAgXQAAgWAJgWQAIgVAPgRQAOgQAVgKQAUgKAWAAQAZAAAUALQAUAKAPARQAOARAIAVQAIAVAAAVQAAAYgJAVQgIAWgPAQQgPAQgUAKQgUAKgXAAQgYAAgUgKgAglhdQgRAJgNAOQgMAPgGASQgHATAAASQAAAUAHATQAHASAMAPQAMAOASAJQARAIATAAQAVAAARgIQARgJAMgPQAMgPAHgSQAHgTAAgTQAAgTgHgTQgHgSgNgPQgMgOgRgJQgRgIgUAAQgUAAgRAJg"
      );
    this.shape_1.setTransform(127.475, -0.075);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#333333")
      .s()
      .p(
        "AgsBtQgUgLgOgQQgPgQgIgWQgIgVAAgXQAAgWAJgWQAIgVAPgRQAOgQAVgKQAUgKAWAAQAZAAAUALQAUAKAPARQAOARAIAVQAIAVAAAVQAAAYgJAVQgIAWgPAQQgPAQgUAKQgUAKgXAAQgYAAgUgKgAglhdQgRAJgNAOQgMAPgGASQgHATAAASQAAAUAHATQAHASAMAPQAMAOASAJQARAIATAAQAVAAARgIQARgJAMgPQAMgPAHgSQAHgTAAgTQAAgTgHgTQgHgSgNgPQgMgOgRgJQgRgIgUAAQgUAAgRAJg"
      );
    this.shape_2.setTransform(102.675, -0.075);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#333333")
      .s()
      .p(
        "AhWB1IAAjpIBtAAQAMAAAKAFQAKAFAHAJQAHAIADALQAEALABALQgBARgIAPQgKAPgPAHQAUAFALAQQANARAAAVQgBAMgFAMQgEAKgJAJQgJAIgMAFQgLAEgNAAgAhFBmIBcAAQAKAAAJgEQAIgEAGgHQAGgGAEgJQADgJABgJQgBgJgDgJQgDgJgGgGQgGgHgIgEQgIgEgJAAIhfAAgAhFgHIBWAAQAJAAAIgEQAIgEAFgGQAHgHACgJQAEgIAAgJQAAgKgEgIQgDgIgFgHQgGgGgHgEQgHgEgKAAIhXAAg"
      );
    this.shape_3.setTransform(80.15, -0.075);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f("#333333").s().p("AgHB1IAAhZIhciQIASAAIBRCBIBSiBIATAAIhdCRIAABYg");
    this.shape_4.setTransform(57.8, -0.075);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#333333").s().p("ABZB1IghhNIhvAAIghBNIgSAAIBkjpIAOAAIBjDpgAAzAaIgzh6IgzB6IBmAAg");
    this.shape_5.setTransform(38.375, -0.075);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f("#333333").s().p("AhNB1IAAjpIARAAIAADaICKAAIAAAPg");
    this.shape_6.setTransform(19, -0.075);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#333333")
      .s()
      .p(
        "AhRB1IAAjpIBfAAQAPAAAMAGQANAHAJAKQAJAKAFANQAGANgBANQABAPgGANQgEANgJAJQgJALgMAGQgMAGgPAAIhQAAIAABYgAhAANIBQAAQALAAAJgFQAKgEAGgHQAGgIAEgLQADgKAAgMQAAgLgEgKQgEgLgHgIQgHgIgJgEQgKgFgLAAIhNAAg"
      );
    this.shape_7.setTransform(-1.05, -0.075);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f("#333333").s().p("AhNB1IAAjpICYAAIAAAPIiHAAIAABcIB2AAIAAAOIh2AAIAABhICKAAIAAAPg");
    this.shape_8.setTransform(-30.075, -0.075);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#333333")
      .s()
      .p(
        "ABBB1Ig5hYIhLAAIAABYIgRAAIAAjpIBhAAQAPAAAMAGQANAHAJAKQAJAKAFANQAFANABANQgBANgEAMQgDANgIAIQgHAKgKAGQgLAGgMACIA7BbgAhDANIBRAAQAMAAAJgFQAKgFAGgHQAHgIADgKQAEgLAAgLQAAgLgFgKQgDgKgIgIQgHgIgKgFQgJgFgKAAIhQAAg"
      );
    this.shape_9.setTransform(-50.85, -0.075);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics.f("#333333").s().p("ABZB1IghhNIhvAAIghBNIgSAAIBkjpIAOAAIBjDpgAAzAaIgzh6IgzB6IBmAAg");
    this.shape_10.setTransform(-73.475, -0.075);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#333333")
      .s()
      .p(
        "AgjBsQgUgKgOgRQgPgRgIgWQgIgWAAgVQAAgVAHgVQAIgVAOgRQAOgQAVgLQAUgKAaAAQAfAAAWAPQAWAOALAWIgOAIQgGgMgIgIQgJgJgKgFQgJgFgLgCQgLgCgKAAQgVAAgRAJQgRAJgMAOQgMAPgGASQgGASAAATQAAAUAHATQAHASANAPQAMAOARAJQARAIATAAQALAAALgCQALgDAKgGQALgFAJgJQAJgJAFgMIAPAHQgGANgKALQgKAKgNAHQgMAHgOADQgOAEgOAAQgXAAgUgLg"
      );
    this.shape_11.setTransform(-95.525, -0.025);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics.f("#333333").s().p("AhNB1IAAjpICYAAIAAAPIiHAAIAABcIB2AAIAAAOIh2AAIAABhICKAAIAAAPg");
    this.shape_12.setTransform(-116.375, -0.075);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics.f("#333333").s().p("AgIB1IAAhZIhciQIATAAIBRCBIBRiBIATAAIhcCRIAABYg");
    this.shape_13.setTransform(-137.9, -0.075);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics.f("#333333").s().p("AhNB1IAAjpICYAAIAAAPIiHAAIAABcIB2AAIAAAOIh2AAIAABhICKAAIAAAPg");
    this.shape_14.setTransform(-157.875, -0.075);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_14 },
            { t: this.shape_13 },
            { t: this.shape_12 },
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-170.7, -21.3, 341.5, 42.7);

  (lib.Tween2 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("#999999").ss(2.3, 0, 0, 4).p("EhXVAAAMCurAAA");

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-560.1, -1.1, 1120.3000000000002, 2.3);

  (lib.Tween1 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("#999999").ss(2.3, 0, 0, 4).p("EhXVAAAMCurAAA");

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-560.1, -1.1, 1120.3000000000002, 2.3);

  (lib.DocumentDownload = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#000000")
      .s()
      .p(
        "AhNMXIpxqfQgeggACgsQABgsAhgeQAggeAsACQAtABAeAgIG6HYIAAyMQAAgsAfgfQAgggArAAQAsAAAfAgQAfAfAAAsIAASMIG3nYQAfggArgBQAsgCAgAeQAhAeABArQABAtgeAgIpyKfQgfAiguAAQguAAgfgig"
      );
    this.shape.setTransform(309.3474, 355.275);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f()
      .s("#000000")
      .ss(24)
      .p(
        "AVQAAQAAEVhrD9QhnD0i9C7Qi8C9j0BnQj9BrkUAAQkUAAj9hrQj0hni8i9Qi8i7hnj0Qhrj9AAkVQAAkTBrj9QBnj0C8i8QC8i9D0hnQD9hrEUAAQEUAAD9BrQD0BnC8C9QC9C8BnD0QBrD9AAETg"
      );
    this.shape_1.setTransform(309.5, 354.7);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AoQTlQj0hni8i9Qi9i8hnj0Qhrj9AAkUQAAkUBrj9QBnj0C9i8QC8i8D0hnQD8hrEUAAQEVAAD8BrQD1BnC7C8QC9C8BnD0QBrD9AAEUQAAEUhrD9QhnD0i9C8Qi7C9j1BnQj8BrkVAAQkUAAj8hrg"
      );
    this.shape_2.setTransform(309.5, 354.7);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f().s("#000000").ss(24, 1).p("AIQIqIqPAAQimAAh1h1Qh1h1AAimIAArD");
    this.shape_3.setTransform(271, 60.85);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f().s("#000000").ss(24, 1).p("AsAAAIYCAA");
    this.shape_4.setTransform(153.7, 309.9);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f().s("#000000").ss(24, 1).p("AsAAAIYCAA");
    this.shape_5.setTransform(153.7, 255.9);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f().s("#000000").ss(24, 1).p("AoYAAIQxAA");
    this.shape_6.setTransform(130.425, 201.95);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f()
      .s("#000000")
      .ss(24, 1)
      .p("AZyvNMAAAAoNQAADPiTCSQiSCTjPAAMgj7AAAQjPAAiTiTQiSiSAAjPMAAAgx/QAAjQCSiSQCTiSDPAAIatAAQAVAAAPAPIQQQ0QAOAPAAAUg");
    this.shape_7.setTransform(165, 210);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f("#FFFFFF").s().p("EgR9Ag0QjPAAiSiSQiTiTAAjPMAAAgx/QAAjPCTiTQCSiSDPAAIatAAQAWAAAOAPIQQQ0QAOAPAAAUMAAAAoNQAADPiTCTQiSCSjPAAg");
    this.shape_8.setTransform(165, 210);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-12, -12, 489.6, 534.8);

  (lib.ClipGroup = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_2 (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    mask.graphics.p("AuyI6IAAxzIdlAAIAARzg");
    mask.setTransform(94.675, 57);

    // Layer_3
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#000000")
      .s()
      .p(
        "An9GoQjriGi4j2QgPgTgBgZQABgYAPgUQC4j1DriGQD0iLEJAAQEKAAD0CLQDsCGC4D2QAPATAAAYQAAAZgPAUQi5D1jrCGQj0CLkKAAQkJAAj0iLgAgZmLQiUAJhqBqQhrBrgJCUQgMCzCAB/QB+B/CzgLQCUgKBqhrQBrhqAJiUQAMizh/h/Qh0h0ihAAIgdABgAiWCXQhFhEAHhgQAFhQA5g5QA6g5BPgGQBhgGBEBEQBFBFgHBgQgFBQg5A5Qg6A5hQAFIgPABQhXAAg+g/g"
      );
    this.shape.setTransform(94.45, 57.225);

    var maskedShapeInstanceList = [this.shape];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0, 0.9, 188.9, 112.69999999999999), null);

  (lib.ButtonBackground = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_2
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#FFFFFF").s().rr(-43.4, -43.4, 86.8, 86.8, 4);
    this.shape.setTransform(43.375, 43.375);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 86.8, 86.8);

  (lib.ClipGroup_0 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_2 (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    mask.graphics.p("EgxTAtNMAAAhaZMBimAAAMAAABaZg");
    mask.setTransform(315.55, 289.275);

    // Layer_3
    this.instance = new lib.Image();
    this.instance.parent = this;
    this.instance.setTransform(0, 0, 0.5469, 0.5469);

    var maskedShapeInstanceList = [this.instance];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(0, 0, 631.1, 578.6), null);

  (lib.VideoDownloadButton = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_2
    this.instance = new lib.VideoDownload("synched", 0);
    this.instance.parent = this;
    this.instance.setTransform(259.7, 46.4, 0.1122, 0.1122, 0, 0, 0, 233, 255.4);

    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgVA1QgKgFgHgIQgHgIgEgLQgDgKAAgLQAAgKADgLQAFgKAHgIQAHgIAJgFQAKgFALAAQAMAAAKAFQAJAFAHAJQAIAIADAKQAFAKAAAKQgBALgEALQgEAKgHAIQgHAIgKAFQgKAFgLAAQgLAAgKgFgAgQgoQgHAEgEAGQgGAHgCAIQgDAIAAAHQAAAJADAIQACAIAGAGQAEAGAIAEQAHAEAIAAQAJAAAHgEQAIgEAEgHQAFgGADgIQADgIAAgIQAAgIgDgIQgDgIgFgGQgGgGgGgEQgIgDgIAAQgIAAgIADg"
      );
    this.shape.setTransform(189.3, 44.325);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#FFFFFF").s().p("AgmA5IAAhxIBMAAIAAANIg9AAIAAAlIA1AAIAAALIg1AAIAAAnIA9AAIAAANg");
    this.shape_1.setTransform(178.85, 44.325);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AguA5IAAhxIAnAAQANAAAKAFQAKAEAHAIQAHAHAEALQADAKAAALQAAANgEAKQgEALgHAHQgHAIgKAEQgKAEgMAAgAggAsIAZAAQAJAAAIgDQAHgEAFgGQAFgGADgIQADgIAAgJQAAgJgDgIQgDgIgFgGQgFgFgIgEQgHgDgJAAIgZAAg"
      );
    this.shape_2.setTransform(168.275, 44.325);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#FFFFFF").s().p("AgGA5IAAhxIANAAIAABxg");
    this.shape_3.setTransform(160.125, 44.325);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f("#FFFFFF").s().p("AgFA5IgvhxIAQAAIAkBfIAmhfIAPAAIgvBxg");
    this.shape_4.setTransform(152.625, 44.325);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AguA5IAAhxIAnAAQANAAAKAFQAKAEAHAIQAHAHAEALQADAKAAALQAAANgEAKQgEALgHAHQgHAIgKAEQgKAEgMAAgAggAsIAZAAQAJAAAIgDQAHgEAFgGQAFgGADgIQADgIAAgJQAAgJgDgIQgDgIgFgGQgFgFgIgEQgHgDgJAAIgZAAg"
      );
    this.shape_5.setTransform(137.825, 44.325);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f("#FFFFFF").s().p("AAmA5IgOgiIgvAAIgNAiIgPAAIAuhxIALAAIAuBxgAAVAMIgVgzIgUAzIApAAg");
    this.shape_6.setTransform(126.35, 44.325);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgVA1QgKgFgHgIQgHgIgEgLQgEgKAAgLQAAgKAFgLQADgKAIgIQAHgIAKgFQAKgFAKAAQAMAAAKAFQAJAFAIAJQAGAIAFAKQADAKAAAKQABALgFALQgEAKgHAIQgHAIgKAFQgKAFgLAAQgMAAgJgFgAgQgoQgHAEgFAGQgFAHgDAIQgCAIAAAHQAAAJACAIQADAIAFAGQAFAGAIAEQAHAEAIAAQAJAAAHgEQAHgEAFgHQAGgGACgIQADgIAAgIQAAgIgDgIQgDgIgFgGQgGgGgHgEQgHgDgIAAQgIAAgIADg"
      );
    this.shape_7.setTransform(115, 44.325);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f("#FFFFFF").s().p("AgmA5IAAhxIAPAAIAABkIA+AAIAAANg");
    this.shape_8.setTransform(104.95, 44.325);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f("#FFFFFF").s().p("AAkA5IhFhWIAABWIgOAAIAAhxIAMAAIBFBYIAAhYIAOAAIAABxg");
    this.shape_9.setTransform(93.55, 44.325);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics.f("#FFFFFF").s().p("AAWA5IgWg2IgWA2IgMAAIgvhxIAPAAIAnBgIATguIgUgxIAOAAIAOAnIAPgnIAOAAIgUAxIAUAuIAmhgIAPAAIgvBxg");
    this.shape_10.setTransform(79.05, 44.325);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgVA1QgKgFgHgIQgHgIgEgLQgEgKAAgLQABgKAEgLQAEgKAGgIQAIgIAJgFQALgFAKAAQAMAAAKAFQAJAFAIAJQAHAIAEAKQADAKAAAKQABALgFALQgEAKgHAIQgHAIgKAFQgKAFgLAAQgMAAgJgFgAgPgoQgHAEgGAGQgEAHgEAIQgCAIAAAHQAAAJACAIQAEAIAEAGQAGAGAHAEQAHAEAIAAQAJAAAHgEQAHgEAGgHQAFgGACgIQADgIAAgIQAAgIgDgIQgDgIgFgGQgFgGgIgEQgGgDgJAAQgJAAgGADg"
      );
    this.shape_11.setTransform(64.7, 44.325);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AguA5IAAhxIAnAAQANAAAKAFQAKAEAHAIQAHAHAEALQADAKAAALQAAANgEAKQgEALgHAHQgHAIgKAEQgKAEgMAAgAggAsIAZAAQAJAAAIgDQAHgEAFgGQAFgGADgIQADgIAAgJQAAgJgDgIQgDgIgFgGQgFgFgIgEQgHgDgJAAIgZAAg"
      );
    this.shape_12.setTransform(53.325, 44.325);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_12 },
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
            { t: this.instance },
          ],
        })
        .wait(4)
    );

    // Layer_1
    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics.f("rgba(39,162,222,0.847)").s().p("A3RGLQgUAAAAgUIAArtQAAgUAUAAMAujAAAQAUAAAAAUIAALtQAAAUgUAAg");
    this.shape_13.setTransform(151, 39.5);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics.f("#27A2DE").s().p("A3RGLQgUAAAAgUIAArtQAAgUAUAAMAujAAAQAUAAAAAUIAALtQAAAUgUAAg");
    this.shape_14.setTransform(151, 39.5);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics.f("#2188BA").s().p("A3RGLQgUAAAAgUIAArtQAAgUAUAAMAujAAAQAUAAAAAUIAALtQAAAUgUAAg");
    this.shape_15.setTransform(151, 39.5);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics.f("#2DBAFF").s().p("A3RGLQgUAAAAgUIAArtQAAgUAUAAMAujAAAQAUAAAAAUIAALtQAAAUgUAAg");
    this.shape_16.setTransform(151, 39.5);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_13 }] })
        .to({ state: [{ t: this.shape_14 }] }, 1)
        .to({ state: [{ t: this.shape_15 }] }, 1)
        .to({ state: [{ t: this.shape_16 }] }, 1)
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 302, 79);

  (lib.DocumentView = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.instance = new lib.ClipGroup();
    this.instance.parent = this;
    this.instance.setTransform(309.5, 354.95, 1, 1, 0, 0, 0, 94.7, 57);

    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#000000")
      .ss(24)
      .p(
        "AVQAAQAAEVhrD9QhnD0i9C7Qi8C9j0BnQj9BrkUAAQkUAAj9hrQj0hni8i9Qi8i7hnj0Qhrj9AAkVQAAkTBrj9QBnj0C8i8QC8i9D0hnQD9hrEUAAQEUAAD9BrQD0BnC8C9QC9C8BnD0QBrD9AAETg"
      );
    this.shape.setTransform(309.5, 354.7);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AoQTlQj0hni8i9Qi9i8hnj0Qhrj9AAkUQAAkUBrj9QBnj0C9i8QC8i8D0hnQD8hrEUAAQEVAAD8BrQD1BnC7C8QC9C8BnD0QBrD9AAEUQAAEUhrD9QhnD0i9C8Qi7C9j1BnQj8BrkVAAQkUAAj8hrg"
      );
    this.shape_1.setTransform(309.5, 354.7);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f().s("#000000").ss(24, 1).p("AIQIqIqPAAQimAAh1h1Qh1h1AAimIAArD");
    this.shape_2.setTransform(271, 60.85);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f().s("#000000").ss(24, 1).p("AsAAAIYCAA");
    this.shape_3.setTransform(153.7, 309.9);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f().s("#000000").ss(24, 1).p("AsAAAIYCAA");
    this.shape_4.setTransform(153.7, 255.9);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f().s("#000000").ss(24, 1).p("AoYAAIQxAA");
    this.shape_5.setTransform(130.425, 201.95);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f()
      .s("#000000")
      .ss(24, 1)
      .p("AZyvNMAAAAoNQAADPiTCSQiSCTjPAAMgj7AAAQjPAAiTiTQiSiSAAjPMAAAgx/QAAjQCSiSQCTiSDPAAIatAAQAVAAAPAPIQQQ0QAOAPAAAUg");
    this.shape_6.setTransform(165, 210);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f("#FFFFFF").s().p("EgR9Ag0QjPAAiSiSQiTiTAAjPMAAAgx/QAAjPCTiTQCSiSDPAAIatAAQAWAAAOAPIQQQ0QAOAPAAAUMAAAAoNQAADPiTCTQiSCSjPAAg");
    this.shape_7.setTransform(165, 210);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
            { t: this.instance },
          ],
        })
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-12, -12, 489.6, 534.8);

  (lib.DocumentDownloadButton = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_2
    this.instance = new lib.DocumentDownload("synched", 0);
    this.instance.parent = this;
    this.instance.setTransform(259.7, 46.4, 0.1122, 0.1122, 0, 0, 0, 233, 255.4);

    this.shape = new cjs.Shape();
    this.shape.graphics.f("#FFFFFF").s().p("AgGA5IAAhkIgnAAIAAgNIBbAAIAAANIgmAAIAABkg");
    this.shape.setTransform(212.35, 44.325);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#FFFFFF").s().p("AAkA5IhFhWIAABWIgOAAIAAhxIALAAIBGBYIAAhYIAOAAIAABxg");
    this.shape_1.setTransform(201.3, 44.325);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#FFFFFF").s().p("AgmA5IAAhxIBMAAIAAANIg9AAIAAAlIA1AAIAAALIg1AAIAAAnIA+AAIAAANg");
    this.shape_2.setTransform(190.7, 44.325);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#FFFFFF").s().p("AAqA5IAAhXIgmBCIgHAAIgmhCIAABXIgPAAIAAhxIAQAAIAoBJIAphJIAQAAIAABxg");
    this.shape_3.setTransform(178.55, 44.325);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgWA0QgJgFgGgHQgFgIgDgLQgCgKAAgLIAAg4IAOAAIAAA4QAAAJABAHQACAIAEAGQAEAHAGADQAHAEAJAAQAJAAAIgEQAGgEAEgGQADgGADgIIABgQIAAg4IAOAAIAAA4QAAAMgDAKQgCAKgGAIQgGAIgJAFQgJAEgNAAQgMAAgKgFg"
      );
    this.shape_4.setTransform(165.55, 44.375);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgRA0QgJgFgIgIQgGgJgFgJQgDgLAAgKQAAgKADgKQAEgLAHgHQAHgJAKgFQAKgEAMAAQAPAAALAGQALAHAFALIgMAHQgCgFgDgEQgEgEgEgBQgEgDgFgBIgJgBQgIAAgHAEQgIAEgFAHQgEAFgDAIQgDAJAAAHQABAJADAHQACAJAGAGQAFAGAHAEQAHAEAIgBIAJgBIAJgDIAIgGQADgEADgGIAMAHQgDAHgEAEIgLAJQgHADgHABQgGADgHAAQgLgBgKgFg"
      );
    this.shape_5.setTransform(154.15, 44.35);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgVA1QgKgFgHgIQgHgIgEgLQgDgKAAgLQAAgKADgLQAFgKAGgIQAIgIAJgFQALgFAKAAQAMAAAKAFQAJAFAIAJQAGAIAEAKQAEAKAAAKQABALgFALQgEAKgHAIQgHAIgKAFQgKAFgLAAQgLAAgKgFgAgPgoQgHAEgGAGQgEAHgEAIQgCAIAAAHQAAAJACAIQAEAIAEAGQAGAGAHAEQAHAEAIAAQAJAAAHgEQAHgEAGgHQAFgGACgIQADgIAAgIQAAgIgDgIQgDgIgFgGQgFgGgIgEQgGgDgJAAQgJAAgGADg"
      );
    this.shape_6.setTransform(142.65, 44.325);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AguA5IAAhxIAnAAQANAAAKAFQAKAEAHAIQAHAHAEALQADAKAAALQAAANgEAKQgEALgHAHQgHAIgKAEQgKAEgMAAgAggAsIAZAAQAJAAAIgDQAHgEAFgGQAFgGADgIQADgIAAgJQAAgJgDgIQgDgIgFgGQgFgFgIgEQgHgDgJAAIgZAAg"
      );
    this.shape_7.setTransform(131.275, 44.325);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AguA5IAAhxIAnAAQANAAAKAFQAKAEAHAIQAHAHAEALQADAKAAALQAAANgEAKQgEALgHAHQgHAIgKAEQgKAEgMAAgAggAsIAZAAQAJAAAIgDQAHgEAFgGQAFgGADgIQADgIAAgJQAAgJgDgIQgDgIgFgGQgFgFgIgEQgHgDgJAAIgZAAg"
      );
    this.shape_8.setTransform(115.825, 44.325);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f("#FFFFFF").s().p("AAlA5IgNgiIgvAAIgNAiIgQAAIAvhxIAMAAIAuBxgAAUAMIgUgzIgUAzIAoAAg");
    this.shape_9.setTransform(104.35, 44.325);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgVA1QgKgFgHgIQgHgIgEgLQgDgKAAgLQAAgKADgLQAFgKAHgIQAHgIAJgFQAKgFALAAQAMAAAKAFQAJAFAHAJQAIAIADAKQAFAKAAAKQgBALgEALQgEAKgHAIQgHAIgKAFQgKAFgLAAQgLAAgKgFgAgQgoQgHAEgEAGQgGAHgCAIQgDAIAAAHQAAAJADAIQACAIAGAGQAEAGAIAEQAHAEAIAAQAJAAAHgEQAIgEAEgHQAFgGADgIQADgIAAgIQAAgIgDgIQgDgIgFgGQgGgGgGgEQgIgDgIAAQgIAAgIADg"
      );
    this.shape_10.setTransform(93, 44.325);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics.f("#FFFFFF").s().p("AgmA5IAAhxIAOAAIAABkIA/AAIAAANg");
    this.shape_11.setTransform(82.95, 44.325);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics.f("#FFFFFF").s().p("AAkA5IhEhWIAABWIgPAAIAAhxIALAAIBFBYIAAhYIAPAAIAABxg");
    this.shape_12.setTransform(71.55, 44.325);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics.f("#FFFFFF").s().p("AAXA5IgXg2IgVA2IgNAAIgwhxIAQAAIAmBgIAUguIgUgxIAOAAIAOAnIAPgnIAOAAIgUAxIAUAuIAmhgIAQAAIgwBxg");
    this.shape_13.setTransform(57.05, 44.325);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgVA1QgKgFgHgIQgHgIgEgLQgDgKgBgLQAAgKAEgLQAFgKAHgIQAHgIAKgFQAKgFAKAAQAMAAAKAFQAKAFAGAJQAIAIADAKQAFAKAAAKQgBALgEALQgEAKgHAIQgHAIgKAFQgKAFgLAAQgLAAgKgFgAgQgoQgGAEgFAGQgGAHgCAIQgDAIAAAHQAAAJADAIQACAIAGAGQAEAGAIAEQAHAEAIAAQAJAAAHgEQAIgEAEgHQAFgGADgIQADgIAAgIQAAgIgDgIQgDgIgFgGQgGgGgGgEQgIgDgIAAQgIAAgIADg"
      );
    this.shape_14.setTransform(42.7, 44.325);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AguA5IAAhxIAnAAQANAAAKAFQAKAEAHAIQAHAHAEALQADAKAAALQAAANgEAKQgEALgHAHQgHAIgKAEQgKAEgMAAgAggAsIAZAAQAJAAAIgDQAHgEAFgGQAFgGADgIQADgIAAgJQAAgJgDgIQgDgIgFgGQgFgFgIgEQgHgDgJAAIgZAAg"
      );
    this.shape_15.setTransform(31.325, 44.325);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_15 },
            { t: this.shape_14 },
            { t: this.shape_13 },
            { t: this.shape_12 },
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
            { t: this.instance },
          ],
        })
        .wait(4)
    );

    // Layer_1
    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics.f("rgba(39,162,222,0.847)").s().p("A3RGLQgUAAAAgUIAArtQAAgUAUAAMAujAAAQAUAAAAAUIAALtQAAAUgUAAg");
    this.shape_16.setTransform(151, 39.5);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics.f("#27A2DE").s().p("A3RGLQgUAAAAgUIAArtQAAgUAUAAMAujAAAQAUAAAAAUIAALtQAAAUgUAAg");
    this.shape_17.setTransform(151, 39.5);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics.f("#2188BA").s().p("A3RGLQgUAAAAgUIAArtQAAgUAUAAMAujAAAQAUAAAAAUIAALtQAAAUgUAAg");
    this.shape_18.setTransform(151, 39.5);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics.f("#2DBAFF").s().p("A3RGLQgUAAAAgUIAArtQAAgUAUAAMAujAAAQAUAAAAAUIAALtQAAAUgUAAg");
    this.shape_19.setTransform(151, 39.5);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_16 }] })
        .to({ state: [{ t: this.shape_17 }] }, 1)
        .to({ state: [{ t: this.shape_18 }] }, 1)
        .to({ state: [{ t: this.shape_19 }] }, 1)
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 302, 79);

  (lib.BackButton = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("#333333").ss(1, 1, 1).p("AAAjKIAAGV");
    this.shape.setTransform(0, 20.275);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#333333").s().p("AiuAAIFdjKIABGVg");
    this.shape_1.setTransform(18.25, 20.275);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    );

    // Layer_2
    this.instance = new lib.ButtonBackground("synched", 0);
    this.instance.parent = this;
    this.instance.setTransform(16.95, 19.65, 1, 1, 0, 0, 0, 43.4, 43.4);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-26.4, -23.7, 86.69999999999999, 86.7);

  (lib.ArrowButton = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#278CC9").s().p("AkclIII5FIIo5FJg");
    this.shape.setTransform(28.525, 32.925);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#085CAB").s().p("AkclIII5FIIo5FJg");
    this.shape_1.setTransform(28.525, 32.925);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#6FACDA").s().p("AkclIII5FIIo5FJg");
    this.shape_2.setTransform(28.525, 32.925);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape }] })
        .to({ state: [{ t: this.shape_1 }] }, 1)
        .to({ state: [{ t: this.shape_2 }] }, 1)
        .wait(1)
    );

    // Layer_2
    this.instance = new lib.ButtonBackground("synched", 0);
    this.instance.parent = this;
    this.instance.setTransform(25.15, 33.3, 1, 1, 0, 0, 0, 43.4, 43.4);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-18.2, -10.1, 86.7, 86.8);

  (lib.ClipGroup_1 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_2 (mask)
    var mask_1 = new cjs.Shape();
    mask_1._off = true;
    mask_1.graphics.p("EgxHAtEMAAAhaHMBiPAAAMAAABaHg");
    mask_1.setTransform(315.425, 289.575);

    // Layer_3
    this.instance = new lib.ClipGroup_0();
    this.instance.parent = this;
    this.instance.setTransform(315.6, 289.3, 1, 1, 0, 0, 0, 315.6, 289.3);

    var maskedShapeInstanceList = [this.instance];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
    }

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  }).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(1, 1.2, 628.9, 576.8), null);

  (lib.Tween8 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("#58595B").ss(1.2, 0, 0, 4).p("EgxHAtEMBiPAAAMAAAhaHMhiPAAAg");
    this.shape.setTransform(0.025, 0.025);

    this.instance = new lib.ClipGroup_1();
    this.instance.parent = this;
    this.instance.setTransform(0.2, -0.25, 1, 1, 0, 0, 0, 315.6, 289.3);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance }, { t: this.shape }] })
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-315.4, -289.5, 631.0999999999999, 579);

  (lib.Tween7 = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("#58595B").ss(1.2, 0, 0, 4).p("EgxHAtEMBiPAAAMAAAhaHMhiPAAAg");
    this.shape.setTransform(0.025, 0.025);

    this.instance = new lib.ClipGroup_1();
    this.instance.parent = this;
    this.instance.setTransform(0.2, -0.25, 1, 1, 0, 0, 0, 315.6, 289.3);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.instance }, { t: this.shape }] })
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-315.4, -289.5, 631.0999999999999, 579);

  (lib.DocumentViewButton = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer_2
    this.instance = new lib.DocumentView("synched", 0);
    this.instance.parent = this;
    this.instance.setTransform(259.7, 46.4, 0.1122, 0.1122, 0, 0, 0, 233, 255.4);

    this.shape = new cjs.Shape();
    this.shape.graphics.f("#FFFFFF").s().p("AgGA5IAAhkIgoAAIAAgNIBcAAIAAANIgnAAIAABkg");
    this.shape.setTransform(185.1, 44.325);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#FFFFFF").s().p("AAkA5IhEhWIAABWIgPAAIAAhxIALAAIBFBYIAAhYIAPAAIAABxg");
    this.shape_1.setTransform(174.05, 44.325);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#FFFFFF").s().p("AgmA5IAAhxIBMAAIAAANIg9AAIAAAlIA1AAIAAALIg1AAIAAAnIA+AAIAAANg");
    this.shape_2.setTransform(163.45, 44.325);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#FFFFFF").s().p("AAqA5IAAhXIgmBCIgHAAIgmhCIAABXIgPAAIAAhxIAQAAIAoBJIAphJIAQAAIAABxg");
    this.shape_3.setTransform(151.3, 44.325);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgWA0QgJgFgGgHQgFgIgDgLQgDgKABgLIAAg4IAOAAIAAA4QAAAJACAHQABAIAEAGQAEAHAGADQAHAEAJAAQAJAAAHgEQAHgEAEgGQAEgGACgIIABgQIAAg4IAPAAIAAA4QgBAMgDAKQgCAKgGAIQgGAIgIAFQgKAEgNAAQgMAAgKgFg"
      );
    this.shape_4.setTransform(138.3, 44.375);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgQA0QgKgFgHgIQgHgJgFgJQgDgLAAgKQAAgKADgKQAEgLAHgHQAHgJAKgFQAKgEAMAAQAPAAALAGQALAHAFALIgMAHQgCgFgDgEQgEgEgEgBQgEgDgFgBIgJgBQgIAAgIAEQgHAEgFAHQgEAFgDAIQgCAJAAAHQAAAJACAHQADAJAGAGQAFAGAHAEQAHAEAHgBIAKgBIAJgDIAIgGQAEgEACgGIAMAHQgDAHgFAEIgKAJQgHADgHABQgGADgHAAQgKgBgKgFg"
      );
    this.shape_5.setTransform(126.9, 44.35);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AgVA1QgKgFgHgIQgHgIgEgLQgEgKABgLQAAgKADgLQAFgKAGgIQAIgIAJgFQAKgFALAAQAMAAAKAFQAJAFAHAJQAIAIADAKQAFAKAAAKQAAALgFALQgEAKgHAIQgHAIgKAFQgKAFgLAAQgMAAgJgFgAgPgoQgIAEgEAGQgGAHgCAIQgDAIAAAHQAAAJADAIQACAIAGAGQAFAGAHAEQAHAEAIAAQAJAAAHgEQAIgEAFgHQAEgGADgIQADgIAAgIQAAgIgDgIQgDgIgFgGQgFgGgIgEQgGgDgJAAQgIAAgHADg"
      );
    this.shape_6.setTransform(115.4, 44.325);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AguA5IAAhxIAnAAQANAAAKAFQAKAEAHAIQAHAHAEALQADAKAAALQAAANgEAKQgEALgHAHQgHAIgKAEQgKAEgMAAgAggAsIAZAAQAJAAAIgDQAHgEAFgGQAFgGADgIQADgIAAgJQAAgJgDgIQgDgIgFgGQgFgFgIgEQgHgDgJAAIgZAAg"
      );
    this.shape_7.setTransform(104.025, 44.325);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f("#FFFFFF").s().p("AAWA5IgWg2IgWA2IgMAAIgwhxIAQAAIAmBgIAUguIgUgxIAOAAIAOAnIAPgnIAOAAIgUAxIAUAuIAmhgIAQAAIgwBxg");
    this.shape_8.setTransform(85.6, 44.325);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f("#FFFFFF").s().p("AglA5IAAhxIBLAAIAAANIg9AAIAAAlIA0AAIAAALIg0AAIAAAnIA9AAIAAANg");
    this.shape_9.setTransform(72.75, 44.325);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics.f("#FFFFFF").s().p("AgGA5IAAhxIANAAIAABxg");
    this.shape_10.setTransform(65.475, 44.325);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics.f("#FFFFFF").s().p("AgFA5IgvhxIAQAAIAkBfIAmhfIAPAAIgvBxg");
    this.shape_11.setTransform(57.975, 44.325);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_11 },
            { t: this.shape_10 },
            { t: this.shape_9 },
            { t: this.shape_8 },
            { t: this.shape_7 },
            { t: this.shape_6 },
            { t: this.shape_5 },
            { t: this.shape_4 },
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
            { t: this.instance },
          ],
        })
        .wait(4)
    );

    // Layer_1
    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics.f("rgba(39,162,222,0.847)").s().p("A3RGLQgUAAAAgUIAArtQAAgUAUAAMAujAAAQAUAAAAAUIAALtQAAAUgUAAg");
    this.shape_12.setTransform(151, 39.5);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics.f("#27A2DE").s().p("A3RGLQgUAAAAgUIAArtQAAgUAUAAMAujAAAQAUAAAAAUIAALtQAAAUgUAAg");
    this.shape_13.setTransform(151, 39.5);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics.f("#2188BA").s().p("A3RGLQgUAAAAgUIAArtQAAgUAUAAMAujAAAQAUAAAAAUIAALtQAAAUgUAAg");
    this.shape_14.setTransform(151, 39.5);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics.f("#2DBAFF").s().p("A3RGLQgUAAAAgUIAArtQAAgUAUAAMAujAAAQAUAAAAAUIAALtQAAAUgUAAg");
    this.shape_15.setTransform(151, 39.5);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_12 }] })
        .to({ state: [{ t: this.shape_13 }] }, 1)
        .to({ state: [{ t: this.shape_14 }] }, 1)
        .to({ state: [{ t: this.shape_15 }] }, 1)
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 302, 79);

  // stage content:
  (lib.PlaybookMockupv4Electron = function (mode, startPosition, loop) {
    if (loop == null) {
      loop = false;
    }
    this.initialize(mode, startPosition, loop, {});

    // timeline functions:
    this.frame_54 = function () {
      // Page 1

      // Stop in frame
      this.stop();

      // ---- Functions

      // Continue animation function
      function fl_ClickToGoToAndPlayFromFrame() {
        this.gotoAndPlay(55);
      }

      // View document function
      function viewDocument() {
        window.open("resources/docs/test.pdf", "_blank");
      }

      // Download file function 1 - Document
      function downloadFile_1() {
        download("resources/docs/test.pdf");
      }

      // Download file function 2 - Video
      function downloadFile_2() {
        download("resources/videos/test_video.mp4");
      }

      // ---- Listeners

      // Continue animation button event listener
      this.arrowRight.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));

      // View document button listener
      this.documentViewButton.addEventListener("click", viewDocument);

      // Download document button listener 1 - Document
      this.documentDownloadButton.addEventListener("click", downloadFile_1);

      // Download document button listener 2 - Video
      this.videoDownloadButton.addEventListener("click", downloadFile_2);
    };
    this.frame_84 = function () {
      // Page 2

      this.backButton.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_2.bind(this));

      function fl_ClickToGoToAndPlayFromFrame_2() {
        this.gotoAndPlay(1);
      }
    };

    // actions tween:
    this.timeline.addTween(cjs.Tween.get(this).wait(54).call(this.frame_54).wait(30).call(this.frame_84).wait(1));

    // Download Video
    this.videoDownloadButton = new lib.VideoDownloadButton();
    this.videoDownloadButton.name = "videoDownloadButton";
    this.videoDownloadButton.parent = this;
    this.videoDownloadButton.setTransform(807.45, 641);
    new cjs.ButtonHelper(this.videoDownloadButton, 0, 1, 2, false, new lib.VideoDownloadButton(), 3);

    this.documentDownloadButton = new lib.DocumentDownloadButton();
    this.documentDownloadButton.name = "documentDownloadButton";
    this.documentDownloadButton.parent = this;
    this.documentDownloadButton.setTransform(645.1, 680.5, 1, 1, 0, 0, 0, 151, 39.5);
    new cjs.ButtonHelper(this.documentDownloadButton, 0, 1, 2, false, new lib.DocumentDownloadButton(), 3);

    this.documentViewButton = new lib.DocumentViewButton();
    this.documentViewButton.name = "documentViewButton";
    this.documentViewButton.parent = this;
    this.documentViewButton.setTransform(180.75, 641);
    new cjs.ButtonHelper(this.documentViewButton, 0, 1, 2, false, new lib.DocumentViewButton(), 3);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [] })
        .to({ state: [{ t: this.documentViewButton }, { t: this.documentDownloadButton }, { t: this.videoDownloadButton }] }, 54)
        .to({ state: [] }, 1)
        .wait(30)
    );

    // Back Button
    this.backButton = new lib.BackButton();
    this.backButton.name = "backButton";
    this.backButton.parent = this;
    this.backButton.setTransform(1217.7, 663.1, 1, 1, 0, 0, 0, 17.7, 20.2);
    this.backButton.shadow = new cjs.Shadow("rgba(0,0,0,1)", 3, 3, 8);
    this.backButton._off = true;
    new cjs.ButtonHelper(this.backButton, 0, 1, 1);

    this.timeline.addTween(cjs.Tween.get(this.backButton).wait(84).to({ _off: false }, 0).wait(1));

    // Button Right
    this.arrowRight = new lib.ArrowButton();
    this.arrowRight.name = "arrowRight";
    this.arrowRight.parent = this;
    this.arrowRight.setTransform(1195.05, 660.7, 1, 1, 0, 0, 0, 28.5, 32.9);
    this.arrowRight.alpha = 0;
    this.arrowRight.shadow = new cjs.Shadow("rgba(0,0,0,1)", 3, 3, 8);
    this.arrowRight._off = true;
    new cjs.ButtonHelper(this.arrowRight, 0, 1, 2);

    this.timeline.addTween(cjs.Tween.get(this.arrowRight).wait(45).to({ _off: false }, 0).to({ alpha: 1 }, 9).wait(1).to({ alpha: 0 }, 9).wait(21));

    // Video
    this.instance = new lib.an_Video({
      id: "",
      src: "resources/videos/test_video.mp4",
      autoplay: true,
      controls: true,
      muted: true,
      loop: false,
      poster: "resources/assets/images/",
      preload: false,
      class: "video",
    });

    this.instance.setTransform(522.4, 465.35, 1.0099, 0.7583, 0, 0, 0, 200.5, 150.8);
    this.instance._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(54).to({ _off: false }, 0).to({ _off: true }, 1).wait(30));

    // Text Para
    this.instance_1 = new lib.Tween15("synched", 0);
    this.instance_1.parent = this;
    this.instance_1.setTransform(-141.6, 467.35);
    this.instance_1._off = true;

    this.instance_2 = new lib.Tween16("synched", 0);
    this.instance_2.parent = this;
    this.instance_2.setTransform(158.4, 467.35);
    this.instance_2._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(25)
        .to({ _off: false }, 0)
        .to({ _off: true, x: 158.4 }, 29, cjs.Ease.circOut)
        .wait(1)
        .to({ _off: false, x: -141.6 }, 29, cjs.Ease.circInOut)
        .wait(1)
    );
    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .wait(25)
        .to({ _off: false }, 29, cjs.Ease.circOut)
        .to({ startPosition: 0 }, 1, cjs.Ease.circInOut)
        .to({ _off: true, x: -141.6 }, 29, cjs.Ease.circInOut)
        .wait(1)
    );

    // Clean Design
    this.instance_3 = new lib.Tween13("synched", 0);
    this.instance_3.parent = this;
    this.instance_3.setTransform(-315.5, 141.55);
    this.instance_3._off = true;

    this.instance_4 = new lib.Tween14("synched", 0);
    this.instance_4.parent = this;
    this.instance_4.setTransform(264.45, 141.55);
    this.instance_4._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_3)
        .wait(16)
        .to({ _off: false }, 0)
        .to({ _off: true, x: 264.45 }, 29, cjs.Ease.circOut)
        .wait(39)
        .to({ _off: false, x: -315.5 }, 0)
        .wait(1)
    );
    this.timeline.addTween(
      cjs.Tween.get(this.instance_4)
        .wait(16)
        .to({ _off: false }, 29, cjs.Ease.circOut)
        .wait(1)
        .to({ regX: 24.7, regY: 5.6, x: 289.15, y: 147.15 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ startPosition: 0 }, 0)
        .wait(1)
        .to({ regX: 0, regY: 0, x: 264.45, y: 141.55 }, 0)
        .wait(1)
        .to({ regX: 24.7, regY: 5.6, x: 286, y: 147.15 }, 0)
        .wait(1)
        .to({ x: 282.4 }, 0)
        .wait(1)
        .to({ x: 278.3 }, 0)
        .wait(1)
        .to({ x: 273.6 }, 0)
        .wait(1)
        .to({ x: 268.2 }, 0)
        .wait(1)
        .to({ x: 262.05 }, 0)
        .wait(1)
        .to({ x: 254.95 }, 0)
        .wait(1)
        .to({ x: 246.8 }, 0)
        .wait(1)
        .to({ x: 237.35 }, 0)
        .wait(1)
        .to({ x: 226.3 }, 0)
        .wait(1)
        .to({ x: 213.25 }, 0)
        .wait(1)
        .to({ x: 197.55 }, 0)
        .wait(1)
        .to({ x: 178.2 }, 0)
        .wait(1)
        .to({ x: 153.6 }, 0)
        .wait(1)
        .to({ x: 120.65 }, 0)
        .wait(1)
        .to({ x: 73.3 }, 0)
        .wait(1)
        .to({ x: 3.45 }, 0)
        .wait(1)
        .to({ x: -71.75 }, 0)
        .wait(1)
        .to({ x: -125.35 }, 0)
        .wait(1)
        .to({ x: -162.35 }, 0)
        .wait(1)
        .to({ x: -189.75 }, 0)
        .wait(1)
        .to({ x: -211.2 }, 0)
        .wait(1)
        .to({ x: -228.7 }, 0)
        .wait(1)
        .to({ x: -243.25 }, 0)
        .wait(1)
        .to({ x: -255.6 }, 0)
        .wait(1)
        .to({ x: -266.25 }, 0)
        .wait(1)
        .to({ x: -275.55 }, 0)
        .wait(1)
        .to({ x: -283.65 }, 0)
        .to({ _off: true }, 1)
        .wait(1)
    );

    // Clear menu
    this.instance_5 = new lib.Tween11("synched", 0);
    this.instance_5.parent = this;
    this.instance_5.setTransform(-279.2, 219.55);
    this.instance_5._off = true;

    this.instance_6 = new lib.Tween12("synched", 0);
    this.instance_6.parent = this;
    this.instance_6.setTransform(300.75, 219.55);
    this.instance_6._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_5)
        .wait(20)
        .to({ _off: false }, 0)
        .to({ _off: true, x: 300.75 }, 29, cjs.Ease.circOut)
        .wait(6)
        .to({ _off: false, x: -279.2 }, 29, cjs.Ease.circInOut)
        .wait(1)
    );
    this.timeline.addTween(
      cjs.Tween.get(this.instance_6)
        .wait(20)
        .to({ _off: false }, 29, cjs.Ease.circOut)
        .to({ startPosition: 0 }, 6, cjs.Ease.circInOut)
        .to({ _off: true, x: -279.2 }, 29, cjs.Ease.circInOut)
        .wait(1)
    );

    // iMac
    this.instance_7 = new lib.Tween9("synched", 0);
    this.instance_7.parent = this;
    this.instance_7.setTransform(522.2, 908.65);
    this.instance_7._off = true;

    this.instance_8 = new lib.Tween10("synched", 0);
    this.instance_8.parent = this;
    this.instance_8.setTransform(522.2, 508.3);
    this.instance_8._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_7)
        .wait(20)
        .to({ _off: false }, 0)
        .to({ _off: true, y: 508.3 }, 29, cjs.Ease.circOut)
        .wait(6)
        .to({ _off: false, y: 928.65 }, 29, cjs.Ease.circInOut)
        .wait(1)
    );
    this.timeline.addTween(
      cjs.Tween.get(this.instance_8)
        .wait(20)
        .to({ _off: false }, 29, cjs.Ease.circOut)
        .to({ startPosition: 0 }, 6, cjs.Ease.circInOut)
        .to({ _off: true, y: 928.65 }, 29, cjs.Ease.circInOut)
        .wait(1)
    );

    // Photo
    this.instance_9 = new lib.Tween7("synched", 0);
    this.instance_9.parent = this;
    this.instance_9.setTransform(1608.95, 395);
    this.instance_9._off = true;

    this.instance_10 = new lib.Tween8("synched", 0);
    this.instance_10.parent = this;
    this.instance_10.setTransform(928.95, 395);
    this.instance_10._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_9)
        .wait(16)
        .to({ _off: false }, 0)
        .to({ _off: true, x: 928.95 }, 29, cjs.Ease.circOut)
        .wait(10)
        .to({ _off: false, x: 1608.95 }, 29, cjs.Ease.circInOut)
        .wait(1)
    );
    this.timeline.addTween(
      cjs.Tween.get(this.instance_10)
        .wait(16)
        .to({ _off: false }, 29, cjs.Ease.circOut)
        .to({ startPosition: 0 }, 10, cjs.Ease.circInOut)
        .to({ _off: true, x: 1608.95 }, 29, cjs.Ease.circInOut)
        .wait(1)
    );

    // Home Page
    this.instance_11 = new lib.Tween5("synched", 0);
    this.instance_11.parent = this;
    this.instance_11.setTransform(539.7, -11.5);
    this.instance_11._off = true;

    this.instance_12 = new lib.Tween6("synched", 0);
    this.instance_12.parent = this;
    this.instance_12.setTransform(539.7, 48.5);
    this.instance_12._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_11)
        .wait(9)
        .to({ _off: false }, 0)
        .to({ _off: true, y: 48.5 }, 29, cjs.Ease.circOut)
        .wait(17)
        .to({ _off: false, y: -31.5 }, 29, cjs.Ease.circInOut)
        .wait(1)
    );
    this.timeline.addTween(
      cjs.Tween.get(this.instance_12)
        .wait(9)
        .to({ _off: false }, 29, cjs.Ease.circOut)
        .to({ startPosition: 0 }, 17, cjs.Ease.circInOut)
        .to({ _off: true, y: -31.5 }, 29, cjs.Ease.circInOut)
        .wait(1)
    );

    // Eyecare
    this.instance_13 = new lib.Tween3("synched", 0);
    this.instance_13.parent = this;
    this.instance_13.setTransform(204.75, -11.5);
    this.instance_13._off = true;

    this.instance_14 = new lib.Tween4("synched", 0);
    this.instance_14.parent = this;
    this.instance_14.setTransform(204.75, 48.5);
    this.instance_14._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_13)
        .wait(5)
        .to({ _off: false }, 0)
        .to({ _off: true, y: 48.5 }, 29, cjs.Ease.circOut)
        .wait(21)
        .to({ _off: false, y: -31.5 }, 29, cjs.Ease.circInOut)
        .wait(1)
    );
    this.timeline.addTween(
      cjs.Tween.get(this.instance_14)
        .wait(5)
        .to({ _off: false }, 29, cjs.Ease.circOut)
        .to({ startPosition: 0 }, 21, cjs.Ease.circInOut)
        .to({ _off: true, y: -31.5 }, 29, cjs.Ease.circInOut)
        .wait(1)
    );

    // Line
    this.instance_15 = new lib.Tween1("synched", 0);
    this.instance_15.parent = this;
    this.instance_15.setTransform(-565, 84.1);
    this.instance_15._off = true;

    this.instance_16 = new lib.Tween2("synched", 0);
    this.instance_16.parent = this;
    this.instance_16.setTransform(595, 84.1);
    this.instance_16._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_15)
        .wait(1)
        .to({ _off: false }, 0)
        .to({ _off: true, x: 595 }, 29, cjs.Ease.circOut)
        .wait(25)
        .to({ _off: false, x: -565 }, 29)
        .wait(1)
    );
    this.timeline.addTween(
      cjs.Tween.get(this.instance_16).wait(1).to({ _off: false }, 29, cjs.Ease.circOut).to({ startPosition: 0 }, 25).to({ _off: true, x: -565 }, 29).wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-485.2, 0, 2409.6, 1104.4);
  // library properties:
  lib.properties = {
    id: "004261DE25D54214B7BAF54AF035DD80",
    width: 1280,
    height: 720,
    fps: 30,
    color: "#FFFFFF",
    opacity: 1.0,
    manifest: [
      { src: "resources/assets/images/Image.png", id: "Image" },
      { src: "resources/assets/images/Image_1.png", id: "Image_1" },
      { src: "resources/assets/components/lib/jquery-3.5.0.min.js", id: "lib/jquery-3.5.0.min.js" },
      { src: "resources/assets/components/sdk/anwidget.js", id: "sdk/anwidget.js" },
      { src: "resources/assets/components/video/src/video.js", id: "an.Video" },
    ],
    preloads: [],
  };

  // bootstrap callback support:

  (lib.Stage = function (canvas) {
    createjs.Stage.call(this, canvas);
  }).prototype = p = new createjs.Stage();

  p.setAutoPlay = function (autoPlay) {
    this.tickEnabled = autoPlay;
  };
  p.play = function () {
    this.tickEnabled = true;
    this.getChildAt(0).gotoAndPlay(this.getTimelinePosition());
  };
  p.stop = function (ms) {
    if (ms) this.seek(ms);
    this.tickEnabled = false;
  };
  p.seek = function (ms) {
    this.tickEnabled = true;
    this.getChildAt(0).gotoAndStop((lib.properties.fps * ms) / 1000);
  };
  p.getDuration = function () {
    return (this.getChildAt(0).totalFrames / lib.properties.fps) * 1000;
  };

  p.getTimelinePosition = function () {
    return (this.getChildAt(0).currentFrame / lib.properties.fps) * 1000;
  };

  an.bootcompsLoaded = an.bootcompsLoaded || [];
  if (!an.bootstrapListeners) {
    an.bootstrapListeners = [];
  }

  an.bootstrapCallback = function (fnCallback) {
    an.bootstrapListeners.push(fnCallback);
    if (an.bootcompsLoaded.length > 0) {
      for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
        fnCallback(an.bootcompsLoaded[i]);
      }
    }
  };

  an.compositions = an.compositions || {};
  an.compositions["004261DE25D54214B7BAF54AF035DD80"] = {
    getStage: function () {
      return exportRoot.getStage();
    },
    getLibrary: function () {
      return lib;
    },
    getSpriteSheet: function () {
      return ss;
    },
    getImages: function () {
      return img;
    },
  };

  an.compositionLoaded = function (id) {
    an.bootcompsLoaded.push(id);
    for (var j = 0; j < an.bootstrapListeners.length; j++) {
      an.bootstrapListeners[j](id);
    }
  };

  an.getComposition = function (id) {
    return an.compositions[id];
  };

  function _updateVisibility(evt) {
    if ((this.getStage() == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element) {
      this._element.detach();
      stage.removeEventListener("drawstart", this._updateVisibilityCbk);
      this._updateVisibilityCbk = false;
    }
  }
  function _handleDrawEnd(evt) {
    var props = this.getConcatenatedDisplayProps(this._props),
      mat = props.matrix;
    var tx1 = mat.decompose();
    var sx = tx1.scaleX;
    var sy = tx1.scaleY;
    var dp = window.devicePixelRatio || 1;
    var w = this.nominalBounds.width * sx;
    var h = this.nominalBounds.height * sy;
    mat.tx /= dp;
    mat.ty /= dp;
    mat.a /= dp * sx;
    mat.b /= dp * sx;
    mat.c /= dp * sy;
    mat.d /= dp * sy;
    this._element.setProperty("transform-origin", this.regX + "px " + this.regY + "px");
    var x = mat.tx + this.regX * mat.a + this.regY * mat.c - this.regX;
    var y = mat.ty + this.regX * mat.b + this.regY * mat.d - this.regY;
    var tx = "matrix(" + mat.a + "," + mat.b + "," + mat.c + "," + mat.d + "," + x + "," + y + ")";
    this._element.setProperty("transform", tx);
    this._element.setProperty("width", w);
    this._element.setProperty("height", h);
    this._element.update();
  }

  function _tick(evt) {
    var stage = this.getStage();
    stage && stage.on("drawend", this._handleDrawEnd, this, true);
    if (!this._updateVisibilityCbk) {
      this._updateVisibilityCbk = stage.on("drawstart", this._updateVisibility, this, false);
    }
  }
})((createjs = createjs || {}), (AdobeAn = AdobeAn || {}));
var createjs, AdobeAn;
