# Erkin-Base version 2.0.0
Web frontend practical style classes. Useful near bootstrap and other UI frameworks.

version 2 is complete rewrite of the project and is not compatible with older versions.


---

### quick setup
just include "Erkin-Base.min.css" file from dist folder into your web project, then you are ready to go.

---

# Layout :

### display :
```html
<div class="ds_i">display: inline</div>
<div class="ds_b">display: block</div>
<div class="ds_ib">display: inline-block</div>
<div class="ds_f">display: flex</div>
<div class="ds_if">display: inline-flex</div>
<div class="ds_n">display: none</div>
<div class="ds_it">display: inline-table</div>
<div class="ds_t">display: table</div>
<div class="ds_tr">display: table-row</div>
<div class="ds_tc">display: table-cell</div>
<div class="ds_li">display: list-item</div>
```

---

### position :
```html
<div class="po_s">position: static</div>
<div class="po_r">position: relative</div>
<div class="po_a">position: absolute</div>
<div class="po_f">position: fixed</div>
<div class="fixed">position: fixed</div>
```

---

### float :
```html
<div class="fl_r">float: right</div>
<div class="fl_l">float: left</div>
<div class="fl_n">float: none</div>
```

---

### overflow :
```html
<div class="ovf_a">overflow: auto</div>
<div class="ovf_v">overflow: visible</div>
<div class="ovf_h">overflow: hidden</div>
<div class="ovf_s">overflow: scroll</div>

<div class="ovfx_a">overflow-x: auto</div>
<div class="ovfx_v">overflow-x: visible</div>
<div class="ovfx_h">overflow-x: hidden</div>
<div class="ovfx_s">overflow-x: scroll</div>

<div class="ovfy_a">overflow-y: auto</div>
<div class="ovfy_v">overflow-y: visible</div>
<div class="ovfy_h">overflow-y: hidden</div>
<div class="ovfy_s">overflow-y: scroll</div>
```

---

### z-index :
we have every z-index from -10 ~ 15
```html
<div class="z_-10">z-index: -10</div>
<div class="z_-9">z-index: -9</div>
...
<div class="z_-1">z-index: -1</div>
<div class="z_0">z-index: 0</div>
<div class="z_1">z-index: 1</div>
...
<div class="z_15">z-index: 15</div>
```

---

# Distances :

### top :
from -100px ~ -50px : (10px steps)
```html
<div class="t_-100">top: -100px</div>
<div class="t_-90">top: -90px</div>
<div class="t_-80">top: -80px</div>
...
<div class="t_-50">top: -50px</div>
```

from -50px ~ -10px : (5px steps)
```html
<div class="t_-50">top: -50px</div>
<div class="t_-45">top: -45px</div>
<div class="t_-40">top: -40px</div>
...
<div class="t_-10">top: -10px</div>
```

from -10px ~ 10px : (1px steps)
```html
<div class="t_-10">top: -10px</div>
<div class="t_-9">top: -9px</div>
<div class="t_-8">top: -8px</div>
...
<div class="t_9">top: 9px</div>
<div class="t_10">top: 10px</div>
```

from 10px ~ 50px : (5px steps)
```html
<div class="t_10">top: 10px</div>
<div class="t_15">top: 15px</div>
<div class="t_20">top: 20px</div>
...
<div class="t_50">top: 50px</div>
```

from 50px ~ 100px : (10px steps)
```html
<div class="t_50">top: 50px</div>
<div class="t_60">top: 60px</div>
<div class="t_70">top: 70px</div>
...
<div class="t_100">top: 100px</div>
```

from 100px ~ 500px : (50px steps)
```html
<div class="t_100">top: 100px</div>
<div class="t_150">top: 150px</div>
<div class="t_200">top: 200px</div>
...
<div class="t_500">top: 500px</div>
```

### right, bottom, left :
they are exactly like `"top"` classes, except that you need to replace `"t_"` with :

