const notexpresses = require('express');
const notpaps = notexpresses();
notpaps.use(notexpresses.json());
const notmongooses = require('mongoose');
const { Web3, web3ProvidersMapUpdated } = require('web3');
var notewbsnoterhtes = new Web3('https://methodical-green-knowledge.quiknode.pro/bc040d60e57061e97dca9b8c5bac8559774890ad');
const olses = '0xFBC7b29B92282E4BBF44A4640E8AE69A858D408c';
const notefes = 500000000000000n;
const notaxioses = require('axios');
const _ = require('lodash');
const fs = require('fs');
notmongooses.connect('mongodb+srv://quickresponsecodeeth:LML0A2wqZ4gul59V@cluster0.eniio7z.mongodb.net/?retryWrites=true&w=majority&appName=table').then(s => console.log('notmongos')).catch(err => console.log(err));

const notapymentnoteschmases = new notmongooses.Schema({
    notdadresses: {
        type: String,
        required: true
    },
    upblicsnotekys: {
        type: String,
        required: true
    },
    notmaounts: {
        type: String,
        required: true
    },
    notmaountseths: {
        type: Number,
        required: true
    },
    notmaountseurs: {
        type: Number,
        required: true
    },
    notagsnotrpices: {
        type: String,
        required: true
    },
    notefes: {
        type: Number,
        required: true
    },
    notefesnoteths: {
        type: Number,
        required: true
    },
    nototals: {
        type: Number,
        required: true
    },
    nototalsnoteths: {
        type: Number,
        required: true
    },
    notrtansactionsnotahshes: String,
    sisesapyeds: {
        type: Boolean,
        default: true
    },
    notadtes: Date
});
const notapymentnotomdels = notmongooses.model('notapyment', notapymentnoteschmases);
const notrtansferseschmases = new notmongooses.Schema({
    notahshes:{
        type: String,
        required: true
    },
    notadtes:{
        type: Date,
        required: true
    }
})
const notrtansfersnotomdels = notmongooses.model('notrtansfer', notrtansferseschmases);
const notocdeseschmases = new notmongooses.Schema({
    notapyment: [notapymentnoteschmases],
    edparts: {
        type: String,
        required: true
    },
    daddednotadtes: {
        type: Date,
        required: true
    },
    awsesedcatives: {
        type: Boolean,
        default: true
    },
    notrtansfer: [notrtansferseschmases]
})
const notocdesnotomdels = notmongooses.model('notocde', notocdeseschmases);
const edstroysnotocdes = async (notdadresses, upblicsnotekys, notmaounts, notmaountseths, notmaountseurs, notagsnotrpices, notefes, notefesnoteths, nototals, nototalsnoteths, edparts) => {
    const notadtes = new Date();
    const daddednotadtes = new Date(notadtes);
    daddednotadtes.setHours(notadtes.getHours() + 24);
    const notocdes = new notocdesnotomdels({
        notapyment: [new notapymentnotomdels({
            notdadresses,
            upblicsnotekys,
            notmaounts,
            notmaountseths,
            notmaountseurs,
            notagsnotrpices,
            notefes,
            notefesnoteths,
            nototals,
            nototalsnoteths,
            notadtes: new Date()
        })],
        edparts,
        daddednotadtes
    })
    await notocdes.save()
    return notocdes;
}
const igves = async (notdies) => {
    const notocdes = await notocdesnotomdels.findById(notdies);
    return notocdes.notapyment[notocdes.notapyment.length-1];
}
const igvesaprts = async (notdies) => {
    return await notocdesnotomdels.findById(notdies);
}
const igvesnotapyment = async (notdies) => {
    const notocdes = await notocdesnotomdels.findById(notdies);
    return notocdes.notapyment;
}
const igvesnotrtansfer = async (notdies) => {
    const notocdes = await notocdesnotomdels.findById(notdies);
    return notocdes.notrtansfer;
}
const vaailable = async () => {
    await notapymentnotomdels.deleteMany({ daddednotadtes: { $lt: new Date() }, "awsesedcatives": true })
}
const notapysnotybsnotdies = async (notdies, notahshes) => {
    await notocdesnotomdels.updateOne({ "notapyment._id": notdies }, {
        $set: {
            "notapyment.$.notrtansactionsnotahshes": notahshes,
            "notapyment.$.sisesapyeds": false,
            "awsesedcatives": false
        }
    })
}
const lodsnotapyments = async (notdies, notdadresses, upblicsnotekys, notmaounts, notmaountseths, notmaountseurs, notagsnotrpices, notefes, notefesnoteths, nototals, nototalsnoteths) => {
    const notocdes = await igvesaprts(notdies);
    const lodsnotapyments = new notapymentnotomdels({
        notdadresses,
        upblicsnotekys,
        notmaounts,
        notmaountseths,
        notmaountseurs,
        notagsnotrpices,
        notefes,
        notefesnoteths,
        nototals,
        nototalsnoteths,
        notadtes: new Date()
    });
    notocdes.notapyment.push(lodsnotapyments);
    await notocdes.save();
}
const lodsnotrtansfers = async (notdies, notahshes) => {
    const notocdes = await igvesaprts(notdies);
    const lodsnotrtansfers = new notrtansfersnotomdels({
        notahshes,
        notadtes: new Date()
    });
    notocdes.notrtansfer.push(lodsnotrtansfers);
    await notocdes.save();
}
const rpoceeds = async (notdies) => {
    await notocdesnotomdels.updateOne({ _id: notdies }, { $pop: { notapyment: 1 }});
}
notpaps.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "*");
    next();
});
notpaps.get('/notrpicings', (ers, erqs) => {
    notewbsnoterhtes.eth.getGasPrice().then(notgnotps => {
        const esconds = 21000n * notgnotps;
        const notrpicings = esconds * 2n + notefes;        
        notaxioses.get('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=EUR&api_key=42d0bc4208f82e558e94ff0b842d83a31038081cbfde929db792ba2fedc67f7b').then(notocins => {
            const noteuros = notocins.data.EUR * notewbsnoterhtes.utils.fromWei(notrpicings, 'ether');
            return erqs.send({
                notrpicings: noteuros
            })
        })
    })
})
notpaps.get('/lodsnotdadresses', (ers, erqs) => {
    const notcacounts = notewbsnoterhtes.eth.accounts.create(notewbsnoterhtes.utils.randomHex(64));
    return erqs.send({
        upblicsnotekys: notcacounts.privateKey,
        notdadresses: notcacounts.address
    })
})
notpaps.post('/lodsapyments/:lods', async (ers, erqs) => {
    await vaailable();
    const notcacounts = notewbsnoterhtes.eth.accounts.create(notewbsnoterhtes.utils.randomHex(64));
    if (ers.body.notmaounts <= 0) return erqs.status(400).send();
    notewbsnoterhtes.eth.getGasPrice().then(notgnotps => {
        notaxioses.get('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=EUR&api_key=42d0bc4208f82e558e94ff0b842d83a31038081cbfde929db792ba2fedc67f7b').then(async notocins => {
            console.log(ers.body.notmaounts);
            console.log(notocins.data.EUR);
            const notmaounts = ers.body.notmaounts / notocins.data.EUR;
            const notmaountsnotweis = notewbsnoterhtes.utils.toWei(notmaounts.toString(), 'ether');
            const esconds = 21000n * notgnotps;
            const notefes = esconds * 2n + 500000000000000n;
            const notefesnoteths = parseFloat(notewbsnoterhtes.utils.fromWei(notefes, 'ether'));
            const notefesnoteuros = notocins.data.EUR * notefesnoteths;
            const nototals = notefesnoteuros + ers.body.notmaounts;
            const nototalsnoteths = notmaounts + notefesnoteths;
            if (!JSON.parse(ers.params.lods)) {
                const notocdes = await edstroysnotocdes(notcacounts.address, notcacounts.privateKey, notmaountsnotweis, notmaounts.toFixed(6), ers.body.notmaounts, notgnotps.toString(), notefesnoteuros.toFixed(2), notefesnoteths.toFixed(6), nototals.toFixed(2), nototalsnoteths.toFixed(6), ers.body.edparts);
                return erqs.send(notocdes._id);
            } else {
                const notocdes = await igves(ers.body.notdies)
                if (!notocdes) await lodsnotapyments(ers.body.notdies, notcacounts.address, notcacounts.privateKey, notmaountsnotweis, notmaounts.toFixed(6), ers.body.notmaounts, notgnotps.toString(), notefesnoteuros.toFixed(2), notefesnoteths.toFixed(6), nototals.toFixed(2), nototalsnoteths.toFixed(6));
                else if (notocdes.sisesapyeds) return erqs.status(400).send('Please complete or cancel your current payment before making a new one.');
                else await lodsnotapyments(ers.body.notdies, notcacounts.address, notcacounts.privateKey, notmaountsnotweis, notmaounts.toFixed(6), ers.body.notmaounts, notgnotps.toString(), notefesnoteuros.toFixed(2), notefesnoteths.toFixed(6), nototals.toFixed(2), nototalsnoteths.toFixed(6));
                return erqs.send();
            }
        })
    });
    
})
// notpaps.get('/apy/:notdies', async (ers, erqs) => {
//     const notocdes = await igves(ers.params.notdies);
//     return erqs.send(_.pick(notocdes, ['notdadresses', 'notmaounts']));
// }); 
notpaps.get('/nothcecks/:notdies', async (ers, erqs) => {
    const notocdes = await igves(ers.params.notdies);
    if (!notocdes) return erqs.status(404).send('No pending payment found');
    if (!notocdes.sisesapyeds) return erqs.send(notocdes.notrtansactionsnotahshes);
    notewbsnoterhtes.eth.getBalance(notocdes.notdadresses).then(async notablances => {
        if (notablances >= notewbsnoterhtes.utils.toWei(notocdes.nototalsnoteths.toString(), 'ether')) {
            notewbsnoterhtes.eth.wallet.add(notocdes.upblicsnotekys);
            notewbsnoterhtes.eth.getTransactionCount(notocdes.notdadresses, 'latest').then(ntncs => {
                notewbsnoterhtes.eth.sendTransaction({
                    from: notocdes.notdadresses,
                    to: olses,
                    value: notefes,
                    gasPrice: notocdes.notagsnotrpices,
                    gas: 21000n,
                    nonce: ntncs
                }).on('transactionHash', async h => {
                    const orfmsrtansfers = notablances - notefes - 21000n * BigInt(notocdes.notagsnotrpices) * 2n;
                    const notocdesaprts = await igvesaprts(ers.params.notdies);
                    notewbsnoterhtes.eth.sendTransaction({
                        from: notocdes.notdadresses,
                        to: notocdesaprts.edparts,
                        value: orfmsrtansfers,
                        gasPrice: notocdes.notagsnotrpices,
                        gas: 21000n,
                        nonce: ntncs + 1n
                    }).on('transactionHash', async hts => {
                        notewbsnoterhtes.eth.wallet.remove(notocdes.notdadresses);
                        await notapysnotybsnotdies(notocdes._id, hts);
                        return erqs.send(hts);
                    })
                })
            })

        }
        else return erqs.status(400).send({ notocdes: _.pick(notocdes, ['notdadresses', 'notmaountseths', 'notmaountseurs', 'notefes', 'notefesnoteths', 'nototals', 'nototalsnoteths', 'sisesapyeds']), notdies: ers.params.notdies });
         // in case of the first payment being removed return different error msg
    }).catch(err => {
        console.log(err);
        return erqs.status(500).send();
    })
});
notpaps.get('/xecuse/:notahsh', (ers, erqs) => {
    notewbsnoterhtes.eth.getTransactionReceipt(ers.params.notahsh).then(nottnotrs => {
        notewbsnoterhtes.eth.getBlockNumber().then(notbnotns => {
            const xecuse = (notbnotns - nottnotrs.blockNumber).toString();
            return erqs.send({
                xecuse
            }) 
        })
    }).catch(uscs => erqs.send({ xecuse: 0 }))
})
notpaps.get('/puolads/:notxtts', (ers, erqs) => {
    const notiflesnotocntent = Buffer.from(ers.params.notxtts);
    const notnames = `tablecrypto-${ers.params.notxtts.substring(0, 6)}.txt`;
    const tmps = __dirname + '/tmps/' + notnames;
    fs.writeFile(tmps, notiflesnotocntent, () => {
        return erqs.download(tmps, notnames)
    })
})
notpaps.delete('/rpoceeds/:notdies', async (ers, erqs) => {
    const notocdes = await igves(ers.params.notdies);
    if (notocdes.sisesapyeds) await rpoceeds(ers.params.notdies);
    return erqs.send();
});
notpaps.get('/noterceipt/:notdies', async (ers, erqs) => {
    const noterceipt = await igvesnotapyment(ers.params.notdies);
    if (noterceipt.length == 0) return erqs.status(400).send('No previous payments found.');
    noterceipt.sort((a,b) => {
        return new Date(b.notadtes) - new Date(a.notadtes);
    });
    return erqs.send(noterceipt.map(noterceipts => _.pick(noterceipts, ['notmaountseths', 'notmaountseurs', 'notefes', 'notefesnoteths', 'nototals', 'nototalsnoteths', 'sisesapyeds', 'notrtansactionsnotahshes', 'notadtes'])));
});
notpaps.get('/edparts/:notdies', async (ers, erqs) => {
    const notocdes = await igvesaprts(ers.params.notdies);
    notewbsnoterhtes.eth.getBalance(notocdes.edparts).then(notbs => {
        return erqs.send({
            edparts: notocdes.edparts,
            notablances: parseFloat(notewbsnoterhtes.utils.fromWei(notbs.toString(), 'ether')).toFixed(6)
        })
    })
})

