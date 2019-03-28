const menu = [
    // Кофе-брейк
    {
        menuList: 'Кофе-брейк',
        menuGroups: [
            // Мини-сэндвичи
            {
                groupTitle: 'Мини-сэндвичи',
                groupItems: [
                    {
                        productName: 'Мини-сэндвич с семгой',
                        productDesc: '',
                        productWeight: '45 г.',
                        productPrice: '110 руб.'
                    },
                    {
                        productName: 'Мини-сэндвич с куриной грудкой и беконом',
                        productDesc: '',
                        productWeight: '45 г.',
                        productPrice: '80 руб.'
                    },
                    {
                        productName: 'Мини-сэндвич с ветчиной и сыром',
                        productDesc: '',
                        productWeight: '45 г.',
                        productPrice: '80 руб.'
                    },
                    {
                        productName: 'Мини-сэндвич с печеными овощами и алдыгейским сыром',
                        productDesc: '',
                        productWeight: '45 г.',
                        productPrice: '80 руб.'
                    }
                ]
            },
            // Мини-бейглы
            {
                groupTitle: 'Мини-бейглы',
                groupItems: [
                    {
                        productName: 'Мини-бейгл с семгой и сливочным сыром',
                        productDesc: 'Слабосоленая семга, свежий огурец, салат айсберг',
                        productWeight: '40 г.',
                        productPrice: '110 руб.'
                    },
                    {
                        productName: 'Мини-бейгл с с куриной грудкой',
                        productDesc: '',
                        productWeight: '40 г.',
                        productPrice: '75 руб.'
                    },
                    {
                        productName: 'Мини-бейгл с сыром моцарелла и свежими томатами',
                        productDesc: '',
                        productWeight: '40 г.',
                        productPrice: '75 руб.'
                    },
                    {
                        productName: 'Мини-бейгл с домашней бужениной и сливочным маслом',
                        productDesc: '',
                        productWeight: '40 г.',
                        productPrice: '75 руб.'
                    }
                ]
            },
            // Роллы, кесадии
            {
                groupTitle: 'Роллы, кесадии',
                groupItems: [
                    {
                        productName: 'Мини-ролл с ветчиной',
                        productDesc: '',
                        productWeight: '50 г.',
                        productPrice: '60 руб.'
                    },
                    {
                        productName: 'Мини-ролл с свежими овощами и куриной грудкой',
                        productDesc: '',
                        productWeight: '50 г.',
                        productPrice: '75 руб.'
                    },
                    {
                        productName: 'Кесадия с курицей и сыром',
                        productDesc: '',
                        productWeight: '50 г.',
                        productPrice: '75 руб.'
                    }
                ]
            },
            // Мини-пирожки, слойки
            {
                groupTitle: 'Мини-пирожки, слойки',
                groupItems: [
                    {
                        productName: 'Слойка с ветчиной и сыром',
                        productDesc: '',
                        productWeight: '40 г.',
                        productPrice: '50 руб.'
                    },
                    {
                        productName: 'Слойка с курицей и грибами',
                        productDesc: '',
                        productWeight: '40 г.',
                        productPrice: '50 руб.'
                    },
                    {
                        productName: 'Слойка с капустой и яйцом',
                        productDesc: '',
                        productWeight: '40 г.',
                        productPrice: '50 руб.'
                    },
                    {
                        productName: 'Слойка с рыбой',
                        productDesc: '',
                        productWeight: '40 г.',
                        productPrice: '50 руб.'
                    },
                    {
                        productName: 'Слойка с сайрой и зеленым луком',
                        productDesc: '',
                        productWeight: '40 г.',
                        productPrice: '50 руб.'
                    }
                ]
            },
            // Десерты
            {
                groupTitle: 'Десерты',
                groupItems: [
                    {
                        productName: 'Печенье в ассортименте',
                        productDesc: '',
                        productWeight: '100 г.',
                        productPrice: '115 руб.'
                    },
                    {
                        productName: 'Панкота с манговым пюре',
                        productDesc: '',
                        productWeight: '50 г.',
                        productPrice: '110 руб.'
                    },
                    {
                        productName: 'Шоколадный мусс',
                        productDesc: '',
                        productWeight: '50 г.',
                        productPrice: '110 руб.'
                    },
                    {
                        productName: 'Конфеты, трюфели в ассортименте',
                        productDesc: '',
                        productWeight: '10-15 г.',
                        productPrice: '70 руб.'
                    },
                    {
                        productName: 'Датская выпечка',
                        productDesc: '',
                        productWeight: '45 г.',
                        productPrice: '100 руб.'
                    },
                    {
                        productName: 'Фруктовое ассорти',
                        productDesc: 'Ананас, груша, яблоко, физалис, виноград, апельсин, клубника',
                        productWeight: '1000 г.',
                        productPrice: '1800 руб.'
                    },
                    {
                        productName: 'Ягодно-фруктовое плато',
                        productDesc: 'Клубника, голубика, красная смородина, ежевика, виноград, ананас, груша, физалис',
                        productWeight: '1000 г.',
                        productPrice: '3500 руб.'
                    }
                ]
            },
            // Напитки
            {
                groupTitle: 'Напитки',
                groupItems: [
                    {
                        productName: 'Чай черный / зеленый',
                        productDesc: '',
                        productWeight: '200 мл.',
                        productPrice: '50 руб.'
                    },
                    {
                        productName: 'Кофе черный / с молоком',
                        productDesc: '',
                        productWeight: '200 мл.',
                        productPrice: '50 руб.'
                    },
                    {
                        productName: 'Морс клюквенный',
                        productDesc: '',
                        productWeight: '1000 мл.',
                        productPrice: '350 руб.'
                    },
                    {
                        productName: 'Морс облепиховый',
                        productDesc: '',
                        productWeight: '1000 мл.',
                        productPrice: '350 руб.'
                    },
                    {
                        productName: 'Морс из черной смородины',
                        productDesc: '',
                        productWeight: '1000 мл.',
                        productPrice: '350 руб.'
                    },
                    {
                        productName: 'Морс из лесной ягоды',
                        productDesc: '',
                        productWeight: '1000 мл.',
                        productPrice: '350 руб.'
                    },
                    {
                        productName: 'Вода газированная / негазированная',
                        productDesc: '',
                        productWeight: '500 мл.',
                        productPrice: '100 руб.'
                    },
                ]
            }
        ]
    },
    // Фуршет
    {
        menuList: 'Фуршет',
        menuGroups: [
            // Канапе с рыбой
            {
                groupTitle: 'Канапе с рыбой',
                groupItems: [
                    {
                        productName: 'Сельдь с картофелем нуазетт',
                        productDesc: '',
                        productWeight: '20 г.',
                        productPrice: '80 руб.'
                    },
                    {
                        productName: 'Тигровая креветка-гриль',
                        productDesc: '',
                        productWeight: '15 г.',
                        productPrice: '120 руб.'
                    },
                    {
                        productName: 'Канапе из копченого угря со свежим огурцом и кунжутом',
                        productDesc: '',
                        productWeight: '20 г.',
                        productPrice: '120 руб.'
                    },
                    {
                        productName: 'Пшеничные блинчики со сливочным сыром и красной икрой',
                        productDesc: '',
                        productWeight: '25 г.',
                        productPrice: '120 руб.'
                    },
                    {
                        productName: 'Лосось слабосоленый на хрустящей брускетте',
                        productDesc: '',
                        productWeight: '20 г.',
                        productPrice: '120 руб.'
                    },
                    {
                        productName: 'Филе тунца печенное в перце с тайским соусом, свежим огурцом и картофелем пай',
                        productDesc: '',
                        productWeight: '20 г.',
                        productPrice: '140 руб.'
                    }
                ]
            },
            // Канапе с мясными деликатесами
            {
                groupTitle: 'Канапе с мясными деликатесами',
                groupItems: [
                    {
                        productName: 'Сыровяленая Пармская ветчина с карамелизированной грушей',
                        productDesc: '',
                        productWeight: '15 г.',
                        productPrice: '140 руб.'
                    },
                    {
                        productName: 'Ростбиф с овощным Рататуем',
                        productDesc: '',
                        productWeight: '20 г.',
                        productPrice: '130 руб.'
                    },
                    {
                        productName: 'Утиная грудка с грушей томленной в вине',
                        productDesc: '',
                        productWeight: '20 г.',
                        productPrice: '120 руб.'
                    },
                    {
                        productName: 'Куринный паштет с луковым конфитюром',
                        productDesc: '',
                        productWeight: '25 г.',
                        productPrice: '90 руб.'
                    },
                    {
                        productName: 'Сочная говядина с перепелиным яйцом',
                        productDesc: '',
                        productWeight: '20 г.',
                        productPrice: '120 руб.'
                    },
                    {
                        productName: 'Домашняя буженина со сливовым соусом',
                        productDesc: '',
                        productWeight: '15 г.',
                        productPrice: '110 руб.'
                    },
                    {
                        productName: 'Яйца Бенедикт с ветчиной',
                        productDesc: '',
                        productWeight: '20 г.',
                        productPrice: '110 руб.'
                    }
                ]
            },
            // Канапе с овощами
            {
                groupTitle: 'Канапе с овощами',
                groupItems: [
                    {
                        productName: 'Сыр Бри с фруктовой горчицей',
                        productDesc: '',
                        productWeight: '15 г.',
                        productPrice: '110 руб.'
                    },
                    {
                        productName: 'Томаты Черри с мини-моцареллой, свежим базиликом и соусом "Песто"',
                        productDesc: '',
                        productWeight: '20 г.',
                        productPrice: '110 руб.'
                    },
                    {
                        productName: 'Рулетики из баклажан с кремом из сметаны кинзы',
                        productDesc: '',
                        productWeight: '20 г.',
                        productPrice: '85 руб.'
                    },
                    {
                        productName: 'Хумус с питой и овощным крудите',
                        productDesc: '',
                        productWeight: '20 г.',
                        productPrice: '80 руб.'
                    }
                ]
            },
            // Мини-сэндвичи и бейглы
            {
                groupTitle: 'Мини-сэндвичи и бейглы',
                groupItems: [
                    {
                        productName: 'Мини-сэндвич с семгой',
                        productDesc: '',
                        productWeight: '45 г.',
                        productPrice: '120 руб.'
                    },
                    {
                        productName: 'Мини-сэндвич с куриной грудкой и беконом',
                        productDesc: '',
                        productWeight: '45 г.',
                        productPrice: '90 руб.'
                    },
                    {
                        productName: 'Мини-сэндвич с ветчиной и сыром',
                        productDesc: '',
                        productWeight: '45 г.',
                        productPrice: '90 руб.'
                    },
                    {
                        productName: 'Мини-сэндвич с печеными овощами и алдыгейским сыром',
                        productDesc: '',
                        productWeight: '45 г.',
                        productPrice: '90 руб.'
                    },
                    {
                        productName: 'Бейгл с семгой и сливочным сыром',
                        productDesc: 'Слабосоленая семга, свежий огурец, салат айсберг',
                        productWeight: '40 г.',
                        productPrice: '120 руб.'
                    },
                    {
                        productName: 'Бейгл с с куриной грудкой',
                        productDesc: '',
                        productWeight: '40 г.',
                        productPrice: '85 руб.'
                    },
                    {
                        productName: 'Бейгл с сыром моцарелла и свежими томатами',
                        productDesc: '',
                        productWeight: '40 г.',
                        productPrice: '85 руб.'
                    },
                    {
                        productName: 'Бейгл с домашней бужениной и сливочным маслом',
                        productDesc: '',
                        productWeight: '40 г.',
                        productPrice: '85 руб.'
                    }
                ]
            },
            // Салаты
            {
                groupTitle: 'Салаты',
                groupItems: [
                    {
                        productName: 'Салат Цезарь с куриной грудкой',
                        productDesc: '',
                        productWeight: '125 г.',
                        productPrice: '190 руб.'
                    },
                    {
                        productName: 'Салат Цезарь с тигровыми креветками',
                        productDesc: '',
                        productWeight: '90 г.',
                        productPrice: '320 руб.'
                    },
                    {
                        productName: 'Салат с ростбифом',
                        productDesc: '',
                        productWeight: '80 г.',
                        productPrice: '230 руб.'
                    },
                    {
                        productName: 'Салат Греческий',
                        productDesc: '',
                        productWeight: '90 г.',
                        productPrice: '160 руб.'
                    },
                    {
                        productName: 'Салат с семгой слабой соли c картофелем красным луком и каперсами с медово-горчичным соусом',
                        productDesc: '',
                        productWeight: '90 г.',
                        productPrice: '250 руб.'
                    }
                ]
            },
            // Ассорти
            {
                groupTitle: 'Ассорти',
                groupItems: [
                    {
                        productName: 'Мясная гастрономия',
                        productDesc: 'Сыровяленный свиной окорок, ростбиф из говяжей вырезки, утиная грудка, домашняя буженина, телячий язык подается с маринованным луком, гресини и грушей, томленной в красном вине',
                        productWeight: '1000 г.',
                        productPrice: '3200 руб.'
                    },
                    {
                        productName: 'Мясное ассорти',
                        productDesc: 'Домашняя буженина в чесночном маринаде, ростбиф из говядины, телячий язык, сервелат, подается со свежими листьями салата, помидорами черри и пикантным сливочным соусом хрен',
                        productWeight: '1000 г.',
                        productPrice: '2800 руб.'
                    },
                    {
                        productName: 'Рыбная гастрономия',
                        productDesc: 'Тигровые креветки, семга слабосоленая, семга холодного копчения, масляная рыба холодного копчения, угорь копченный подается с лимоном и горчично-медовым соусом',
                        productWeight: '1000 г.',
                        productPrice: '3500 руб.'
                    },
                    {
                        productName: 'Рыбное ассорти',
                        productDesc: 'Семга холодного копчения, муксун холодного копчения, филе сельди, нерка холодного копчения подаётся с лимоном, горчично-медовым соусом',
                        productWeight: '1000 г.',
                        productPrice: '2800 руб.'
                    },
                    {
                        productName: 'Сыры',
                        productDesc: 'Бри, с голубой плесенью, Пармезан, Моцарелла, сыр козий, чеддер, подается с виноградом, медом, черносливом, курагой, орехами',
                        productWeight: '1000 г.',
                        productPrice: '2700 руб.'
                    },
                    {
                        productName: 'Овощное ассорти',
                        productDesc: 'Cвежие помидоры и огурцы, сладкий перец, ароматная зелень, подается с классическим пряным соусом "Винегрет"',
                        productWeight: '1000 г.',
                        productPrice: '800 руб.'
                    }
                ]
            },
            // Горячие закуски
            {
                groupTitle: 'Горячие закуски',
                groupItems: [
                    {
                        productName: 'Медальоны из говядины деми гляс',
                        productDesc: '',
                        productWeight: '50/10 г.',
                        productPrice: '280 руб.'
                    },
                    {
                        productName: 'Шашлычок из семги с соусом "тар-тар", лимоном',
                        productDesc: '',
                        productWeight: '50/5 г.',
                        productPrice: '290 руб.'
                    },
                    {
                        productName: 'Каре ягненка',
                        productDesc: '',
                        productWeight: '50/5 г.',
                        productPrice: '290 руб.'
                    },
                    {
                        productName: 'Тигровые креветки в миндальных лепестках с соусом свит чили',
                        productDesc: '',
                        productWeight: '50/5 г.',
                        productPrice: '350 руб.'
                    },
                    {
                        productName: 'Шашлычки из куриного филе с йогуртовым соусом',
                        productDesc: '',
                        productWeight: '50/5 г.',
                        productPrice: '120 руб.'
                    },
                    {
                        productName: 'Медальоны из свиной вырезки в беконе с грибным соусом',
                        productDesc: '',
                        productWeight: '50 г.',
                        productPrice: '190 руб.'
                    },
                    {
                        productName: 'Мини-голубцы из мяса цыпленка с добавлением сыра Фета',
                        productDesc: '',
                        productWeight: '50 г.',
                        productPrice: '120 руб.'
                    },
                    {
                        productName: 'Жульен из языка с белыми грибами в сливочном соусе',
                        productDesc: '',
                        productWeight: '50 г.',
                        productPrice: '120 руб.'
                    }
                ]
            },
            // Гарниры
            {
                groupTitle: 'Гарниры',
                groupItems: [
                    {
                        productName: 'Овощи гриль',
                        productDesc: '',
                        productWeight: '100 г.',
                        productPrice: '180 руб.'
                    },
                    {
                        productName: 'Картофельный гратин',
                        productDesc: '',
                        productWeight: '100 г.',
                        productPrice: '100 руб.'
                    },
                    {
                        productName: 'Золотистый обжаренный картофель с зеленью',
                        productDesc: '',
                        productWeight: '100 г.',
                        productPrice: '70 руб.'
                    },
                    {
                        productName: 'Булгур с овощами',
                        productDesc: '',
                        productWeight: '100 г.',
                        productPrice: '100 руб.'
                    },
                    {
                        productName: 'Рис басмати с овощами / или приготовленный на пару',
                        productDesc: '',
                        productWeight: '100 г.',
                        productPrice: '90 руб.'
                    },
                    {
                        productName: 'Смесь классического длиннозерного и дикого риса в сливочном соусе',
                        productDesc: '',
                        productWeight: '100 г.',
                        productPrice: '90 руб.'
                    },
                    {
                        productName: 'Кус кус с томатами',
                        productDesc: '',
                        productWeight: '100 г.',
                        productPrice: '90 руб.'
                    }
                ]
            },
            // Десерты
            {
                groupTitle: 'Десерты',
                groupItems: [
                    {
                        productName: 'Печенье в ассортименте',
                        productDesc: '',
                        productWeight: '100 г.',
                        productPrice: '115 руб.'
                    },
                    {
                        productName: 'Панкота с манговым пюре',
                        productDesc: '',
                        productWeight: '50 г.',
                        productPrice: '110 руб.'
                    },
                    {
                        productName: 'Шоколадный мусс',
                        productDesc: '',
                        productWeight: '50 г.',
                        productPrice: '110 руб.'
                    },
                    {
                        productName: 'Конфеты, трюфели в ассортименте',
                        productDesc: '',
                        productWeight: '20 г.',
                        productPrice: '60 руб.'
                    },
                    {
                        productName: 'Датская выпечка',
                        productDesc: '',
                        productWeight: '45 г.',
                        productPrice: '100 руб.'
                    },
                    {
                        productName: 'Сезонные фрукты',
                        productDesc: 'Ананас, груша, яблоко, физалис, виноград, мандарин, клубника',
                        productWeight: '1000 г.',
                        productPrice: '1800 руб.'
                    },
                    {
                        productName: 'Ягодно-фруктовое плато',
                        productDesc: 'Клубника, голубика, красная смородина, ежевика, виноград, ананас, груша, физалис',
                        productWeight: '1000 г.',
                        productPrice: '3500 руб.'
                    }
                ]
            },
            // Хлеб
            {
                groupTitle: 'Хлеб',
                groupItems: [
                    {
                        productName: 'Хлебная корзина',
                        productDesc: '',
                        productWeight: '100 г.',
                        productPrice: '50 руб.'
                    }
                ]
            }
        ]
    },
    // Банкет
    {
        menuList: 'Банкет',
        menuGroups: [
            // Салаты
            {
                groupTitle: 'Салаты',
                groupItems: [
                    {
                        productName: 'Салат Цезарь с куриной грудкой',
                        productDesc: '',
                        productWeight: '125 г.',
                        productPrice: '260 руб.'
                    },
                    {
                        productName: 'Салат Цезарь с тигровыми креветками',
                        productDesc: '',
                        productWeight: '125 г.',
                        productPrice: '380 руб.'
                    },
                    {
                        productName: 'Салат с ростбифом',
                        productDesc: '',
                        productWeight: '125 г.',
                        productPrice: '320 руб.'
                    },
                    {
                        productName: 'Салат Греческий',
                        productDesc: '',
                        productWeight: '125 г.',
                        productPrice: '190 руб.'
                    },
                    {
                        productName: 'Салат с семгой слабой соли',
                        productDesc: '',
                        productWeight: '125 г.',
                        productPrice: '280 руб.'
                    },
                    {
                        productName: 'Салат с домашней бужениной',
                        productDesc: '',
                        productWeight: '125 г.',
                        productPrice: '160 руб.'
                    },
                    {
                        productName: 'Салат оливье с куриной грудкой и языком',
                        productDesc: '',
                        productWeight: '125 г.',
                        productPrice: '160 руб.'
                    },
                    {
                        productName: 'Капрезе с томатами и сыром моцарелла',
                        productDesc: '',
                        productWeight: '125 г.',
                        productPrice: '220 руб.'
                    },
                    {
                        productName: 'Салат из тигровых креветок с перечным желе',
                        productDesc: '',
                        productWeight: '125 г.',
                        productPrice: '350 руб.'
                    }
                ]
            },
            // Ассорти
            {
                groupTitle: 'Ассорти',
                groupItems: [
                    {
                        productName: 'Мясная гастрономия',
                        productDesc: 'Сыровяленный свиной окорок, ростбиф из говяжей вырезки, утиная грудка, домашняя буженина, телячий язык подается с маринованным луком, гресини и грушей, томленной в красном вине',
                        productWeight: '1000 г.',
                        productPrice: '3200 руб.'
                    },
                    {
                        productName: 'Мясное ассорти',
                        productDesc: 'Домашняя буженина в чесночном маринаде, ростбиф из говядины, телячий язык, сервелат, подается со свежими листьями салата, помидорами черри и пикантным сливочным соусом хрен',
                        productWeight: '1000 г.',
                        productPrice: '2800 руб.'
                    },
                    {
                        productName: 'Рыбная гастрономия',
                        productDesc: 'Тигровые креветки, семга слабосоленая, семга холодного копчения, масляная рыба холодного копчения, угорь копченный подается с лимоном и горчично-медовым соусом',
                        productWeight: '1000 г.',
                        productPrice: '3500 руб.'
                    },
                    {
                        productName: 'Рыбное ассорти',
                        productDesc: 'Семга холодного копчения, муксун холодного копчения, филе сельди, нерка холодного копчения подаётся с лимоном, горчично-медовым соусом',
                        productWeight: '1000 г.',
                        productPrice: '2800 руб.'
                    },
                    {
                        productName: 'Сыры',
                        productDesc: 'Бри, с голубой плесенью, Пармезан, Моцарелла, сыр козий, чеддер, подается с виноградом, медом, черносливом, курагой, орехами',
                        productWeight: '1000 г.',
                        productPrice: '2900 руб.'
                    },
                    {
                        productName: 'Овощное ассорти',
                        productDesc: 'Cвежие помидоры и огурцы, сладкий перец, ароматная зелень, подается с классическим пряным соусом "Винегрет"',
                        productWeight: '1000 г.',
                        productPrice: '800 руб.'
                    },
                    {
                        productName: 'Ассорти маринадов',
                        productDesc: 'Соленые грузди со сметаной и красным луком, огурцы соленые, томаты черри соленые, капуста квашеная',
                        productWeight: '1000 г.',
                        productPrice: '800 руб.'
                    }
                ]
            },
            // Горячие закуски
            {
                groupTitle: 'Горячие закуски',
                groupItems: [
                    {
                        productName: 'Медальоны из говядины деми гляс',
                        productDesc: '',
                        productWeight: '50/10 г.',
                        productPrice: '280 руб.'
                    },
                    {
                        productName: 'Шашлычок из семги с соусом "тар-тар", лимоном',
                        productDesc: '',
                        productWeight: '50/5 г.',
                        productPrice: '290 руб.'
                    },
                    {
                        productName: 'Каре ягненка с печеным баклажаном',
                        productDesc: '',
                        productWeight: '50/5 г.',
                        productPrice: '290 руб.'
                    },
                    {
                        productName: 'Тигровые креветки в миндальных лепестках с соусом свит чили',
                        productDesc: '',
                        productWeight: '50/5 г.',
                        productPrice: '350 руб.'
                    },
                    {
                        productName: 'Шашлычки из куриного филе с йогуртовым соусом',
                        productDesc: '',
                        productWeight: '50/5 г.',
                        productPrice: '120 руб.'
                    },
                    {
                        productName: 'Медальоны из свиной вырезки в беконе с грибным соусом',
                        productDesc: '',
                        productWeight: '50 г.',
                        productPrice: '190 руб.'
                    },
                    {
                        productName: 'Мини-голубцы из мяса цыпленка с добавлением сыра Фета',
                        productDesc: '',
                        productWeight: '50 г.',
                        productPrice: '120 руб.'
                    },
                    {
                        productName: 'Жульен из языка с белыми грибами в сливочном соусе',
                        productDesc: '',
                        productWeight: '50 г.',
                        productPrice: '120 руб.'
                    }
                ]
            },
            // Горячие блюда
            {
                groupTitle: 'Горячие блюда',
                groupItems: [
                    {
                        productName: 'Утиная грудка в винном соусе с томленой грушей',
                        productDesc: '',
                        productWeight: '100/30 г.',
                        productPrice: '360 руб.'
                    },
                    {
                        productName: 'Стейк Филе миньон из говяжьей вырезки с соусом Деми-глясс',
                        productDesc: '',
                        productWeight: '100/20 г.',
                        productPrice: '530 руб.'
                    },
                    {
                        productName: 'Куриная грудка гриль запеченная с сыром моцарелла',
                        productDesc: '',
                        productWeight: '100/30 г.',
                        productPrice: '220 руб.'
                    },
                    {
                        productName: 'Филе индейки в глазури из бальзамического соуса',
                        productDesc: '',
                        productWeight: '100/20 г.',
                        productPrice: '320 руб.'
                    },
                    {
                        productName: 'Домашняя буженина с перечным соусом',
                        productDesc: '',
                        productWeight: '100/20 г.',
                        productPrice: '350 руб.'
                    },
                    {
                        productName: 'Стейк из семги с голландским соусом',
                        productDesc: '',
                        productWeight: '100/20 г.',
                        productPrice: '550 руб.'
                    },
                    {
                        productName: 'Филе судака с овощной эмульсией',
                        productDesc: '',
                        productWeight: '100/30 г.',
                        productPrice: '340 руб.'
                    }
                ]
            },
            // Гриль меню
            {
                groupTitle: 'Гриль меню',
                groupItems: [
                    {
                        productName: 'Шашлык из свининой шеи',
                        productDesc: '',
                        productWeight: '200 г.',
                        productPrice: '350 руб.'
                    },
                    {
                        productName: 'Антрекоты из свинины на кости',
                        productDesc: '',
                        productWeight: '200 г.',
                        productPrice: '350 руб.'
                    },
                    {
                        productName: 'Ребра свиные',
                        productDesc: '',
                        productWeight: '200 г.',
                        productPrice: '350 руб.'
                    },
                    {
                        productName: 'Шашлык из куриной грудки',
                        productDesc: '',
                        productWeight: '200 г.',
                        productPrice: '250 руб.'
                    },
                    {
                        productName: 'Кукурузный цыпленок гриль',
                        productDesc: '',
                        productWeight: '1 шт',
                        productPrice: '430 руб.'
                    },
                    {
                        productName: 'Шашлык из баранины',
                        productDesc: '',
                        productWeight: '200 г.',
                        productPrice: '380 руб.'
                    },
                    {
                        productName: 'Стейк из говядины',
                        productDesc: '',
                        productWeight: '100 г.',
                        productPrice: '450 руб.'
                    },
                    {
                        productName: 'Стейк из семги',
                        productDesc: '',
                        productWeight: '250 г.',
                        productPrice: '650 руб.'
                    },
                    {
                        productName: 'Шашлык из кальмара с красным луком',
                        productDesc: '',
                        productWeight: '150 г.',
                        productPrice: '350 руб.'
                    },
                    {
                        productName: 'Баран приготовленный целиком на огне',
                        productDesc: '',
                        productWeight: '1 шт',
                        productPrice: 'договор.'
                    }
                ]
            },
            // Гарниры
            {
                groupTitle: 'Гарниры',
                groupItems: [
                    {
                        productName: 'Овощи гриль',
                        productDesc: '',
                        productWeight: '100 г.',
                        productPrice: '180 руб.'
                    },
                    {
                        productName: 'Картофельный гратин',
                        productDesc: '',
                        productWeight: '100 г.',
                        productPrice: '100 руб.'
                    },
                    {
                        productName: 'Золотистый обжаренный картофель с зеленью',
                        productDesc: '',
                        productWeight: '100 г.',
                        productPrice: '70 руб.'
                    },
                    {
                        productName: 'Булгур с овощами',
                        productDesc: '',
                        productWeight: '100 г.',
                        productPrice: '100 руб.'
                    },
                    {
                        productName: 'Рис басмати с овощами / или приготовленный на пару',
                        productDesc: '',
                        productWeight: '100 г.',
                        productPrice: '90 руб.'
                    },
                    {
                        productName: 'Смесь классического длиннозерного и дикого риса в сливочном соусе',
                        productDesc: '',
                        productWeight: '100 г.',
                        productPrice: '90 руб.'
                    },
                    {
                        productName: 'Кус кус с томатами',
                        productDesc: '',
                        productWeight: '100 г.',
                        productPrice: '90 руб.'
                    }
                ]
            },
            // Десерты
            {
                groupTitle: 'Десерты',
                groupItems: [
                    {
                        productName: 'Печенье в ассортименте',
                        productDesc: '',
                        productWeight: '100 г.',
                        productPrice: '115 руб.'
                    },
                    {
                        productName: 'Панкота с манговым пюре',
                        productDesc: '',
                        productWeight: '50 г.',
                        productPrice: '110 руб.'
                    },
                    {
                        productName: 'Шоколадный мусс',
                        productDesc: '',
                        productWeight: '50 г.',
                        productPrice: '110 руб.'
                    },
                    {
                        productName: 'Конфеты, трюфели в ассортименте',
                        productDesc: '',
                        productWeight: '10-15 г.',
                        productPrice: '60 руб.'
                    },
                    {
                        productName: 'Датская выпечка',
                        productDesc: '',
                        productWeight: '45 г.',
                        productPrice: '100 руб.'
                    },
                    {
                        productName: 'Фруктовое плато',
                        productDesc: 'Ананас, груша, яблоко, физалис, виноград, мандарин, клубника',
                        productWeight: '1000 г.',
                        productPrice: '1800 руб.'
                    },
                    {
                        productName: 'Ягодно-фруктовое плато',
                        productDesc: 'Клубника, голубика, красная смородина, ежевика, виноград, ананас, груша, физалис',
                        productWeight: '1000 г.',
                        productPrice: '3500 руб.'
                    }
                ]
            },
            // Хлеб
            {
                groupTitle: 'Хлеб',
                groupItems: [
                    {
                        productName: 'Хлебная корзина',
                        productDesc: '',
                        productWeight: '100 г.',
                        productPrice: '50 руб.'
                    }
                ]
            }
        ]
    },
    // Мороженое
    {
        menuList: 'Мороженое',
        menuGroups: [
            // Домашнее мороженое
            {
                groupTitle: 'Домашнее мороженое',
                groupItems: [
                    {
                        productName: 'Ванильное мороженое',
                        productDesc: '',
                        productWeight: '50 г.',
                        productPrice: '130 руб.'
                    },
                    {
                        productName: 'Мороженое "Лесная ягода"',
                        productDesc: '',
                        productWeight: '50 г.',
                        productPrice: '130 руб.'
                    },
                    {
                        productName: 'Банановое мороженое',
                        productDesc: '',
                        productWeight: '50 г.',
                        productPrice: '130 руб.'
                    },
                    {
                        productName: 'Манговое мороженое',
                        productDesc: '',
                        productWeight: '50 г.',
                        productPrice: '130 руб.'
                    },
                    {
                        productName: 'Лаймовый сорбет',
                        productDesc: '',
                        productWeight: '50 г.',
                        productPrice: '130 руб.'
                    }
                ]
            },
            // Добавки к мороженому
            {
                groupTitle: 'Добавки к мороженому',
                groupItems: [
                    {
                        productName: 'Топинг манго / шоколад / карамель',
                        productDesc: '',
                        productWeight: '50 г.',
                        productPrice: '50 руб.'
                    },
                    {
                        productName: 'Шоколадная крошка',
                        productDesc: '',
                        productWeight: '50 г.',
                        productPrice: '60 руб.'
                    },
                    {
                        productName: 'Поп-корн в соленой карамеле',
                        productDesc: '',
                        productWeight: '50 г.',
                        productPrice: '30 руб.'
                    },
                    {
                        productName: 'Микс орехов',
                        productDesc: '',
                        productWeight: '50 г.',
                        productPrice: '110 руб.'
                    },
                    {
                        productName: 'Маршмелоу',
                        productDesc: '',
                        productWeight: '50 г.',
                        productPrice: '70 руб.'
                    },
                    {
                        productName: 'Свежая ягода',
                        productDesc: '',
                        productWeight: '50 г.',
                        productPrice: '110 руб.'
                    },
                    {
                        productName: 'Ягодный соус Ротте Грюце',
                        productDesc: '',
                        productWeight: '50 г.',
                        productPrice: '75 руб.'
                    },
                    {
                        productName: 'Салат из свежих фруктов',
                        productDesc: '',
                        productWeight: '50 г.',
                        productPrice: '50 руб.'
                    }
                ]
            }
        ]
    },
    // Доставка еды
    {
        menuList: 'Доставка еды',
        menuGroups: [
            // Холодные закуски
            {
                groupTitle: 'Холодные закуски',
                groupItems: [
                    {
                        productName: 'Салат цезарь с куриной грудкой',
                        productDesc: 'Доставляются не заправленные для сохранения зелени',
                        productWeight: '150 г.',
                        productPrice: ''
                    },
                    {
                        productName: 'Салат с ростбифом',
                        productDesc: 'Доставляются не заправленные для сохранения зелени',
                        productWeight: '150 г.',
                        productPrice: ''
                    },
                    {
                        productName: 'Салат с семгой слабосоленой',
                        productDesc: 'Доставляются не заправленные для сохранения зелени',
                        productWeight: '150 г.',
                        productPrice: ''
                    },
                    {
                        productName: 'Салат оливье',
                        productDesc: '',
                        productWeight: '150 г.',
                        productPrice: ''
                    },
                    {
                        productName: 'Салат Сельдь под шубой',
                        productDesc: '',
                        productWeight: '150 г.',
                        productPrice: ''
                    },
                    {
                        productName: 'Семга слабосоленая в укропном маринаде',
                        productDesc: '',
                        productWeight: '500 г.',
                        productPrice: '1600 руб.'
                    },
                    {
                        productName: 'Ростбиф из говядины с маринованым луком',
                        productDesc: '',
                        productWeight: '500 г.',
                        productPrice: '1600 руб.'
                    },
                    {
                        productName: 'Домашняя буженина',
                        productDesc: '',
                        productWeight: '500 г.',
                        productPrice: '690 руб.'
                    },
                    {
                        productName: 'Паштет из куриной печени с луковым конфитюром',
                        productDesc: '',
                        productWeight: '500 г.',
                        productPrice: '480 руб.'
                    },
                    {
                        productName: 'Оливковый Тапенад',
                        productDesc: '',
                        productWeight: '100 г.',
                        productPrice: '280 руб.'
                    }
                ]
            },
            // Горячее
            {
                groupTitle: 'Горячее',
                groupItems: [
                    {
                        productName: 'Утка маринованая, подается с клюквенным соусом',
                        productDesc: 'Готовая или сырая с инструкцией по приготовленю',
                        productWeight: '2000 г.',
                        productPrice: '1500 руб.'
                    },
                    {
                        productName: 'Цыпленок маринованный в гочичном маринаде с розмарином и чесноком',
                        productDesc: 'Указан вес сырого цыпленка',
                        productWeight: '450 г.',
                        productPrice: '430 руб.'
                    }
                ]
            },
            // Пироги
            {
                groupTitle: 'Пироги',
                groupItems: [
                    {
                        productName: 'Пирог с курицей и сыром',
                        productDesc: '',
                        productWeight: '1100 г.',
                        productPrice: '650 руб.'
                    },
                    {
                        productName: 'Пирог со свининой и картофелем',
                        productDesc: '',
                        productWeight: '1100 г.',
                        productPrice: '650 руб.'
                    },
                    {
                        productName: 'Пирог с рыбой',
                        productDesc: '',
                        productWeight: '1100 г.',
                        productPrice: '650 руб.'
                    },
                    {
                        productName: 'Пирог с индейкой и овощами',
                        productDesc: '',
                        productWeight: '1100 г.',
                        productPrice: '650 руб.'
                    },
                    {
                        productName: 'Пирог с капустой и яйцом',
                        productDesc: '',
                        productWeight: '1100 г.',
                        productPrice: '450 руб.'
                    },
                    {
                        productName: 'Пирог с яйцом и зеленым луком',
                        productDesc: '',
                        productWeight: '1100 г.',
                        productPrice: '450 руб.'
                    }
                ]
            },
            // Напитки
            {
                groupTitle: 'Напитки',
                groupItems: [
                    {
                        productName: 'Морс из клюквы',
                        productDesc: '',
                        productWeight: '1000 мл.',
                        productPrice: '350 руб.'
                    },
                    {
                        productName: 'Морс из облепихи',
                        productDesc: '',
                        productWeight: '1000 мл.',
                        productPrice: '350 руб.'
                    },
                    {
                        productName: 'Морс из черной смородины',
                        productDesc: '',
                        productWeight: '1000 мл.',
                        productPrice: '310 руб.'
                    },
                    {
                        productName: 'Морс из вишни',
                        productDesc: '',
                        productWeight: '1000 мл.',
                        productPrice: '310 руб.'
                    }
                ]
            }
        ]
    }
];