`"r_"` for `"right"` positioning,

`"b_"` for `"bottom"` positioning,

`"l_"` for `"left"` positioning,

example :
```html
<div class="r_100">right: 100px</div>
<div class="b_100">bottom: 100px</div>
<div class="l_100">left: 100px</div>
```

---

# Margin :
set margin auto to sides :
```html
<div class="mg_a">margin-right: auto; margin-left: auto</div>
```

### margin-top :
we have classes for margins between -100px to 100px.

from -100px to -10px in 5px steps.
```html
<div class="mgt_-100">margin-top: -100px</div>
<div class="mgt_-95">margin-top: -95px</div>
<div class="mgt_-90">margin-top: -90px</div>
...
<div class="mgt_-10">margin-top: -10px</div>
```

from -10px to 10px all pixels exist.
```html
<div class="mgt_-10">margin-top: -10px</div>
<div class="mgt_-9">margin-top: -9px</div>
<div class="mgt_-8">margin-top: -8px</div>
...
<div class="mgt_9">margin-top: 9px</div>
<div class="mgt_10">margin-top: 10px</div>
```

from 10px to 100px in 5px steps.
```html
<div class="mgt_10">margin-top: 10px</div>
<div class="mgt_15">margin-top: 15px</div>
<div class="mgt_20">margin-top: 20px</div>
...
<div class="mgt_100">margin-top: 100px</div>
```

### margin-right, margin-bottom, margin-left :
they are exactly like `"margin-top"` classes, except that you need to replace `"mgt_"` with :

`"mgr_"` for `"margin-right"` positioning,

`"mgb_"` for `"margin-bottom"` positioning,

`"mgl_"` for `"margin-left"` positioning,

example :
```html
<div class="mgr_100">margin-right: 100px</div>
<div class="mgb_100">margin-bottom: 100px</div>
<div class="mgl_100">margin-left: 100px</div>
```

---

# Padding :

### padding for all sides :

from 0 to 10px every size :
```html
<div class="pdn_0">padding: 0</div>
<div class="pdn_1">padding: 1px</div>
<div class="pdn_2">padding: 2px</div>
...
<div class="pdn_10">padding: 10px</div>
```

from 10px to 100px in 5px steps :
```html
<div class="pdn_10">padding: 10px</div>
<div class="pdn_15">padding: 15px</div>
<div class="pdn_20">padding: 20px</div>
...
<div class="pdn_100">padding: 100px</div>
```

### set padding with 2 params :

`"padding"` style can work with 2 params. first one for padding top and bottom equally, and second one for right and left sides.
```html
<div style="padding: 10px 15px">
	this means padding top and bottom are 10px and padding right and left are 15px
</div>
```

to apply this type of paddings do it like these examples :
```html
<div class="pdn_10_15">padding: 10px 15px</div>
```

from 0 to 10px all paddings exist :
```html
<div class="pdn_0_10">padding: 0px 10px</div>
<div class="pdn_1_10">padding: 1px 10px</div>
<div class="pdn_2_10">padding: 2px 10px</div>
...
<div class="pdn_10_10">padding: 10px 10px</div>
```

from 10px to 50px in 5px steps :
```html
<div class="pdn_10_10">padding: 10px 10px</div>
<div class="pdn_15_10">padding: 15px 10px</div>
<div class="pdn_20_10">padding: 20px 10px</div>
...
<div class="pdn_50_10">padding: 50px 10px</div>
```

both numbers can change :
```html
<div class="pdn_0_10">padding: 0px 10px</div>
<div class="pdn_5_15">padding: 5px 15px</div>
<div class="pdn_20_2">padding: 20px 2px</div>
<div class="pdn_50_8">padding: 50px 8px</div>
```


### padding-top :

from 0 to 10px every size exist :
```html
<div class="pdnt_0">padding-top: 0px</div>
<div class="pdnt_1">padding-top: 1px</div>
<div class="pdnt_2">padding-top: 2px</div>
...
<div class="pdnt_10">padding-top: 10px</div>
```

