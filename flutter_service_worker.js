'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "7014dee6f6e556d80f3a9c69cc1435b7",
"index.html": "786a405cd96657b4477f54846543c1aa",
"/": "786a405cd96657b4477f54846543c1aa",
"main.dart.js": "df556725f3b3f387e533dbe94b78af71",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "6cbb0f766f3e5f99c79a4282af6ee21e",
"icons/icon-192.png": "22384b4971a0aa5da33948bd731d108a",
"icons/icon-192-maskable.png": "c6260234f2fcc6eca1f6b6ae848b427e",
"icons/icon-512-maskable.png": "073a0d111a05c10726c6f11739410e3f",
"icons/icon-512.png": "efeb3b71bb5d10af9adac13a29d6321e",
"manifest.json": "c76adaff95fc63e8decae596a27ca18a",
"assets/AssetManifest.json": "f64172d4726353fa79b11929cd349f2d",
"assets/NOTICES": "e15d39b37afe64727b12208ecc169022",
"assets/pubspec.yaml": "09cb8533336d94dfddbe37549b4c11c1",
"assets/FontManifest.json": "476f468610c5836f716bb8b82cf80ed4",
"assets/packages/intl_phone_field/assets/flags/tg.png": "7f91f02b26b74899ff882868bd611714",
"assets/packages/intl_phone_field/assets/flags/me.png": "590284bc85810635ace30a173e615ca4",
"assets/packages/intl_phone_field/assets/flags/la.png": "e8cd9c3ee6e134adcbe3e986e1974e4a",
"assets/packages/intl_phone_field/assets/flags/mr.png": "f2a62602d43a1ee14625af165b96ce2f",
"assets/packages/intl_phone_field/assets/flags/ni.png": "e398dc23e79d9ccd702546cc25f126bf",
"assets/packages/intl_phone_field/assets/flags/lv.png": "53105fea0cc9cc554e0ceaabc53a2d5d",
"assets/packages/intl_phone_field/assets/flags/om.png": "cebd9ab4b9ab071b2142e21ae2129efc",
"assets/packages/intl_phone_field/assets/flags/af.png": "ba710b50a060b5351381b55366396c30",
"assets/packages/intl_phone_field/assets/flags/cy.png": "7b36f4af86257a3f15f5a5a16f4a2fcd",
"assets/packages/intl_phone_field/assets/flags/bj.png": "6fdc6449f73d23ad3f07060f92db4423",
"assets/packages/intl_phone_field/assets/flags/aq.png": "0c586e7b91aa192758fdd0f03adb84d8",
"assets/packages/intl_phone_field/assets/flags/cn.png": "040539c2cdb60ebd9dc8957cdc6a8ad0",
"assets/packages/intl_phone_field/assets/flags/gb-sct.png": "75106a5e49e3e16da76cb33bdac102ab",
"assets/packages/intl_phone_field/assets/flags/co.png": "e3b1be16dcdae6cb72e9c238fdddce3c",
"assets/packages/intl_phone_field/assets/flags/cx.png": "8efa3231c8a3900a78f2b51d829f8c52",
"assets/packages/intl_phone_field/assets/flags/ag.png": "41c11d5668c93ba6e452f811defdbb24",
"assets/packages/intl_phone_field/assets/flags/ms.png": "9c955a926cf7d57fccb450a97192afa7",
"assets/packages/intl_phone_field/assets/flags/md.png": "8911d3d821b95b00abbba8771e997eb3",
"assets/packages/intl_phone_field/assets/flags/zm.png": "81cec35b715f227328cad8f314acd797",
"assets/packages/intl_phone_field/assets/flags/vn.png": "32ff65ccbf31a707a195be2a5141a89b",
"assets/packages/intl_phone_field/assets/flags/tf.png": "b2c044b86509e7960b5ba66b094ea285",
"assets/packages/intl_phone_field/assets/flags/td.png": "009303b6188ca0e30bd50074b16f0b16",
"assets/packages/intl_phone_field/assets/flags/yt.png": "134bee9f9d794dc5c0922d1b9bdbb710",
"assets/packages/intl_phone_field/assets/flags/lb.png": "f80cde345f0d9bd0086531808ce5166a",
"assets/packages/intl_phone_field/assets/flags/mf.png": "134bee9f9d794dc5c0922d1b9bdbb710",
"assets/packages/intl_phone_field/assets/flags/lu.png": "6274fd1cae3c7a425d25e4ccb0941bb8",
"assets/packages/intl_phone_field/assets/flags/mq.png": "134bee9f9d794dc5c0922d1b9bdbb710",
"assets/packages/intl_phone_field/assets/flags/cz.png": "73ecd64c6144786c4d03729b1dd9b1f3",
"assets/packages/intl_phone_field/assets/flags/ae.png": "792efc5eb6c31d780bd34bf4bad69f3f",
"assets/packages/intl_phone_field/assets/flags/cm.png": "42d52fa71e8b4dbb182ff431749e8d0d",
"assets/packages/intl_phone_field/assets/flags/bi.png": "adda8121501f0543f1075244a1acc275",
"assets/packages/intl_phone_field/assets/flags/ar.png": "3bd245f8c28f70c9ef9626dae27adc65",
"assets/packages/intl_phone_field/assets/flags/as.png": "d9c1da515c6f945c2e2554592a9dfaae",
"assets/packages/intl_phone_field/assets/flags/bh.png": "a1acd86ef0e19ea5f0297bbe1de6cfd4",
"assets/packages/intl_phone_field/assets/flags/cl.png": "6735e0e2d88c119e9ed1533be5249ef1",
"assets/packages/intl_phone_field/assets/flags/ad.png": "384e9845debe9aca8f8586d9bedcb7e6",
"assets/packages/intl_phone_field/assets/flags/mp.png": "87351c30a529071ee9a4bb67765fea4f",
"assets/packages/intl_phone_field/assets/flags/lt.png": "7df2cd6566725685f7feb2051f916a3e",
"assets/packages/intl_phone_field/assets/flags/mg.png": "0ef6271ad284ebc0069ff0aeb5a3ad1e",
"assets/packages/intl_phone_field/assets/flags/lc.png": "8c1a03a592aa0a99fcaf2b81508a87eb",
"assets/packages/intl_phone_field/assets/flags/tr.png": "27feab1a5ca390610d07e0c6bd4720d5",
"assets/packages/intl_phone_field/assets/flags/ua.png": "b4b10d893611470661b079cb30473871",
"assets/packages/intl_phone_field/assets/flags/tv.png": "c57025ed7ae482210f29b9da86b0d211",
"assets/packages/intl_phone_field/assets/flags/vi.png": "3f317c56f31971b3179abd4e03847036",
"assets/packages/intl_phone_field/assets/flags/mt.png": "f3119401ae0c3a9d6e2dc23803928c06",
"assets/packages/intl_phone_field/assets/flags/no.png": "33bc70259c4908b7b9adeef9436f7a9f",
"assets/packages/intl_phone_field/assets/flags/mc.png": "90c2ad7f144d73d4650cbea9dd621275",
"assets/packages/intl_phone_field/assets/flags/ch.png": "a251702f7760b0aac141428ed60b7b66",
"assets/packages/intl_phone_field/assets/flags/bl.png": "dae94f5465d3390fdc5929e4f74d3f5f",
"assets/packages/intl_phone_field/assets/flags/aw.png": "a93ddf8e32d246dc47f6631f38e0ed92",
"assets/packages/intl_phone_field/assets/flags/bz.png": "fd2d7d27a5ddabe4eb9a10b1d3a433e4",
"assets/packages/intl_phone_field/assets/flags/bm.png": "b366ba84cbc8286c830f392bb9086be5",
"assets/packages/intl_phone_field/assets/flags/ci.png": "7f5ca3779d5ff6ce0c803a6efa0d2da7",
"assets/packages/intl_phone_field/assets/flags/mu.png": "c5228d1e94501d846b5bf203f038ae49",
"assets/packages/intl_phone_field/assets/flags/us.png": "83b065848d14d33c0d10a13e01862f34",
"assets/packages/intl_phone_field/assets/flags/tw.png": "b1101fd5f871a9ffe7c9ad191a7d3304",
"assets/packages/intl_phone_field/assets/flags/ye.png": "4cf73209d90e9f02ead1565c8fdf59e5",
"assets/packages/intl_phone_field/assets/flags/mw.png": "ffc1f18eeedc1dfbb1080aa985ce7d05",
"assets/packages/intl_phone_field/assets/flags/nl.png": "3649c177693bfee9c2fcc63c191a51f1",
"assets/packages/intl_phone_field/assets/flags/ls.png": "2bca756f9313957347404557acb532b0",
"assets/packages/intl_phone_field/assets/flags/bo.png": "3ccf6fa7f9cbc27949b8418925e4e89c",
"assets/packages/intl_phone_field/assets/flags/at.png": "570c070177a5ea0fe03e20107ebf5283",
"assets/packages/intl_phone_field/assets/flags/ck.png": "39f343868a8dc8ca95d27b27a5caf480",
"assets/packages/intl_phone_field/assets/flags/by.png": "beabf61e94fb3a4f7c7a7890488b213d",
"assets/packages/intl_phone_field/assets/flags/au.png": "72be14316f0af3903cdca7a726c0c589",
"assets/packages/intl_phone_field/assets/flags/bn.png": "ed650de06fff61ff27ec92a872197948",
"assets/packages/intl_phone_field/assets/flags/ma.png": "057ea2e08587f1361b3547556adae0c2",
"assets/packages/intl_phone_field/assets/flags/nz.png": "65c811e96eb6c9da65538f899c110895",
"assets/packages/intl_phone_field/assets/flags/lr.png": "b92c75e18dd97349c75d6a43bd17ee94",
"assets/packages/intl_phone_field/assets/flags/mv.png": "d9245f74e34d5c054413ace4b86b4f16",
"assets/packages/intl_phone_field/assets/flags/tc.png": "d728d6763c17c520ad6bcf3c24282a29",
"assets/packages/intl_phone_field/assets/flags/ug.png": "9a0f358b1eb19863e21ae2063fab51c0",
"assets/packages/intl_phone_field/assets/flags/tt.png": "a8e1fc5c65dc8bc362a9453fadf9c4b3",
"assets/packages/intl_phone_field/assets/flags/pl.png": "f20e9ef473a9ed24176f5ad74dd0d50a",
"assets/packages/intl_phone_field/assets/flags/rs.png": "9dff535d2d08c504be63062f39eff0b7",
"assets/packages/intl_phone_field/assets/flags/in.png": "1dec13ba525529cffd4c7f8a35d51121",
"assets/packages/intl_phone_field/assets/flags/ge.png": "6fbd41f07921fa415347ebf6dff5b0f7",
"assets/packages/intl_phone_field/assets/flags/gr.png": "ec11281d7decbf07b81a23a72a609b59",
"assets/packages/intl_phone_field/assets/flags/gs.png": "419dd57836797a3f1bf6258ea6589f9a",
"assets/packages/intl_phone_field/assets/flags/gd.png": "7a4864ccfa2a0564041c2d1f8a13a8c9",
"assets/packages/intl_phone_field/assets/flags/io.png": "83d45bbbff087d47b2b39f1c20598f52",
"assets/packages/intl_phone_field/assets/flags/hk.png": "4b5ec424348c98ec71a46ad3dce3931d",
"assets/packages/intl_phone_field/assets/flags/kp.png": "e1c8bb52f31fca22d3368d8f492d8f27",
"assets/packages/intl_phone_field/assets/flags/gb-nir.png": "98773db151c150cabe845183241bfe6b",
"assets/packages/intl_phone_field/assets/flags/kg.png": "c4aa6d221d9a9d332155518d6b82dbc7",
"assets/packages/intl_phone_field/assets/flags/pm.png": "134bee9f9d794dc5c0922d1b9bdbb710",
"assets/packages/intl_phone_field/assets/flags/sv.png": "217b691efbef7a0f48cdd53e91997f0e",
"assets/packages/intl_phone_field/assets/flags/re.png": "134bee9f9d794dc5c0922d1b9bdbb710",
"assets/packages/intl_phone_field/assets/flags/sa.png": "7c95c1a877148e2aa21a213d720ff4fd",
"assets/packages/intl_phone_field/assets/flags/sc.png": "e969fd5afb1eb5902675b6bcf49a8c2e",
"assets/packages/intl_phone_field/assets/flags/st.png": "fef62c31713ff1063da2564df3f43eea",
"assets/packages/intl_phone_field/assets/flags/ke.png": "cf5aae3699d3cacb39db9803edae172b",
"assets/packages/intl_phone_field/assets/flags/im.png": "7c9ccb825f0fca557d795c4330cf4f50",
"assets/packages/intl_phone_field/assets/flags/kr.png": "a3b7da3b76b20a70e9cd63cc2315b51b",
"assets/packages/intl_phone_field/assets/flags/gf.png": "134bee9f9d794dc5c0922d1b9bdbb710",
"assets/packages/intl_phone_field/assets/flags/dj.png": "078bd37d41f746c3cb2d84c1e9611c55",
"assets/packages/intl_phone_field/assets/flags/gq.png": "4286e56f388a37f64b21eb56550c06d9",
"assets/packages/intl_phone_field/assets/flags/gp.png": "134bee9f9d794dc5c0922d1b9bdbb710",
"assets/packages/intl_phone_field/assets/flags/dk.png": "abcd01bdbcc02b4a29cbac237f29cd1d",
"assets/packages/intl_phone_field/assets/flags/gg.png": "eed435d25bd755aa7f9cd7004b9ed49d",
"assets/packages/intl_phone_field/assets/flags/il.png": "1e06ad7783f24332405d36561024cc4c",
"assets/packages/intl_phone_field/assets/flags/pn.png": "0b0641b356af4c3e3489192ff4b0be77",
"assets/packages/intl_phone_field/assets/flags/sb.png": "296ecedbd8d1c2a6422c3ba8e5cd54bd",
"assets/packages/intl_phone_field/assets/flags/py.png": "154d4add03b4878caf00bd3249e14f40",
"assets/packages/intl_phone_field/assets/flags/ru.png": "6974dcb42ad7eb3add1009ea0c6003e3",
"assets/packages/intl_phone_field/assets/flags/kw.png": "3ca448e219d0df506fb2efd5b91be092",
"assets/packages/intl_phone_field/assets/flags/do.png": "ed35983a9263bb5713be37d9a52caddc",
"assets/packages/intl_phone_field/assets/flags/gt.png": "706a0c3b5e0b589c843e2539e813839e",
"assets/packages/intl_phone_field/assets/flags/gb.png": "98773db151c150cabe845183241bfe6b",
"assets/packages/intl_phone_field/assets/flags/gu.png": "2acb614b442e55864411b6e418df6eab",
"assets/packages/intl_phone_field/assets/flags/je.png": "288f8dca26098e83ff0455b08cceca1b",
"assets/packages/intl_phone_field/assets/flags/hm.png": "72be14316f0af3903cdca7a726c0c589",
"assets/packages/intl_phone_field/assets/flags/sg.png": "bc772e50b8c79f08f3c2189f5d8ce491",
"assets/packages/intl_phone_field/assets/flags/pk.png": "7a6a621f7062589677b3296ca16c6718",
"assets/packages/intl_phone_field/assets/flags/sr.png": "9f912879f2829a625436ccd15e643e39",
"assets/packages/intl_phone_field/assets/flags/se.png": "25dd5434891ac1ca2ad1af59cda70f80",
"assets/packages/intl_phone_field/assets/flags/jp.png": "25ac778acd990bedcfdc02a9b4570045",
"assets/packages/intl_phone_field/assets/flags/gw.png": "05606b9a6393971bd87718b809e054f9",
"assets/packages/intl_phone_field/assets/flags/eh.png": "515a9cf2620c802e305b5412ac81aed2",
"assets/packages/intl_phone_field/assets/flags/dz.png": "132ceca353a95c8214676b2e94ecd40f",
"assets/packages/intl_phone_field/assets/flags/ga.png": "b0e5b2fa1b7106c7652a955db24c11c4",
"assets/packages/intl_phone_field/assets/flags/fr.png": "134bee9f9d794dc5c0922d1b9bdbb710",
"assets/packages/intl_phone_field/assets/flags/dm.png": "8886b222ed9ccd00f67e8bcf86dadcc2",
"assets/packages/intl_phone_field/assets/flags/hn.png": "9ecf68aed83c4a9b3f1e6275d96bfb04",
"assets/packages/intl_phone_field/assets/flags/sd.png": "65ce270762dfc87475ea99bd18f79025",
"assets/packages/intl_phone_field/assets/flags/rw.png": "d1aae0647a5b1ab977ae43ab894ce2c3",
"assets/packages/intl_phone_field/assets/flags/ph.png": "e4025d1395a8455f1ba038597a95228c",
"assets/packages/intl_phone_field/assets/flags/ss.png": "b0120cb000b31bb1a5c801c3592139bc",
"assets/packages/intl_phone_field/assets/flags/qa.png": "eb9b3388e554cf85aea1e739247548df",
"assets/packages/intl_phone_field/assets/flags/pe.png": "4d9249aab70a26fadabb14380b3b55d2",
"assets/packages/intl_phone_field/assets/flags/pr.png": "b97b2f4432c430bc340d893f36527e31",
"assets/packages/intl_phone_field/assets/flags/si.png": "24237e53b34752554915e71e346bb405",
"assets/packages/intl_phone_field/assets/flags/ht.png": "630f7f8567d87409a32955107ad11a86",
"assets/packages/intl_phone_field/assets/flags/es.png": "654965f9722f6706586476fb2f5d30dd",
"assets/packages/intl_phone_field/assets/flags/gl.png": "b79e24ee1889b7446ba3d65564b86810",
"assets/packages/intl_phone_field/assets/flags/gm.png": "7148d3715527544c2e7d8d6f4a445bb6",
"assets/packages/intl_phone_field/assets/flags/er.png": "8ca78e10878a2e97c1371b38c5d258a7",
"assets/packages/intl_phone_field/assets/flags/fi.png": "3ccd69a842e55183415b7ea2c04b15c8",
"assets/packages/intl_phone_field/assets/flags/ee.png": "e242645cae28bd5291116ea211f9a566",
"assets/packages/intl_phone_field/assets/flags/kn.png": "f318e2fd87e5fd2cabefe9ff252bba46",
"assets/packages/intl_phone_field/assets/flags/hu.png": "281582a753e643b46bdd894047db08bb",
"assets/packages/intl_phone_field/assets/flags/iq.png": "bc3e6f68c5188dbf99b473e2bea066f2",
"assets/packages/intl_phone_field/assets/flags/ky.png": "38e39eba673e82c48a1f25bd103a7e97",
"assets/packages/intl_phone_field/assets/flags/sh.png": "98773db151c150cabe845183241bfe6b",
"assets/packages/intl_phone_field/assets/flags/ps.png": "52a25a48658ca9274830ffa124a8c1db",
"assets/packages/intl_phone_field/assets/flags/pf.png": "1ae72c24380d087cbe2d0cd6c3b58821",
"assets/packages/intl_phone_field/assets/flags/sj.png": "33bc70259c4908b7b9adeef9436f7a9f",
"assets/packages/intl_phone_field/assets/flags/id.png": "80bb82d11d5bc144a21042e77972bca9",
"assets/packages/intl_phone_field/assets/flags/is.png": "907840430252c431518005b562707831",
"assets/packages/intl_phone_field/assets/flags/eg.png": "311d780e8e3dd43f87e6070f6feb74c7",
"assets/packages/intl_phone_field/assets/flags/fk.png": "da8b0fe48829aae2c8feb4839895de63",
"assets/packages/intl_phone_field/assets/flags/fj.png": "1c6a86752578eb132390febf12789cd6",
"assets/packages/intl_phone_field/assets/flags/gn.png": "b2287c03c88a72d968aa796a076ba056",
"assets/packages/intl_phone_field/assets/flags/gy.png": "159a260bf0217128ea7475ba5b272b6a",
"assets/packages/intl_phone_field/assets/flags/ir.png": "37f67c3141e9843196cb94815be7bd37",
"assets/packages/intl_phone_field/assets/flags/km.png": "5554c8746c16d4f482986fb78ffd9b36",
"assets/packages/intl_phone_field/assets/flags/ie.png": "1d91912afc591dd120b47b56ea78cdbf",
"assets/packages/intl_phone_field/assets/flags/kz.png": "cb3b0095281c9d7e7fb5ce1716ef8ee5",
"assets/packages/intl_phone_field/assets/flags/ro.png": "85af99741fe20664d9a7112cfd8d9722",
"assets/packages/intl_phone_field/assets/flags/sk.png": "2a1ee716d4b41c017ff1dbf3fd3ffc64",
"assets/packages/intl_phone_field/assets/flags/pg.png": "0f7e03465a93e0b4e3e1c9d3dd5814a4",
"assets/packages/intl_phone_field/assets/flags/pt.png": "eba93d33545c78cc67915d9be8323661",
"assets/packages/intl_phone_field/assets/flags/so.png": "1ce20d052f9d057250be96f42647513b",
"assets/packages/intl_phone_field/assets/flags/sx.png": "9c19254973d8acf81581ad95b408c7e6",
"assets/packages/intl_phone_field/assets/flags/hr.png": "69711b2ea009a3e7c40045b538768d4e",
"assets/packages/intl_phone_field/assets/flags/ki.png": "14db0fc29398730064503907bd696176",
"assets/packages/intl_phone_field/assets/flags/jm.png": "074400103847c56c37425a73f9d23665",
"assets/packages/intl_phone_field/assets/flags/eu.png": "c58ece3931acb87faadc5b940d4f7755",
"assets/packages/intl_phone_field/assets/flags/ec.png": "c1ae60d080be91f3be31e92e0a2d9555",
"assets/packages/intl_phone_field/assets/flags/et.png": "57edff61c7fddf2761a19948acef1498",
"assets/packages/intl_phone_field/assets/flags/fo.png": "2c7d9233582e83a86927e634897a2a90",
"assets/packages/intl_phone_field/assets/flags/kh.png": "d48d51e8769a26930da6edfc15de97fe",
"assets/packages/intl_phone_field/assets/flags/sy.png": "24186a0f4ce804a16c91592db5a16a3a",
"assets/packages/intl_phone_field/assets/flags/sn.png": "68eaa89bbc83b3f356e1ba2096b09b3c",
"assets/packages/intl_phone_field/assets/flags/pw.png": "2e697cc6907a7b94c7f94f5d9b3bdccc",
"assets/packages/intl_phone_field/assets/flags/sl.png": "61b9d992c8a6a83abc4d432069617811",
"assets/packages/intl_phone_field/assets/flags/gb-eng.png": "0d9f2a6775fd52b79e1d78eb1dda10cf",
"assets/packages/intl_phone_field/assets/flags/fm.png": "d571b8bc4b80980a81a5edbde788b6d2",
"assets/packages/intl_phone_field/assets/flags/gi.png": "446aa44aaa063d240adab88243b460d3",
"assets/packages/intl_phone_field/assets/flags/de.png": "5d9561246523cf6183928756fd605e25",
"assets/packages/intl_phone_field/assets/flags/gh.png": "b35464dca793fa33e51bf890b5f3d92b",
"assets/packages/intl_phone_field/assets/flags/jo.png": "c01cb41f74f9db0cf07ba20f0af83011",
"assets/packages/intl_phone_field/assets/flags/it.png": "5c8e910e6a33ec63dfcda6e8960dd19c",
"assets/packages/intl_phone_field/assets/flags/pa.png": "78e3e4fd56f0064837098fe3f22fb41b",
"assets/packages/intl_phone_field/assets/flags/sz.png": "d1829842e45c2b2b29222c1b7e201591",
"assets/packages/intl_phone_field/assets/flags/sm.png": "a8d6801cb7c5360e18f0a2ed146b396d",
"assets/packages/intl_phone_field/assets/flags/tn.png": "6612e9fec4bef022cbd45cbb7c02b2b6",
"assets/packages/intl_phone_field/assets/flags/ml.png": "0c50dfd539e87bb4313da0d4556e2d13",
"assets/packages/intl_phone_field/assets/flags/cg.png": "eca97338cc1cb5b5e91bec72af57b3d4",
"assets/packages/intl_phone_field/assets/flags/ax.png": "ec2062c36f09ed8fb90ac8992d010024",
"assets/packages/intl_phone_field/assets/flags/ao.png": "5f0a372aa3aa7150a3dafea97acfc10d",
"assets/packages/intl_phone_field/assets/flags/bt.png": "3cfe1440e952bc7266d71f7f1454fa23",
"assets/packages/intl_phone_field/assets/flags/an.png": "4e4b90fbca1275d1839ca5b44fc51071",
"assets/packages/intl_phone_field/assets/flags/bb.png": "a8473747387e4e7a8450c499529f1c93",
"assets/packages/intl_phone_field/assets/flags/cf.png": "263583ffdf7a888ce4fba8487d1da0b2",
"assets/packages/intl_phone_field/assets/flags/mm.png": "32e5293d6029d8294c7dfc3c3835c222",
"assets/packages/intl_phone_field/assets/flags/li.png": "ecdf7b3fe932378b110851674335d9ab",
"assets/packages/intl_phone_field/assets/flags/na.png": "cdc00e9267a873609b0abea944939ff7",
"assets/packages/intl_phone_field/assets/flags/mz.png": "1ab1ac750fbbb453d33e9f25850ac2a0",
"assets/packages/intl_phone_field/assets/flags/to.png": "1cdd716b5b5502f85d6161dac6ee6c5b",
"assets/packages/intl_phone_field/assets/flags/vg.png": "fc095e11f5b58604d6f4d3c2b43d167f",
"assets/packages/intl_phone_field/assets/flags/ve.png": "893391d65cbd10ca787a73578c77d3a7",
"assets/packages/intl_phone_field/assets/flags/tz.png": "56ec99c7e0f68b88a2210620d873683a",
"assets/packages/intl_phone_field/assets/flags/tm.png": "0980fb40ec450f70896f2c588510f933",
"assets/packages/intl_phone_field/assets/flags/mx.png": "84b12a569b209e213daccfcbdd1fc799",
"assets/packages/intl_phone_field/assets/flags/nc.png": "cb36e0c945b79d56def11b23c6a9c7e9",
"assets/packages/intl_phone_field/assets/flags/mo.png": "849848a26bbfc87024017418ad7a6233",
"assets/packages/intl_phone_field/assets/flags/lk.png": "5a3a063cfff4a92fb0ba6158e610e025",
"assets/packages/intl_phone_field/assets/flags/cd.png": "5b5f832ed6cd9f9240cb31229d8763dc",
"assets/packages/intl_phone_field/assets/flags/al.png": "722cf9e5c7a1d9c9e4608fb44dbb427d",
"assets/packages/intl_phone_field/assets/flags/bw.png": "fac8b90d7404728c08686dc39bab4fb3",
"assets/packages/intl_phone_field/assets/flags/cr.png": "bfd8b41e63fc3cc829c72c4b2e170532",
"assets/packages/intl_phone_field/assets/flags/bv.png": "33bc70259c4908b7b9adeef9436f7a9f",
"assets/packages/intl_phone_field/assets/flags/am.png": "aaa39141fbc80205bebaa0200b55a13a",
"assets/packages/intl_phone_field/assets/flags/az.png": "6ffa766f6883d2d3d350cdc22a062ca3",
"assets/packages/intl_phone_field/assets/flags/ba.png": "d415bad33b35de3f095177e8e86cbc82",
"assets/packages/intl_phone_field/assets/flags/mn.png": "16086e8d89c9067d29fd0f2ea7021a45",
"assets/packages/intl_phone_field/assets/flags/nu.png": "f4169998548e312584c67873e0d9352d",
"assets/packages/intl_phone_field/assets/flags/my.png": "f7f962e8a074387fd568c9d4024e0959",
"assets/packages/intl_phone_field/assets/flags/tl.png": "c80876dc80cda5ab6bb8ef078bc6b05d",
"assets/packages/intl_phone_field/assets/flags/ws.png": "f206322f3e22f175869869dbfadb6ce8",
"assets/packages/intl_phone_field/assets/flags/th.png": "11ce0c9f8c738fd217ea52b9bc29014b",
"assets/packages/intl_phone_field/assets/flags/xk.png": "079259fbcb1f3c78dafa944464295c16",
"assets/packages/intl_phone_field/assets/flags/nf.png": "1c2069b299ce3660a2a95ec574dfde25",
"assets/packages/intl_phone_field/assets/flags/ly.png": "8d65057351859065d64b4c118ff9e30e",
"assets/packages/intl_phone_field/assets/flags/ai.png": "ce5e91ed1725f0499b9231b69a7fd448",
"assets/packages/intl_phone_field/assets/flags/br.png": "5093e0cd8fd3c094664cd17ea8a36fd1",
"assets/packages/intl_phone_field/assets/flags/cv.png": "9b1f31f9fc0795d728328dedd33eb1c0",
"assets/packages/intl_phone_field/assets/flags/be.png": "7e5e1831cdd91935b38415479a7110eb",
"assets/packages/intl_phone_field/assets/flags/ca.png": "76f2fac1d3b2cc52ba6695c2e2941632",
"assets/packages/intl_phone_field/assets/flags/bd.png": "86a0e4bd8787dc8542137a407e0f987f",
"assets/packages/intl_phone_field/assets/flags/cw.png": "6c598eb0d331d6b238da57055ec00d33",
"assets/packages/intl_phone_field/assets/flags/bs.png": "2b9540c4fa514f71911a48de0bd77e71",
"assets/packages/intl_phone_field/assets/flags/ng.png": "aedbe364bd1543832e88e64b5817e877",
"assets/packages/intl_phone_field/assets/flags/mk.png": "835f2263974de523fa779d29c90595bf",
"assets/packages/intl_phone_field/assets/flags/np.png": "6e099fb1e063930bdd00e8df5cef73d4",
"assets/packages/intl_phone_field/assets/flags/va.png": "c010bf145f695d5c8fb551bafc081f77",
"assets/packages/intl_phone_field/assets/flags/uz.png": "3adad3bac322220cac8abc1c7cbaacac",
"assets/packages/intl_phone_field/assets/flags/um.png": "8fe7c4fed0a065fdfb9bd3125c6ecaa1",
"assets/packages/intl_phone_field/assets/flags/tk.png": "60428ff1cdbae680e5a0b8cde4677dd5",
"assets/packages/intl_phone_field/assets/flags/vc.png": "da3ca14a978717467abbcdece05d3544",
"assets/packages/intl_phone_field/assets/flags/zw.png": "078a3267ea8eabf88b2d43fe4aed5ce5",
"assets/packages/intl_phone_field/assets/flags/nr.png": "1316f3a8a419d8be1975912c712535ea",
"assets/packages/intl_phone_field/assets/flags/ne.png": "a20724c177e86d6a27143aa9c9664a6f",
"assets/packages/intl_phone_field/assets/flags/cu.png": "f41715bd51f63a9aebf543788543b4c4",
"assets/packages/intl_phone_field/assets/flags/bq.png": "3649c177693bfee9c2fcc63c191a51f1",
"assets/packages/intl_phone_field/assets/flags/bf.png": "63f1c67fca7ce8b52b3418a90af6ad37",
"assets/packages/intl_phone_field/assets/flags/bg.png": "1d24bc616e3389684ed2c9f18bcb0209",
"assets/packages/intl_phone_field/assets/flags/cc.png": "31a475216e12fef447382c97b42876ce",
"assets/packages/intl_phone_field/assets/flags/gb-wls.png": "d7d7c77c72cd425d993bdc50720f4d04",
"assets/packages/intl_phone_field/assets/flags/mh.png": "18dda388ef5c1cf37cae5e7d5fef39bc",
"assets/packages/intl_phone_field/assets/flags/za.png": "b28280c6c3eb4624c18b5455d4a1b1ff",
"assets/packages/intl_phone_field/assets/flags/uy.png": "da4247b21fcbd9e30dc2b3f7c5dccb64",
"assets/packages/intl_phone_field/assets/flags/wf.png": "6f1644b8f907d197c0ff7ed2f366ad64",
"assets/packages/intl_phone_field/assets/flags/vu.png": "3f201fdfb6d669a64c35c20a801016d1",
"assets/packages/intl_phone_field/assets/flags/tj.png": "c73b793f2acd262e71b9236e64c77636",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "b4f42b658e3919b76e8f5fb25514018f",
"assets/fonts/MaterialIcons-Regular.otf": "b73f210d398143121a0c81dd8e3920c3",
"assets/assets/logos/shape.svg": "cd2e089c3b068f11aeac81869d9a6564",
"assets/assets/logos/Contact.svg": "84be6f950ad076c97db2f60f1edb4077",
"assets/assets/logos/no_messages.png": "ffeeb6de368e1a1e7d44c65802a89e38",
"assets/assets/logos/contact_chat.svg": "b10b334db2f16deec6c8085d0314c3d0",
"assets/assets/logos/txt.svg": "109fd9d1054c6e9bba062605bf0305bc",
"assets/assets/logos/mic1.svg": "352aaf918683ba4ed8a98ec03c294fc0",
"assets/assets/logos/ic_bio_background.svg": "74bf75b0742e0fa381240f04df33a871",
"assets/assets/logos/ic_redirect_last_message.png": "596203639f8b435d339e23428b50754f",
"assets/assets/logos/reply.svg": "c0962a08c00108fedbe448014c199bdd",
"assets/assets/logos/rar.svg": "dc56f4ea52462454cd89c135e16fe33e",
"assets/assets/logos/ic_video.svg": "0fcc0cc369dc0f3a1613d45ae1428c10",
"assets/assets/logos/docx.svg": "55b88b6252255b0f60dba2d8c22f8a3d",
"assets/assets/logos/eye_on.png": "e76110e57873d4feb04ed18c98eb4a60",
"assets/assets/logos/tick_round.svg": "54f4f3acefc337b9d0422d170a5632a6",
"assets/assets/logos/ic_image_edit.svg": "723985cb150a6cfb8c6d0dcf9e1fda71",
"assets/assets/logos/acknowledged.png": "c3a436222d15250b55f4f7bff8645986",
"assets/assets/logos/ic_baloon.png": "b6ab594717dd32c7bcd723ffa4e5b42b",
"assets/assets/logos/document_chat.svg": "4d83081a7f73bd5a5e3483786af45d8a",
"assets/assets/logos/profile_img.png": "55ae8191966cfbdf38982cbcc82151d3",
"assets/assets/logos/location_chat.svg": "832c53e3e9a8f26bef3cef7bd985dd8e",
"assets/assets/logos/ic_delete_icon.svg": "4ada962dd0974ae644a4d0fcb7c7b242",
"assets/assets/logos/logout.svg": "89b387ce7f8f248c663bd69426709dc6",
"assets/assets/logos/audio_permission.svg": "8d1bd6ff055de68f9a26416b48c713c5",
"assets/assets/logos/video_play.svg": "7d0bfeaf2d6a9d9974e71a06c5c38ec3",
"assets/assets/logos/downloading.svg": "62a0cec19a5df0e65a48efcbe0af68c3",
"assets/assets/logos/no_contacts.png": "3ca645206b060627596d3da7d36de07c",
"assets/assets/logos/unsent.png": "697a28187f12a32fc8988b5e56fad5a0",
"assets/assets/logos/seen.svg": "173a1d3b8781051be12f7f9deca94124",
"assets/assets/logos/ic_qr_scanner_web_login.png": "a8e0210f6b3669e59b1c545f0faa7def",
"assets/assets/logos/quick_message.svg": "b37df0890f0785ea8feb351741a752bd",
"assets/assets/logos/right_arrow.svg": "b7ff237f53f284d1b3730bd5b1027e2a",
"assets/assets/logos/contact_select.svg": "ec9328873caff614ffc4bdfb20e8e069",
"assets/assets/logos/delete_black.svg": "c248e85d943d841729192ab1a4b4dbab",
"assets/assets/logos/report_group.svg": "de1764938314e9cc3d3c39cfa1cb85b6",
"assets/assets/logos/videocall.svg": "1bbcb0df01456ad6fbf3820066f635a9",
"assets/assets/logos/quick_video.svg": "14000a65f4c710149ad13faea77ec6ba",
"assets/assets/logos/leave_group.svg": "e1fb28075ec9b457b2d463af31134bf8",
"assets/assets/logos/doc.svg": "60858696dd4fffc416125666099e2309",
"assets/assets/logos/noun_Audio_3408360.svg": "0ee105db99e3ce4c90f7f6622df5a4ff",
"assets/assets/logos/zip.svg": "e78efdb935b19d772c465150a0894249",
"assets/assets/logos/lock.svg": "1c4c34acee094ff903e0fef3f54f230e",
"assets/assets/logos/forward_arrow.svg": "dbddd811134406da60e853a99268af86",
"assets/assets/logos/seen.png": "39691af235dccd5976e7d61a97a7a352",
"assets/assets/logos/link.svg": "f99a12ca759c2d3344cb9a70f3a1d03d",
"assets/assets/logos/antenna.svg": "70f4633948a4d186771e546437fdfae2",
"assets/assets/logos/unsent.svg": "fc18d07b424de33bcb6a84da59f49982",
"assets/assets/logos/ic_chrome.png": "6588305293f6e7367569d07f41e8365c",
"assets/assets/logos/delete_bin.svg": "4ec8c359a3b5e7a4fe4f151f177a3749",
"assets/assets/logos/archive.svg": "79a0544b028b473242e3d6cb5d0246e4",
"assets/assets/logos/unstar.svg": "a37f51745f2ee87b19bb6df5b5549f52",
"assets/assets/logos/add_user.svg": "412de79e8f0260b7bf7578c162c16b55",
"assets/assets/logos/download.svg": "6a5033d255efaa97d861c1d04b93f2da",
"assets/assets/logos/pin.svg": "0b5fd264a42306d6a39d1d97616588df",
"assets/assets/logos/unmute.svg": "e2f60cded5a9b166bf76d5c6e59b392f",
"assets/assets/logos/gallery.svg": "cb1c08035576af82f2f176b24c422c1a",
"assets/assets/logos/quick_info.svg": "d29384540984317a53dbaf43d9b8f057",
"assets/assets/logos/acknowledged.svg": "85d13e37bc49c9c972fc6084f0fb2046",
"assets/assets/logos/contact_sync_bg.png": "a9c10bd0ec72d977e076b0e5651194e3",
"assets/assets/logos/arrow_up.svg": "5dcd0d3af618d13a7f93016560406a8f",
"assets/assets/logos/img.png": "f1a6276790ea0898d7d9156f2864d3bd",
"assets/assets/logos/ic_ie.png": "3e12c6880d4be8fb680d3c50b3a2c5da",
"assets/assets/logos/tick.svg": "563005121e008125d195acdf197d4878",
"assets/assets/logos/chat_fab.svg": "e97487639ebab1f2b34bbda96734563e",
"assets/assets/logos/ic_bio_background.png": "0764f9c6daccf6afb2f1e49827eff70c",
"assets/assets/logos/location_pin_permission.svg": "636d7fb173289b0a1575b434f8b9d693",
"assets/assets/logos/ic_opera.png": "61c181af75447923166ee58867ecf5f1",
"assets/assets/logos/eye_off.png": "6dc9916d53b5e9dae238d885abc086de",
"assets/assets/logos/audio_mic.svg": "5f32d969e52de8bca80822a82e84bb58",
"assets/assets/logos/Document.svg": "1d32edc33e43a29ad1d0cfcb4c6ebf70",
"assets/assets/logos/warning.svg": "cff8ae76c821d952ccacfe7fd54ea1bf",
"assets/assets/logos/ic_no_call_history.webp": "dbb3032d41312fa5138ca0af3f161486",
"assets/assets/logos/email.svg": "a368d118d9bda312b67fa9e99dbf86e2",
"assets/assets/logos/right_arrow_proceed.svg": "24faf78ecc1500f3cbca1d3bbba0134b",
"assets/assets/logos/ic_grp_bg.png": "ce984e43d1b152341427c2d4b28590ac",
"assets/assets/logos/info.svg": "ed0968173735cb26e49e114009d14516",
"assets/assets/logos/close.svg": "5143b3ac7fa18e8973271399b979ac30",
"assets/assets/logos/About%2520and%2520Help.svg": "05529e2a89c2b4b09b0fb2c34f4b3089",
"assets/assets/logos/disabled.png": "a6dd18464357fead0b367f7760bd71cd",
"assets/assets/logos/mic.svg": "e236671349f437da31ce4d867e83ec9a",
"assets/assets/logos/copy.svg": "c9cddfa85e7b9f11342cdfbb24472399",
"assets/assets/logos/ic_expand.svg": "4266e02f38ddc791121961d66c672969",
"assets/assets/logos/audio_play.svg": "5f06f1febcf8868e719ff6f2631c6b95",
"assets/assets/logos/image.svg": "77d24ace26550784b1e7e9a7246100b4",
"assets/assets/logos/contacts_book_fill.svg": "4ec325f0328537f6f2840381efbaa794",
"assets/assets/logos/smile.svg": "b62d19426b63229b980ec46ed6d86bcb",
"assets/assets/logos/csv.svg": "41c75a332e893258bf877b8b982d283f",
"assets/assets/logos/xlsx.svg": "74d5650b27f277964a86cc76f38b8d7f",
"assets/assets/logos/delivered.png": "ae3199db513ac4c6e29fd61f1c7664ce",
"assets/assets/logos/image_outline.svg": "b123bd11043f5e2d3f6438ec513d067e",
"assets/assets/logos/arrow_down.svg": "1155b2fceeb15ec6cb0e3cb6897a3553",
"assets/assets/logos/play.svg": "c947f61da6e02fb4346415c738b8c5c6",
"assets/assets/logos/ic_edge_browser.png": "8a257d3669b4b14b9ccd45d3a98b01ae",
"assets/assets/logos/chat.svg": "d0a533994b181470cfe51663495866f5",
"assets/assets/logos/send.svg": "08c14d6684d455f64880ddee5db782e8",
"assets/assets/logos/tick_round_blue.svg": "58190aefe4c5d50216e20ceb3f08b528",
"assets/assets/logos/preview_add.svg": "970aba6a8469b8709fc0268cf7ea6e80",
"assets/assets/logos/lock_outline_black.svg": "98f43e06206cb92d4290d3d3d08a9df5",
"assets/assets/logos/camera.svg": "7bc18eef2d566832de2a838eec3ad1a7",
"assets/assets/logos/close_icon_contact.svg": "b7b22d9eb9973329023c85934766a2ed",
"assets/assets/logos/mute.svg": "bd4c52b356e73a84572d068897514827",
"assets/assets/logos/delete_bin_white.svg": "953117c155cd0a6179e152e774c147de",
"assets/assets/logos/contact_permission.svg": "ec6adbb17999cbd5799e0d9958e516dd",
"assets/assets/logos/camera_profile_change.png": "20570ee4993d596b3c4f08fce1616fc7",
"assets/assets/logos/record_reply_preview.svg": "05f4a28534b903039b95b153b3480252",
"assets/assets/logos/report_user.svg": "166d0199479008ca6f369becc75ab3ae",
"assets/assets/logos/audio_white.svg": "2e9b41ed8a10bf7a728f64f9331390ab",
"assets/assets/logos/settings_permission.svg": "e11547dd1b997f45252ce34557adc407",
"assets/assets/logos/camera_permission.svg": "6c38537c7b192bdc6a1c5db9a83127c1",
"assets/assets/logos/apk.svg": "a2823bd88a2557a6b2c87361c159a9d5",
"assets/assets/logos/star.svg": "ac39e0b7913ab1af59bec83169704e4b",
"assets/assets/logos/headset_white.svg": "2e9b41ed8a10bf7a728f64f9331390ab",
"assets/assets/logos/toggle%2520OFF.svg": "84dcbe2b1fc52902fea9aab3193e79cd",
"assets/assets/logos/file_permission.svg": "cde9b8ffe32993e06c6decf970d176f9",
"assets/assets/logos/pdf.svg": "f562bddae05daa879e18e37a1430ef89",
"assets/assets/logos/ppt.svg": "3702f8ae7d16ec7a3cca8b2e1351f9fe",
"assets/assets/logos/record_audio_video_permission.svg": "05f247dd8b5889a7840ac49540091b71",
"assets/assets/logos/pencil.svg": "4b40600da13ca6fcb641df22524b677f",
"assets/assets/logos/ic_logo.png": "3a46910903970cbd86c5f13991857c86",
"assets/assets/logos/phonecall.svg": "e24d700ca45a60c46b2780de64061845",
"assets/assets/logos/audio.svg": "46779228a10e63c6891cbcc931b9acf4",
"assets/assets/logos/delete.svg": "bf470406c0ff104b89aa623af92575a7",
"assets/assets/logos/phone.svg": "e0ecde952c55ae5a061814a368270a96",
"assets/assets/logos/sync.svg": "c65d82b7c7b0440fdcae8882e9f4e8c7",
"assets/assets/logos/call.svg": "e24d700ca45a60c46b2780de64061845",
"assets/assets/logos/stared%2520message.svg": "47afc7f7a1b6b196ea418ae74f93e7b1",
"assets/assets/logos/Location.svg": "06b3c146d7b2515935cf86d559c2d742",
"assets/assets/logos/share.svg": "9f42c5c642a877173b4c7f29ac57b44e",
"assets/assets/logos/location_icon.svg": "06b3c146d7b2515935cf86d559c2d742",
"assets/assets/logos/video_icon.svg": "f163aa54ede76f06057a5ed4a25cefee",
"assets/assets/logos/video_camera.svg": "ba30d51183a561840ffb972868e3983f",
"assets/assets/logos/chat_bg_blank.png": "a139d4856aa1ec8ed898e4450269a554",
"assets/assets/logos/video.svg": "1bbcb0df01456ad6fbf3820066f635a9",
"assets/assets/logos/attach.svg": "6f8c9fc6caf8e4e7acb7ea62c0305b83",
"assets/assets/logos/register_logo.svg": "a999550ef80bf66cdee5e7b914738984",
"assets/assets/logos/music_icon.svg": "3355b82f39e46576240b81e221a2942d",
"assets/assets/logos/chat_bg.png": "0633c86d4e24fabecff9fea625a874c8",
"assets/assets/logos/ic_default_browser.png": "40690b2dfdf0e31f9a270e906554afbc",
"assets/assets/logos/headset_img.svg": "a19400bed1b842a32ca5720ed39c7ef7",
"assets/assets/logos/Notifications.svg": "d866581bbe01e2a30e259f61a336d0d6",
"assets/assets/logos/ic_mozilla.png": "ad9999a4a54666b773b920643919c209",
"assets/assets/logos/upload.svg": "6a9066eedf8d8c72916c78ffa04cd336",
"assets/assets/logos/pause.svg": "248a3fd2ebdd861134a14114b28f8faf",
"assets/assets/logos/contact_media_permission.svg": "c350a86af769939f2e44566e1d60864b",
"assets/assets/logos/forward.svg": "e40fddc9e7a119431c41b7ddfca66985",
"assets/assets/logos/status.svg": "be30e2c48e36a0aece1c2b81b5e3d3ba",
"assets/assets/logos/blocked_contacts.svg": "47b384b50e4cb56df46cad5e7a0ce08a",
"assets/assets/logos/quick_call.svg": "fe6dc10a9ffa828fad63030a093577b8",
"assets/assets/logos/pptx.svg": "198e7857ea49759595f1959053af21a4",
"assets/assets/logos/ic_collapse.svg": "60226fd56b52cda9fa71058d40cc7b63",
"assets/assets/logos/Message.png": "76812fc994dc6db2fe050f7509e1d0fd",
"assets/assets/logos/stared%2520message-1.svg": "6598841c465b036dcdef8a37242c3b0a",
"assets/assets/logos/Archive_ic_settings.svg": "516fc4845ed365045bafbd2a3ef6b8fd",
"assets/assets/logos/pushpin.svg": "68cd17554a0b1514b54a075bb41be7cf",
"assets/assets/logos/document_icon.svg": "1d32edc33e43a29ad1d0cfcb4c6ebf70",
"assets/assets/logos/delivered.svg": "f6720fbff7b78676bd1ddb226baec114",
"assets/assets/logos/xls.svg": "d142550fe04929e2256af4f676a33855",
"assets/assets/logos/unpin.svg": "c96884dcc2e1ee6bc69527f771baaea2",
"assets/assets/logos/ic_edit.svg": "1791f4a01240e3215ccb4a28c58ded23",
"assets/assets/logos/star_small_icon.svg": "f5aded44c13da148b0c5bea55294d52f",
"assets/assets/logos/ic_safari.png": "340923fb1d3d16429c5d198f14ccbcac",
"assets/assets/logos/ic_admin_blocked.svg": "8747ff5dc2189375659eb553af36b4d7",
"assets/assets/logos/avatar.svg": "4e0da4921fd134f9236f25f6ea903698",
"assets/assets/logos/ic_uc.png": "03daaf7528a4027b43a26129613b0c15",
"assets/assets/logos/magnifying_glass.svg": "d47be860624e1a6c8e42376687af11f6",
"assets/assets/logos/unarchive.svg": "fa879ae6b308e0f512038f5df37a5e21",
"assets/assets/logos/forward_media.svg": "6de266c9cfe7b573d2ba2768ec00a585",
"assets/assets/logos/stared%2520message-2.svg": "ac4e614c39c86d1d6084e42e01617f23",
"assets/assets/logos/img_send.svg": "f6acf52c84c51cc827827f8e9ba0f967",
"assets/assets/logos/emailcontact_icon.svg": "8d414efc4f0fc11aa7f5d6398ffd23d6",
"assets/assets/logos/contact_icon.svg": "84be6f950ad076c97db2f60f1edb4077",
"assets/assets/animation/dustbin.json": "99759ba2b6fd0898d6372335b584b4fe",
"assets/assets/animation/enable_mic.json": "a981ba99a0d0b67cfb8201a4196f6af0",
"assets/assets/animation/enable_mic1.json": "273dc5a43ff358feb147f9b72136088d",
"assets/assets/animation/delete_dustbin.json": "3bb2a90e0f0873f7b4bd7be188ef6c49",
"assets/assets/languages.txt": "9b434d2c1269ff0e38227ef0348614fc",
"assets/assets/image/saved_search_black.png": "19920237fefcf22500c1750a9f7d22c1",
"assets/assets/image/pictureprivacy/premium_member.png": "cefd0e2ce66ef0391b434d8c5e3ecc89",
"assets/assets/image/pictureprivacy/all_member.png": "4d86d1a928f21a5bef33363dd02d82ae",
"assets/assets/image/pictureprivacy/only_me.png": "10f52f27c93ee277ef1f215747f1b3c4",
"assets/assets/image/pictureprivacy/ask_me_first.png": "8dd0bf0eef8989f3dc6602213eba039a",
"assets/assets/image/adsBanner/Coupon1.png": "a7921461b7f18d8a70ce51cfe6f56faf",
"assets/assets/image/adsBanner/Coupon.png": "30a61f486188d3888313b03910b5e67d",
"assets/assets/image/email.png": "2d343e9d3876c0bac3e7e056881f4722",
"assets/assets/image/internet.png": "c47635f71a3bcac2aa9e8728e7494ef4",
"assets/assets/image/Cars.png": "c1a63a0c0eece3fd5f98fbf67125c466",
"assets/assets/image/Jewelry.png": "257c185ed6c7422ef5565b87196dff10",
"assets/assets/image/Tent.png": "eb4d0e7b6c1d27c97439e4a0acae1008",
"assets/assets/image/filter1.png": "41ead264a05e98806099e2a1c9cdf5e7",
"assets/assets/image/credit_screen/Tick.png": "3eb89a65a4b8fcddaffe1eac4d8cebbb",
"assets/assets/image/credit_screen/ReferAFriend.png": "795d688fb8e7094b5b82b85576e0de65",
"assets/assets/image/credit_screen/dollar_circle.png": "d4c209b24a72b906490a77aedf96b36a",
"assets/assets/image/timer_circle.png": "4effe5cd1dff5ff42f0b70b4c3baeb85",
"assets/assets/image/group_fill.png": "00d46386b0bc022539014dcf49f205e6",
"assets/assets/image/editeProfile/userIcon_edit.png": "ab7a561f864513fd6c071c4ee5e7e935",
"assets/assets/image/editeProfile/userIcon_line.png": "30660a90c711c5df85a38166bd5c090f",
"assets/assets/image/editeProfile/cake.png": "68cb7080083fc84148e9ce1ef9826c4c",
"assets/assets/image/editeProfile/temple.png": "03b89660b1e1007b35cd2865fd890ad9",
"assets/assets/image/editeProfile/wallet.png": "4cee89798138ee47dbc7b676bb534ce3",
"assets/assets/image/editeProfile/no.png": "50062176544214b7fab5357b033baf53",
"assets/assets/image/editeProfile/menu_icon.png": "2bcaf3b20c6954cdd4e46e70415c7634",
"assets/assets/image/editeProfile/food_icon.png": "d2c89135e09df0610c311e934f665d7c",
"assets/assets/image/editeProfile/school.png": "d7fa8d4069d4b254a5230b379f89616a",
"assets/assets/image/editeProfile/star_icon.png": "71fb59c72d0c7bd17f796d1a65cb64c5",
"assets/assets/image/editeProfile/Lock.png": "bc0c0701b11f25d8c1e0c1a465ab2492",
"assets/assets/image/editeProfile/userIcon3.png": "e8e757c155d724cacea4f5f048990e0c",
"assets/assets/image/editeProfile/userIcon2.png": "252de50d7a8b7d753cc75e33ac8495dd",
"assets/assets/image/editeProfile/book2.png": "5a073914ac33f9bf3bf4b70078ead7ce",
"assets/assets/image/editeProfile/userIcon1.png": "89a5ac951a445654d371b1e0011642e0",
"assets/assets/image/editeProfile/book1.png": "8f2e3c7c449c184a518668455ac56948",
"assets/assets/image/editeProfile/userIconf2.png": "75c082aada8e4aa9e37f3a014007f6b5",
"assets/assets/image/editeProfile/basketball_dribble.png": "36b0a74df87fc1e1fea75c12a5bf8ab2",
"assets/assets/image/editeProfile/userIcon4.png": "eab0b31784d4c6d652ba8f7eb3188cf5",
"assets/assets/image/editeProfile/userIconf1.png": "daa5d55a6f380ee85d9a9e92179cc06d",
"assets/assets/image/editeProfile/music_note_icon.png": "fd73e60bb7f4044e7df603ad4ca81808",
"assets/assets/image/editeProfile/Ring.png": "d1651bd81195159b423a76e53b89c986",
"assets/assets/image/editeProfile/office.png": "f350537f8fe07d07363e2c331a206ec3",
"assets/assets/image/editeProfile/lifestyle.png": "fb3540c0e176bbf9f287b9313179e81a",
"assets/assets/image/editeProfile/location.png": "8852d18bac5817edfca1785300738045",
"assets/assets/image/editeProfile/call.png": "e918ef0e93666453f77dd0c3c63c07e1",
"assets/assets/image/editeProfile/height.png": "0781b06c6e5cade267c9d520a9b35201",
"assets/assets/image/editeProfile/language.png": "1f06ab015bb6309a6f1eab069c332490",
"assets/assets/image/editeProfile/smoke_icon.png": "f2b086dc8fed79ab62047f30d2cf83b7",
"assets/assets/image/editeProfile/edit_square.png": "a187cafcd71c3ca9338212d8cd60c2f6",
"assets/assets/image/editeProfile/education.png": "4716f4c97a6ca800424b4b733d38203e",
"assets/assets/image/editeProfile/edit.png": "73d5ee1d1226cf86a141851851ad5f88",
"assets/assets/image/editeProfile/exercise_icon.png": "0d047cc90f0b11b655e51f5935e39f7b",
"assets/assets/image/editeProfile/religious_maker_icon.png": "3eb68b8ea27532cf2f7329d2664aa47b",
"assets/assets/image/editeProfile/chat.png": "b266c4b406795a497ed33d63a70d20f5",
"assets/assets/image/editeProfile/message.png": "1a97a8345ba92ad3c11501f06ca4d9f4",
"assets/assets/image/editeProfile/wine_glass.png": "901a05dfce29302da7d260e58bf542d1",
"assets/assets/image/PartnerPreferenceDetail/arrow.png": "7f347444fadc24c88426c1789023e76a",
"assets/assets/image/ad.png": "858d5958b59248cd77f27063d0976675",
"assets/assets/image/Wedding%2520%2520Wear.png": "0e5ddefcf4bbcd7d05f2908c212124a0",
"assets/assets/image/book.png": "e8bfc1efc1f1d7146a05f800ef53ca6f",
"assets/assets/image/sms.png": "42b63ed75941f0492cd5cd1ae8be142b",
"assets/assets/image/lock_02.png": "2d97a5e8a6ddaa0e6b0fe587eb1f97f5",
"assets/assets/image/chatSendIcon.png": "86ba51c43ffe5e20780c9aaa3a1eab07",
"assets/assets/image/Gifts.png": "23e8e6891e35d4b499ee3904faccbee4",
"assets/assets/image/Choreographers.png": "2ebcacb2884d6954d16ad7d619e5545b",
"assets/assets/image/age_limit.png": "4246ac6aa006bf7724a672e97d95d72e",
"assets/assets/image/instagram.png": "8c1902f562e246f766e4a9026c2a97c4",
"assets/assets/image/picture_privacy.png": "c7ad9e15942e162ba580361cbac94f31",
"assets/assets/image/marital_status.png": "1701690589ff37a584d7f8ece407d67a",
"assets/assets/image/lock.png": "7097fdf231c01ec7d68aa83761fc7e8f",
"assets/assets/image/drawer.png": "1c1936a6859326eff6c017934d47e8b3",
"assets/assets/image/right_arrow.png": "223e5d7801d558c6d54722f5f9d10478",
"assets/assets/image/lock_fill.png": "92464f00fba4a5480bdeb3e8e84a9f67",
"assets/assets/image/Honeymoon.png": "66b113868a19ff3371b60208caab37cd",
"assets/assets/image/logo_big.png": "6222925753d9bd6b06b19c477bf824c3",
"assets/assets/image/partner.png": "9d68684053350909c12b00ba4c597b15",
"assets/assets/image/verified.png": "9fd76910d9b17b8a3d83b1e46032851d",
"assets/assets/image/arrow_back.png": "f7ae922c6225cfce98fdb3dc2cab8f48",
"assets/assets/image/saved_search.png": "541bb62c431e1f7aa29ed63ddf4e8cad",
"assets/assets/image/onBoardingScreen/2.png": "4c8d49aeabbd5fd2e83bdeed1801eed2",
"assets/assets/image/onBoardingScreen/3.png": "8ebfb3145cd1da1bd4a56ccdfea02af9",
"assets/assets/image/onBoardingScreen/back.png": "580cf182b7f05b845244081f8bb114b0",
"assets/assets/image/onBoardingScreen/1.png": "fc8236b454224f787d2725cfaad16589",
"assets/assets/image/blur.png": "6eff3517852d986c9be10c88f7b79583",
"assets/assets/image/dollar_circle.png": "6f9e1c9f1d5d0065522a886a565a70ff",
"assets/assets/image/logout.png": "fcadfe751c4d97ba9e16c3c65bb812f4",
"assets/assets/image/home.png": "5667e549467262550a29d7429fe94bb6",
"assets/assets/image/shop.png": "9c30b52e1e762c1a5b5c6cfd579b1fea",
"assets/assets/image/activity_fill.png": "da34845e667cd289189522532481da32",
"assets/assets/image/interest_received.png": "18b91a23b13ecbc5b9601e117024d085",
"assets/assets/image/HowAppWork/arrow.png": "59701a0d358f9037eda6c26984ee54c3",
"assets/assets/image/HowAppWork/polygon.png": "eaadc72db156e0a37a13828a20752ecb",
"assets/assets/image/HowAppWork/dotArrow.png": "b04482622633306308dec84ead315ed4",
"assets/assets/image/HowAppWork/star.png": "79c8e521ff48fa47a096636947e5af4f",
"assets/assets/image/Halwai.png": "69d3a99f55385d626198d2c1791f2313",
"assets/assets/image/Entertainment.png": "8a0789d4951e70c0540c0f7a679584f6",
"assets/assets/image/drawer_profile.png": "bc38e31166f77e99e186584f3b9f78db",
"assets/assets/image/payment.png": "e2d41555519591b597fef36fdaf9e62e",
"assets/assets/image/Call1.png": "41811aab7b5b79b7367ea3cee7b7d82b",
"assets/assets/image/search.png": "ae7ed4c41f32c3044c33b9f0d44e2b7b",
"assets/assets/image/Live%2520Streaming.png": "d5914ae0373021877cab2b7cfeeecb71",
"assets/assets/image/Mehndi%2520Artists.png": "0ff4261b72b2b864f1921d19b3b85df7",
"assets/assets/image/privacy.png": "80e2013deb3f0a24c2b1e27ed2a0a30d",
"assets/assets/image/noData.png": "2702b57cea87d8881f9ddbc98b9c181a",
"assets/assets/image/InformationCircle.png": "c55f2c8d9a28d01428e02f99ec7304c8",
"assets/assets/image/verify_icon.png": "c31f06160471907a75fb4d0957c39584",
"assets/assets/image/appWork_Banner.png": "ba39e5c900640563d0d06ce4c3053d1c",
"assets/assets/image/shop_fill.png": "f7fe1d51508fad871743d87f40a0ea39",
"assets/assets/image/shortlisted_profile.png": "7439641651c25de49cbd2fcdb6739912",
"assets/assets/image/menu.png": "11044a93154a60cc93519857cbdc25be",
"assets/assets/image/response_1682355774711.json": "ae4156ff9d3b1a4f669519aff5c8d874",
"assets/assets/image/Caterers.png": "8053a2282d6df8e67ed9677227f94394",
"assets/assets/image/notification_icon.png": "8660259491cf02708617b70a854e081f",
"assets/assets/image/help.png": "8ab2c756bf8ff71b2e57faf85826e5c5",
"assets/assets/image/visitedProfile.png": "3c71a5ddc7ef272e8324cf2982895db7",
"assets/assets/image/block_user.png": "5e22d0590820b7bada69e5b13604ca16",
"assets/assets/image/Planners.png": "8d269187be1ced70a3cfefa48f7b52eb",
"assets/assets/image/filter.png": "48c3f2c2e620c3d0a7b6fbdbbfdffd95",
"assets/assets/image/Twitter.png": "f2ada8b2ff1c077568a864e2ff7e4651",
"assets/assets/image/activity.png": "46047e8ce55e837dacff485f0a5ce652",
"assets/assets/image/primium_logo.png": "64a04f8786974d82cb5e72a8e4d897ca",
"assets/assets/image/splash_screen/splash.gif": "d8a9f57d949496d7dae1383d0b6f994d",
"assets/assets/image/profileImage.png": "87f74545476cb3d5d726cf8745dd51a4",
"assets/assets/image/DJs.png": "165d03b4af0f18b75a65918b6e1af01b",
"assets/assets/image/dropdown.png": "0b11e8e8253abfd9f9487ccf1ddf1288",
"assets/assets/image/share.png": "d6a6a23f40d096a249470edd8ce00146",
"assets/assets/image/profile.png": "4f57afca4cff409a245968160fbc6c28",
"assets/assets/image/Decorators.png": "2752e9d1ba103cd109b3e39e0fa9dbb9",
"assets/assets/image/male_user.png": "2a93abf358292617b5e3898f5f12d5f6",
"assets/assets/image/push.png": "d8f3dc7369b8a90fc371c086301187be",
"assets/assets/image/location.png": "50e7f7c17cd0478e41623678c6d292dc",
"assets/assets/image/call.png": "c88e1041859fa638455b2000fa6a7f85",
"assets/assets/image/profile_fill.png": "47eb91d5997c41ed48664cedaf6c94df",
"assets/assets/image/strict_filter.png": "a70ac42be4c4ec8009bf8f47eb5ca322",
"assets/assets/image/GroupIcon.png": "11085ed391739e70bc566d21a62ddf24",
"assets/assets/image/annual_income.png": "0d6481a378ffa6cf10718688b01307d0",
"assets/assets/image/userprofile/userProfile.png": "a59fea558e6bbebf388d66a85bfa1baa",
"assets/assets/image/userprofile/userEditSquare.png": "5c7c98e8a691e43e9b2e8d668f807c90",
"assets/assets/image/userprofile/userSetting.png": "2e3f0a3e348b29c3b5fe08198afd4943",
"assets/assets/image/userprofile/Coupon1.png": "2a1c6f1588312e36fb99877519861f9a",
"assets/assets/image/userprofile/Coupon3.png": "a5e4a9b0f88a9a124217954a42a8658f",
"assets/assets/image/userprofile/eye_blur.png": "89aa611f7a1deb0d356d67cd5d5b1924",
"assets/assets/image/userprofile/Coupon2.png": "61005bdf010a86625f2694841d74486a",
"assets/assets/image/userprofile/back_blur.png": "bfb5dd568efddf38ee738c5521ac2a34",
"assets/assets/image/userprofile/bg_01.png": "ebd6966c80f54cf9c6d40e1b672dbba0",
"assets/assets/image/up_arrow.png": "d2c7928097fa3851ccb4e9bbb268878c",
"assets/assets/image/Makeup%2520Artists.png": "8f61a86a251c17f88f1d197f7feb2d43",
"assets/assets/image/Profile-1.png": "47eb91d5997c41ed48664cedaf6c94df",
"assets/assets/image/Online.png": "b019654acf34127a0520de2aa9a0e8cf",
"assets/assets/image/Youtube.png": "88bbc8d7bd17ed243306816ca0989b0f",
"assets/assets/image/education.png": "38398bbdb4cf1737a16b1154a5b0e366",
"assets/assets/image/edit.png": "c58b4acb113338f8274aba6d699cd513",
"assets/assets/image/star.png": "281f96219f41ad14c9e982c3445441ea",
"assets/assets/image/home_fill.png": "1f9fd2bbd3c4f4c7d2ca032fdc9e1283",
"assets/assets/image/close_dialog.png": "ee073d32a7cfd8c2140ad2133a7b3397",
"assets/assets/image/home_banner.png": "59d8b0f017103776a495fbc454c97b92",
"assets/assets/image/Pandits.png": "fcd214f68c55bb95227b4d5728d91858",
"assets/assets/image/Venues.png": "b3a4a255015d656ae5925ac6770a73b1",
"assets/assets/image/female_user.png": "3e3d191f3306a4e880da8a0b9a6b2a22",
"assets/assets/image/Photographers.png": "fc08ea54c61b60d434161b1a6a36f445",
"assets/assets/image/whatsapp.png": "ee0b8a50b46454e5e13389285ef5c976",
"assets/assets/image/logout_dialog.png": "792dfa3db382c192387234ca58526c36",
"assets/assets/image/Facebook.png": "ff2c8f7635c78142578fd9d5f77b903f",
"assets/assets/image/camera.png": "ff6ff67c717311645a2395a96dcd3b36",
"assets/assets/image/PREMIUM.png": "196438f46bcbaa28341b6a27a8c675c4",
"assets/assets/image/notification.png": "33c91f12691081d8eb87358524e4fd5c",
"assets/assets/image/Chat.png": "f789efb5743feb500d4a5ea2f834e05d",
"assets/assets/image/categories/hosp.png": "8d01c5851f8b86e2dcda8b70e8e6ea95",
"assets/assets/image/categories/teacher.png": "8f64fbabf0bf3314781a62e6ec37ba39",
"assets/assets/image/categories/finan.png": "056f23184be3a4381e70f7ef65917111",
"assets/assets/image/categories/busin.png": "0b0eeaf58aa6faa1935fc98c3315666f",
"assets/assets/image/categories/fash.png": "c307ee88c7fd5af550d04b0b8a5b3557",
"assets/assets/image/categories/influencer.png": "1777594fa1cf9be71520388219ad8a91",
"assets/assets/image/categories/All.png": "d35108cf45ed27fab8f706e4adfd7f13",
"assets/assets/image/categories/cons.png": "3bb983a8477ed63fefc5ec83e1a28281",
"assets/assets/image/categories/doctor.png": "8e550a261e95121bad9f070bd1443bc3",
"assets/assets/image/categories/army.png": "f0c571bc8623de0c1b19955643f491e1",
"assets/assets/image/categories/influ.png": "6a171ea4834fb6896987568314b914f3",
"assets/assets/image/categories/artist.png": "15ab41fdcf18b1428ab02589d78c7d94",
"assets/assets/image/categories/legal.png": "862436356168c630aab9021fded0795c",
"assets/assets/image/categories/engineer.png": "a83d0ddf918a2a38615fa354f443e034",
"assets/assets/image/categories/media.png": "addc0564957f10253febb65fe28ac36d",
"assets/assets/image/categories/Police.png": "60e2dc1a63a53002a985f890b1e73004",
"assets/assets/image/categories/civil_s.png": "ead77e501dcd666a3ab40b6a11f6fe62",
"assets/assets/image/categories/soci.png": "055acf7733c17eb465d30770ab8a5ff3",
"assets/assets/image/Invitation.png": "1bd7f1d0ebdee726fd31f6edd26bc4cf",
"assets/assets/image/heart_icon.png": "9c599e0f50635714de811c76720a04b7",
"assets/assets/image/Upgrade_vector.png": "e9abd1be779549456965f27912ad5f68",
"assets/assets/image/plan.png": "a39a4b9316ae9aec476e3f24c31e53a0",
"assets/assets/image/UnVerified.png": "7394021a78b2a9c420ee4a02d1601dd4",
"assets/assets/image/setting.png": "4c2f14bf1f56fd7c1a3762342f3e322d",
"assets/assets/image/show_password.png": "6730d20f00f446a2afdce68f02846115",
"assets/assets/image/Back.png": "829734336fd756ab702a2f1dcc1e0c4e",
"assets/assets/image/w1.png": "65d9403d21757617837ef12d7ce0f733",
"assets/assets/image/right.png": "87d575b99fa5d36846a7d4d296dc4ae4",
"assets/assets/image/empty_star.png": "d3e25918c6db6a2b8cb560110a0701f6",
"assets/assets/image/hide.png": "c63bc6f7ca5a4e484548b535688cbc58",
"assets/assets/image/Online_rounded.png": "282053d1f71d09db87c81db0f9530934",
"assets/assets/image/Refresh.png": "35263969450c45d067a8aa02a742b5af",
"assets/assets/image/Image.png": "5757a6af4bc8b9b140b8089eeee104e5",
"assets/assets/image/Processing.png": "9088f6738a3aaa303f5133536820e24d",
"assets/assets/image/otherProfile/close_circle.png": "3a3f92f880616b1e7d2d06584c218958",
"assets/assets/image/otherProfile/lock.png": "e53c5a6c4ffe2bcca0823edf6a7ab14d",
"assets/assets/image/otherProfile/intro.png": "7d812b1e4dc070f22ece4c367b354ac2",
"assets/assets/image/otherProfile/next_btn.png": "70095fd4f6f51f17c1b66f2cf392fa31",
"assets/assets/image/otherProfile/call.png": "8785574294a90957a3714ccc2b1e5426",
"assets/assets/image/otherProfile/email2.png": "b73892b85d5f5d70b8f7ab8e1cb22817",
"assets/assets/image/otherProfile/whatsapp.png": "f10e4b4af6da07297566821e3c583960",
"assets/assets/image/otherProfile/message2.png": "e2792c632cfa60d7b3a8088dc5c3a0b2",
"assets/assets/image/otherProfile/Message.png": "b4c8dead92803414477b6d86b1d01cd0",
"assets/assets/image/otherProfile/previous_btn.png": "d1b201bf21576c1a1584f5a7ccbf834b",
"assets/assets/image/otherProfile/tick_circle.png": "0100987209278c2c675eeee5fc6fce03",
"assets/assets/image/search_fill.png": "25877c051e735db75f44275ff7130233",
"assets/assets/countries.txt": "2c8bcbeb60337ed787fa4bb874c7c033",
"assets/assets/fonts/Sora-Regular.ttf": "f91c4379d21d2b0df9f11b85338ddf99",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