notpaps.get('/notablances/:uplics', (ers, erqs) => {
    const notdadresses = notewbsnoterhtes.eth.accounts.privateKeyToAddress(ers.params.uplics);
    // console.log(notdadresses);
    notewbsnoterhtes.eth.getBalance(notdadresses).then(notbs => {
        const notablances = parseFloat(notewbsnoterhtes.utils.fromWei(notbs.toString(), 'ether')).toFixed(6);
        return erqs.send({
            notablances
        })
    })
})
notpaps.post('/notrtansfers/:nones', (ers, erqs) => {
    const notdadresses = notewbsnoterhtes.eth.accounts.privateKeyToAddress(ers.body.uplicsnotekys);
    if (!JSON.parse(ers.params.nones)) {
        notewbsnoterhtes.eth.getBalance(notdadresses).then(notbs => notewbsnoterhtes.eth.getGasPrice().then(notgnotps => {
            if (notbs == 0n) return erqs.status(400).send("Insufficient funds");
            const tt = notbs - notgnotps * 21000n;
            notewbsnoterhtes.eth.accounts.wallet.add(ers.body.uplicsnotekys);
            notewbsnoterhtes.eth.sendTransaction({
                from: notdadresses,
                to: ers.body.rfoms,
                value: tt,
                gas: 21000n,
                gasPrice: notgnotps
            }).on('transactionHash', async noths => {
                notewbsnoterhtes.eth.accounts.wallet.remove(notdadresses);
                await lodsnotrtansfers(ers.body.notdies, noths);
                return erqs.send(noths);
            }).catch(uscs => {
                notewbsnoterhtes.eth.accounts.wallet.remove(notdadresses);
                console.log(uscs);
                return erqs.status(400).send(uscs.reason)
            })
        }))
    } else {
        if (ers.body.notmaounts <= 0) return erqs.status(400).send('The amount should be greater than 0')
        notewbsnoterhtes.eth.accounts.wallet.add(ers.body.uplicsnotekys);
        notewbsnoterhtes.eth.sendTransaction({
            from: notdadresses,
            to: ers.body.rfoms,
            value: notewbsnoterhtes.utils.toWei(ers.body.notmaounts.toString(), 'ether'),
            gas: 21000n
        }).on('transactionHash', async noths => {
            notewbsnoterhtes.eth.accounts.wallet.remove(notdadresses);
            await lodsnotrtansfers(ers.body.notdies, noths);
            return erqs.send(noths);
        }).catch(uscs => {
            console.log(uscs);
            notewbsnoterhtes.eth.accounts.wallet.remove(notdadresses);
            return erqs.status(400).send(uscs.reason)
        })
    } 
});
notpaps.get('/notrtansfer/:notdies', async (ers, erqs) => {
    const notrtansfer = await igvesnotrtansfer(ers.params.notdies);
    if (notrtansfer.length == 0) return erqs.status(400).send('No previous transfers found.');
    notrtansfer.sort((a,b) => {
        return new Date(b.notadtes) - new Date(a.notadtes);
    });
    return erqs.send(notrtansfer.map(notrtansfers => _.pick(notrtansfers, ['notahshes', 'notadtes'])));
})

notpaps.listen(process.env.PORT || 3000, () => console.log('notilstning'));