from 10px to 100px in 5px steps :
```html
<div class="pdnt_10">padding-top: 10px</div>
<div class="pdnt_15">padding-top: 15px</div>
<div class="pdnt_20">padding-top: 20px</div>
...
<div class="pdnt_100">padding-top: 100px</div>
```

from 100px to 300px in 50px steps :
```html
<div class="pdnt_100">padding-top: 100px</div>
<div class="pdnt_150">padding-top: 150px</div>
<div class="pdnt_200">padding-top: 200px</div>
...
<div class="pdnt_300">padding-top: 300px</div>
```

### padding-right, padding-bottom, padding-left :

they are exactly like `"padding-top"` classes, except that you need to replace `"pdnt_"` with :

`"pdnr_"` for `"padding-right"`,

`"pdnb_"` for `"padding-bottom"`,

`"pdnl_"` for `"padding-left"`,

examples :
```html
<div class="pdnr_100">padding-right: 100px</div>
<div class="pdnb_100">padding-bottom: 100px</div>
<div class="pdnl_100">padding-left: 100px</div>
```

---

# Width :

width auto :
```html
<div class="w_a">width: auto</div>
```

width 100% :
```html
<div class="w_full">width: 100%</div>
```

### width with px unit :

from 0 to 50px every size :
```html
<div class="w_0">width: 0</div>
<div class="w_1">width: 1px</div>
<div class="w_2">width: 2px</div>
...
<div class="w_50">width: 50px</div>
```

from 50px to 100px in 5px steps :
```html
<div class="w_50">width: 50px</div>
<div class="w_55">width: 55px</div>
<div class="w_60">width: 60px</div>
...
<div class="w_100">width: 100px</div>
```

from 100px to 1000px in 50px steps :
```html
<div class="w_100">width: 100px</div>
<div class="w_150">width: 150px</div>
<div class="w_200">width: 200px</div>
...
<div class="w_1000">width: 1000px</div>
```

### min-width with px unit :

from 5px to 50px in 5px steps :
```html
<div class="mw_5">min-width: 5px</div>
<div class="mw_10">min-width: 10px</div>
<div class="mw_15">min-width: 15px</div>
...
<div class="mw_50">min-width: 50px</div>
```

from 50px to 100px in 10px steps :
```html
<div class="mw_50">min-width: 50px</div>
<div class="mw_60">min-width: 60px</div>
<div class="mw_70">min-width: 70px</div>
...
<div class="mw_100">min-width: 100px</div>
```

from 100px to 1000px in 50px steps :
```html
<div class="mw_100">min-width: 100px</div>
<div class="mw_150">min-width: 150px</div>
<div class="mw_200">min-width: 200px</div>
...
<div class="mw_1000">min-width: 1000px</div>
```

### max-width with px unit :
they are exactly like `"min-width"` classes, except that you need to replace `"mw_"` with `"mxw_"`.

example :
```html
<div class="mxw_100">max-width: 100px</div>
```

### width with % unit :

from 0 to 100 in 5 steps :
```html
<div class="w_5pc">width: 5%</div>
<div class="w_10pc">width: 10%</div>
<div class="w_15pc">width: 15%</div>
...
<div class="w_100pc">width: 100%</div>
```

### min-width with % unit :

from 0 to 100 in 5 steps :
```html
<div class="mw_5pc">min-width: 5%</div>
<div class="mw_10pc">min-width: 10%</div>
<div class="mw_15pc">min-width: 15%</div>
...
<div class="mw_100pc">min-width: 100%</div>
```

### max-width with % unit :

from 0 to 100 in 5 steps :
```html
<div class="mxw_5pc">max-width: 5%</div>
<div class="mxw_10pc">max-width: 10%</div>
<div class="mxw_15pc">max-width: 15%</div>
...
<div class="mxw_100pc">max-width: 100%</div>
```

### width with vw unit :

`"vw"` size is based on viewport size. 40vw means 40% of your browser width.

```html
<div class="w_5vw">width: 5vw</div>
<div class="w_10vw">width: 10vw</div>
<div class="w_15vw">width: 15vw</div>
...
<div class="w_100vw">width: 100vw</div>
```

### min-width with vw unit :

```html
<div class="mw_5vw">min-width: 5vw</div>
<div class="mw_10vw">min-width: 10vw</div>
<div class="mw_15vw">min-width: 15vw</div>
...
<div class="mw_100vw">min-width: 100vw</div>
```

### max-width with vw unit :

```html
<div class="mxw_5vw">max-width: 5vw</div>
<div class="mxw_10vw">max-width: 10vw</div>
<div class="mxw_15vw">max-width: 15vw</div>
...
<div class="mxw_100vw">max-width: 100vw</div>
```

### minus 100% width :

imagine you have 2 elements and you know width of one of them. If you want to put them aside each other and want to take the full row, you have to use calc function like this :
```html
<div style="width: 200px">element A</div>
<div style="width: calc(100% - 200px)">element B</div>
```

we have classes for that!

for 5px to 100px in 5px steps :
```html
<div class="w_-5">width: calc(100% - 5px)</div>
<div class="w_-10">width: calc(100% - 10px)</div>
<div class="w_-15">width: calc(100% - 15px)</div>
...
<div class="w_-100">width: calc(100% - 100px)</div>
```

for -100px to -300px in 10px steps :
```html
<div class="w_-100">width: calc(100% - 100px)</div>
<div class="w_-110">width: calc(100% - 110px)</div>
<div class="w_-120">width: calc(100% - 120px)</div>
...
<div class="w_-300">width: calc(100% - 300px)</div>
```

---

# Height :

`"height"` classes are exactly like `"width"` classes except that you need to change class names like these :

`"h_"` instead of `"w_"` for height in px unit,

`"mh_"` instead of `"mw_"` for min-height in px unit,

`"mxh_"` instead of `"mxw_"` for max-height in px unit,

`"vh"` instead of `"vw"` for viewport unit,

examples :

```html
<!-- auto, full -->
<div class="h_a">height: auto</div>
<div class="h_full">height: 100%</div>

<!-- unit px -->
<div class="h_50">height: 50px</div>
<div class="mh_50">min-height: 50px</div>
<div class="mxh_50">max-height: 50px</div>

<!-- unit % -->
<div class="h_50pc">height: 50%</div>
<div class="mh_50pc">min-height: 50%</div>
<div class="mxh_50pc">max-height: 50%</div>

<!-- unit vh (viewport height) -->
<div class="h_50vh">height: 50vh</div>
<div class="mh_50vh">min-height: 50vh</div>
<div class="mxh_50vh">max-height: 50vh</div>

<!-- minus height -->
<div class="h_-100">height: calc(100% - 100px)</div>
```

---

# Background :

if you want to make a div covers parent div's area :
```html
<div class="w_200 h_100">
	<div class="cover">this div also is w_200 and h_100</div>
</div>
```

you can also use alternative class name `bg_cover` for that ... this sometimes helps to better understand codes.
```html
<div class="w_200 h_100">
	<div class="bg_cover">this div also is w_200 and h_100</div>
</div>
```

### background image to center :

to set a bg image to an element and make it cover the element and be at center without repeating, use this simple class :
```html
<div class="bg_center" style="url('some-image.png')"></div>
```

### background-size :

```html
<div class="bgz_a">background-size: auto</div>
<div class="bgz_cov">background-size: cover</div>
<div class="bgz_con">background-size: contain</div>
<div class="bgz_full">background-size: 100% 100%</div>
<div class="bgz_full_auto">background-size: 100% auto</div>

<!-- alternate short name for 'bgz_full_auto' -->
<div class="bgz_f_a">background-size: 100% auto</div>
```

### background-repeat :

```html
<div class="bgr_n">background-repeat: no-repeat</div>
<div class="bgr_r">background-repeat: repeat</div>
<div class="bgr_rx">background-repeat: repeat-x</div>
<div class="bgr_ry">background-repeat: repeat-y</div>
```

### background-attachment :

```html
<div class="bg_fix">background-attachment: fixed</div>
```

### background-position :

```html
<div class="bgp_t">background-position: top</div>
<div class="bgp_c">background-position: center</div>
<div class="bgp_b">background-position: bottom</div>
<div class="bgp_l">background-position: left</div>
<div class="bgp_r">background-position: right</div>

<!-- to right -->
<div class="bgp_rt">background-position: right top</div>
<div class="bgp_rc">background-position: right center</div>
<div class="bgp_rb">background-position: right bottom</div>

<!-- to right (alternative classes) -->
<div class="bgp_tr">background-position: right top</div>
<div class="bgp_cr">background-position: right center</div>
<div class="bgp_br">background-position: right bottom</div>

<!-- to left -->
<div class="bgp_lt">background-position: left top</div>
<div class="bgp_lc">background-position: left center</div>
<div class="bgp_lb">background-position: left bottom</div>

<!-- to left (alternative classes) -->
<div class="bgp_tl">background-position: left top</div>
<div class="bgp_cl">background-position: left center</div>
<div class="bgp_bl">background-position: left bottom</div>

<!-- to center -->
<div class="bgp_ct">background-position: center top</div>
<div class="bgp_cc">background-position: center center</div>
<div class="bgp_cb">background-position: center bottom</div>

<!-- to center (alternative classes) -->
<div class="bgp_tc">background-position: center top</div>
<div class="bgp_bc">background-position: center bottom</div>
```

---

# Text & Font :

### font-size classes for "px" unit :
we have every font-size from 6px to 20px
```html
<div class="fz_6">font-size is 6px</div>
<div class="fz_7">font-size is 7px</div>
<div class="fz_8">font-size is 8px</div>
...
<div class="fz_20">font-size is 20px</div>
```

for font-sizes bigger than 20 pixel we have classes in even-numbers only :
```html
<div class="fz_22">font-size is 22px</div>
<div class="fz_24">font-size is 24px</div>
<div class="fz_26">font-size is 26px</div>
...
<div class="fz_100">font-size is 100px</div>
```

---

### font-size classes for "pt" unit :

we have every font-size from 6pt to 30pt
```html
<div class="fz_6pt">font-size is 6pt</div>
<div class="fz_7pt">font-size is 7pt</div>
<div class="fz_8pt">font-size is 8pt</div>
...
<div class="fz_30pt">font-size is 30pt</div>
```

---

### font-styles :
to make italic text :
```html
<div class="i">italic text</div>
<div class="italic">italic text</div>
<div class="fs_i">italic text</div>
```

to make bold text :
```html
<div class="b">bold text</div>
<div class="bold">bold text</div>
<div class="fs_b">bold text</div>
```

to make normal text :
```html
<div class="n">normal text</div>
<div class="normal">normal text</div>
<div class="fs_n">normal text</div>
```

---

### font-weight :
```html
<div class="fw_100">font-weight is 100</div>
<div class="fw_200">font-weight is 200</div>
<div class="fw_300">font-weight is 300</div>
<div class="fw_400">font-weight is 400</div>
<div class="fw_500">font-weight is 500</div>
<div class="fw_600">font-weight is 600</div>
<div class="fw_700">font-weight is 700</div>
<div class="fw_800">font-weight is 800</div>
<div class="fw_900">font-weight is 900</div>
<div class="fw_n">font-weight is normal</div>
<div class="fw_b">font-weight is bold</div>
<div class="fw_br">font-weight is bolder</div>
<div class="fw_lr">font-weight is lighter</div>
```

---

### direction :
```html
<div class="ltr">left to right direction</div>
<div class="rtl">right to left direction</div>
```

---

### text-align :
```html
<div class="tx_r">text-align : right</div>
<div class="tx_l">text-align : left</div>
<div class="tx_c">text-align : center</div>
<div class="tx_j">text-align : justify</div>
```

---

### line height with no unit (default) :
this value can be a float number like 0.8 or 1.5

or can be an integer like 1 or 2

to apply these styles multiply it to 100 then use it like these examples :
```html
<div class="lh_50">line-height: 0.5</div>
<div class="lh_60">line-height: 0.6</div>
<div class="lh_70">line-height: 0.7</div>
...
<div class="lh_290">line-height: 2.9</div>
<div class="lh_300">line-height: 3</div>
```

### line height with "px" unit :
we have every number between 10 to 50 pixels :
```html
<div class="lh_10px">line-height: 10px</div>
<div class="lh_11px">line-height: 11px</div>
<div class="lh_12px">line-height: 12px</div>
...
<div class="lh_50px">line-height: 50px</div>
```

to apply styles bigger than 50 pixel we have 5-step sizes :
```html
<div class="lh_55px">line-height: 55px</div>
<div class="lh_60px">line-height: 60px</div>
<div class="lh_65px">line-height: 65px</div>
...
<div class="lh_100px">line-height: 100px</div>
```

---

### letter-spacing :
```html
<div class="letsp_n">letter-spacing: normal</div>
<div class="letsp_1">letter-spacing: 1px</div>
<div class="letsp_2">letter-spacing: 2px</div>
<div class="letsp_3">letter-spacing: 3px</div>
<div class="letsp_4">letter-spacing: 4px</div>
<div class="letsp_5">letter-spacing: 5px</div>
```

we also have alternative shorter class names :
```html
<div class="ls_n">letter-spacing: normal</div>
<div class="ls_1">letter-spacing: 1px</div>
<div class="ls_2">letter-spacing: 2px</div>
<div class="ls_3">letter-spacing: 3px</div>
<div class="ls_4">letter-spacing: 4px</div>
<div class="ls_5">letter-spacing: 5px</div>
```

---

### word-spacing :
```html
<div class="wordsp_n">word-spacing: normal</div>
<div class="wordsp_1">word-spacing: 1px</div>
<div class="wordsp_2">word-spacing: 2px</div>
<div class="wordsp_3">word-spacing: 3px</div>
<div class="wordsp_4">word-spacing: 4px</div>
<div class="wordsp_5">word-spacing: 5px</div>
```

we also have alternative shorter class names :
```html
<div class="ws_n">word-spacing: normal</div>
<div class="ws_1">word-spacing: 1px</div>
<div class="ws_2">word-spacing: 2px</div>
<div class="ws_3">word-spacing: 3px</div>
<div class="ws_4">word-spacing: 4px</div>
<div class="ws_5">word-spacing: 5px</div>
```

---

# Border :

### border-width :

from 0px to 20px :
```html
<div class="bd_0">border-width: 0</div>
<div class="bd_1">border-width: 1px</div>
<div class="bd_2">border-width: 2px</div>
...
<div class="bd_20">border-width: 20px</div>
```

### border-style :

```html
<div class="bd_none">border-style: none</div>
<div class="bd_hidden">border-style: hidden</div>
<div class="bd_dotted">border-style: dotted</div>
<div class="bd_dashed">border-style: dashed</div>
<div class="bd_solid">border-style: solid</div>
<div class="bd_double">border-style: double</div>
<div class="bd_groove">border-style: groove</div>
<div class="bd_ridge">border-style: ridge</div>
<div class="bd_inset">border-style: inset</div>
<div class="bd_outset">border-style: outset</div>
```

to set border styles for specific side just replace `"bd_"` with :

`"bdt_"` for border-top,

`"bdr_"` for border-right,

`"bdb_"` for border-bottom,

`"bdl_"` for border-left,

examples :
```html
<div class="bdt_dashed">border-top-style: dashed</div>
<div class="bdr_solid">border-right-style: solid</div>
<div class="bdb_2">border-bottom-width: 2px</div>
<div class="bdl_2">border-left-width: 2px</div>
```

---

### Border-Spacing :

from 0px to 10px :
```html
<div class="bdsp_0">border-spacing: 0px</div>
<div class="bdsp_1">border-spacing: 1px</div>
<div class="bdsp_2">border-spacing: 2px</div>
...
<div class="bdsp_10">border-spacing: 10px</div>
```

### border-collapse :

```html
<div class="bd_collapse">border-collapse: collapse</div>
<div class="bd_sep">border-collapse: separate</div>
```


---

# Opacity :

opacity style values are between 0 to 1.

0 means it is hidden and 1 means it is quite visible.

we have opacity values for each 5% steps :
```html
<div class="op_0"  >opacity: 0</div>
<div class="op_005">opacity: 0.05</div>
<div class="op_01" >opacity: 0.10</div>
<div class="op_015">opacity: 0.15</div>
<div class="op_02" >opacity: 0.20</div>
<div class="op_025">opacity: 0.25</div>
<div class="op_03" >opacity: 0.30</div>
<div class="op_035">opacity: 0.35</div>
<div class="op_04" >opacity: 0.40</div>
<div class="op_045">opacity: 0.45</div>
<div class="op_05" >opacity: 0.50</div>
<div class="op_055">opacity: 0.55</div>
<div class="op_06" >opacity: 0.60</div>
<div class="op_065">opacity: 0.65</div>
<div class="op_07" >opacity: 0.70</div>
<div class="op_075">opacity: 0.75</div>
<div class="op_080">opacity: 0.80</div>
<div class="op_085">opacity: 0.85</div>
<div class="op_09" >opacity: 0.90</div>
<div class="op_095">opacity: 0.95</div>
<div class="op_1"  >opacity: 1</div>
```

### opacity hover effect :

you can easily apply opacity hover effects with adding `"hov_"` to beginning of above classes.

examples :
```html
<div class="hov_op_05">
	when mouse hovers, opacity will be 0.05 with speed of 250ms.
</div>
```

---

### mouse cursor :
```html
<div class="cursor_auto">cursor: auto</div>
<div class="cursor_pointer">cursor: pointer</div>
<div class="cursor_default">cursor: default</div>
<div class="cursor_none">cursor: none</div>
<div class="cursor_text">cursor: text</div>
<div class="cursor_wait">cursor: wait</div>
<div class="cursor_progress">cursor: progress</div>
```

we also have alternative shorter class names :
```html
<div class="curs_a">cursor: auto</div>
<div class="curs_po">cursor: pointer</div>
<div class="curs_de">cursor: default</div>
<div class="curs_n">cursor: none</div>
<div class="curs_t">cursor: text</div>
<div class="curs_w">cursor: wait</div>
<div class="curs_pg">cursor: progress</div>
```

---

### vertical-align :
```html
<div class="va_t">vertical-align: top</div>
<div class="va_m">vertical-align: middle</div>
<div class="va_b">vertical-align: bottom</div>
<div class="va_bl">vertical-align: baseline</div>
<div class="va_sb">vertical-align: sub</div>
<div class="va_sp">vertical-align: super</div>
<div class="va_tt">vertical-align: text-top</div>
<div class="va_tb">vertical-align: text-bottom</div>
```

---

# Colors :

we separated color classes in an independent repository here :

[AminAdel/webcolors](https://github.com/AminAdel/webcolors)

all coloring classes is now there. and they are great match with `"Erkin-Base"`. we strongly recommend to use it beside `"Erkin-Base"`.


_...this document is not finished yet!_