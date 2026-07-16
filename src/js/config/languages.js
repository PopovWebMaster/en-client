
import { get_icon_image_puth } from './../helpers/get_icon_image_puth.js';

export const LANGUAGES = {

    RU: {
        name: 'Русский',
        alias: 'ru',
        icon: get_icon_image_puth( 'rurussiaflag_111751.png' ),
        keyName: 'EN',
        // regex: /^[а-яА-ЯёЁ1-9,.'!?:;()-\s]+$/,
        max: 80,
    },

    EN: {
        name: 'Английский',
        alias: 'en',
        icon: get_icon_image_puth( 'uk_flags_flag_8834.png' ),
        keyName: 'EN',
        // regex: /^[a-zA-Z1-9,.'!?:;()-\s]+$/,
        max: 80,
    },

    DE: {
        name: 'Немецкий',
        alias: 'de',
        icon: get_icon_image_puth( 'Germany_29761.png' ),
        keyName: 'DE',
        // regex: /^[a-zA-Z1-9,.'!?:;()-\s]+$/,
        max: 80,
    },

    CN: {
        name: 'Китайский',
        alias: 'cn',
        icon: get_icon_image_puth( 'cnchinaflag_111955.png' ),
        keyName: 'CN',
        // regex: /^[a-zA-Z1-9,.'!?:;()-\s]+$/,
        max: 80,
    },

    FR: {
        name: 'Французский',
        alias: 'fr',
        icon: get_icon_image_puth( 'frfranceflag_111874.png' ),
        keyName: 'FR',
        // regex: /^[a-zA-Z1-9,.'!?:;()-\s]+$/,
        max: 80,
    },

    ES: {
        name: 'Испанский',
        alias: 'es',
        icon: get_icon_image_puth( 'Spain_29723.png' ),
        keyName: 'ES',
        // regex: /^[a-zA-Z1-9,.'!?:;()-\s]+$/,
        max: 80,
    },

    IT: {
        name: 'Итальянский',
        alias: 'it',
        icon: get_icon_image_puth( 'Italy_29749.png' ),
        keyName: 'IT',
        // regex: /^[a-zA-Z1-9,.'!?:;()-\s]+$/,
        max: 80,
    },

    GR: {
        name: 'Греческий',
        alias: 'gr',
        icon: get_icon_image_puth( 'Greece_29741.png' ),
        keyName: 'GR',
        // regex: /^[a-zA-Z1-9,.'!?:;()-\s]+$/,
        max: 80,
    },

    JP: {
        name: 'Японский',
        alias: 'jp',
        icon: get_icon_image_puth( 'japanflag_flags_japo_9220.png' ),
        keyName: 'JP',
        // regex: /^[a-zA-Z1-9,.'!?:;()-\s]+$/,
        max: 80,
    },

    KR: {
        name: 'Корейский',
        alias: 'kr',
        icon: get_icon_image_puth( 'SouthKorea_flags_flag_8861.png' ),
        keyName: 'KR',
        // regex: /^[a-zA-Z1-9,.'!?:;()-\s]+$/,
        max: 80,
    },

    TR: {
        name: 'Турцкий',
        alias: 'tr',
        icon: get_icon_image_puth( 'Turkey_29733.png' ),
        keyName: 'TR',
        // regex: /^[a-zA-Z1-9,.'!?:;()-\s]+$/,
        max: 80,
    },





    TRANSCRIPTION: {
        name: 'Транскрипция',
        alias: 'transcription',
        // icon: get_icon_image_puth( 'rurussiaflag_111751.png' ),
        icon: '',
        keyName: 'TRANSCRIPTION',
        // regex: /^[a-zA-Zа-яА-ЯёЁ1-9,.'\[\]!?:;()-\s]+$/,
        max: 80,
    },


};


export const LANGUAGE_LIST = [
    /*
        Здесь список тех яхыков, которые учавствуют в сайте
    */
    { ...LANGUAGES.EN },
    { ...LANGUAGES.DE },
    { ...LANGUAGES.CN },
    { ...LANGUAGES.FR },
    { ...LANGUAGES.ES },
    { ...LANGUAGES.IT },
    { ...LANGUAGES.GR },
    { ...LANGUAGES.JP },
    { ...LANGUAGES.KR },





];

export const LANGUAGE_DEFAULT = LANGUAGES.EN;

export const LOCAL_STORAGE_KEY_NAME = 'currentLanguage';








/*

DE
De
de
php artisan make:migration create_word_de_table --create=word_de
php artisan make:migration create_lesson_de_table --create=lesson_de
php artisan make:migration create_audio_de_table --create=audio_de

php artisan make:model WordDe
php artisan make:model LessonDe
php artisan make:model AudioDe

//////// word_de

$table->id();
$table->string( 'de', 80 );
$table->string( 'ru', 80 )->nullable();
$table->string( 'transcription', 80 )->nullable();
$table->bigInteger('lesson_de_id')->nullable();

//////// lesson_de

$table->id();
$table->string( 'title', 255 )->nullable();
$table->string( 'description', 255 )->nullable();
$table->string( 'level_name', 50 )->nullable();
$table->boolean('is_active')->default( false );
$table->integer('order')->nullable();
$table->boolean('is_paid')->default( false );

//////// audio_de

$table->id();
$table->bigInteger('word_de_id');
$table->bigInteger('lesson_de_id')->nullable();
$table->string( 'file_name', 90 );



********* WordDe

protected $table = 'word_de';
protected $fillable = [
    'de', 
    'ru',
    'transcription',
    'lesson_de_id',

];
public $timestamps = false;



********* LessonDe

protected $table = 'lesson_de';
protected $fillable = [
    'title', 
    'description',
    'level_name',
    'is_active',
    'order',
    'is_paid',

];
public $timestamps = false;


********* AudioDe

protected $table = 'audio_de';
protected $fillable = [
    'word_de_id', 
    'lesson_de_id',
    'file_name',
];
public $timestamps = false;








------------------------------------------------------

CN
Cn
cn
php artisan make:migration create_word_cn_table --create=word_cn
php artisan make:migration create_lesson_cn_table --create=lesson_cn
php artisan make:migration create_audio_cn_table --create=audio_cn

php artisan make:model WordCn
php artisan make:model LessonCn
php artisan make:model AudioCn
//////// word_cn

$table->id();
$table->string( 'cn', 80 );
$table->string( 'ru', 80 )->nullable();
$table->string( 'transcription', 80 )->nullable();
$table->bigInteger('lesson_cn_id')->nullable();

//////// lesson_cn

$table->id();
$table->string( 'title', 255 )->nullable();
$table->string( 'description', 255 )->nullable();
$table->string( 'level_name', 50 )->nullable();
$table->boolean('is_active')->default( false );
$table->integer('order')->nullable();
$table->boolean('is_paid')->default( false );

//////// audio_cn

$table->id();
$table->bigInteger('word_cn_id');
$table->bigInteger('lesson_cn_id')->nullable();
$table->string( 'file_name', 90 );



********* WordCn

protected $table = 'word_cn';
protected $fillable = [
    'cn', 
    'ru',
    'transcription',
    'lesson_cn_id',

];
public $timestamps = false;



********* LessonCn

protected $table = 'lesson_cn';
protected $fillable = [
    'title', 
    'description',
    'level_name',
    'is_active',
    'order',
    'is_paid',

];
public $timestamps = false;


********* AudioCn

protected $table = 'audio_cn';
protected $fillable = [
    'word_cn_id', 
    'lesson_cn_id',
    'file_name',
];
public $timestamps = false;








------------------------------------------------------

FR
Fr
fr
php artisan make:migration create_word_fr_table --create=word_fr
php artisan make:migration create_lesson_fr_table --create=lesson_fr
php artisan make:migration create_audio_fr_table --create=audio_fr

php artisan make:model WordFr
php artisan make:model LessonFr
php artisan make:model AudioFr

//////// word_fr

$table->id();
$table->string( 'fr', 80 );
$table->string( 'ru', 80 )->nullable();
$table->string( 'transcription', 80 )->nullable();
$table->bigInteger('lesson_fr_id')->nullable();

//////// lesson_fr

$table->id();
$table->string( 'title', 255 )->nullable();
$table->string( 'description', 255 )->nullable();
$table->string( 'level_name', 50 )->nullable();
$table->boolean('is_active')->default( false );
$table->integer('order')->nullable();
$table->boolean('is_paid')->default( false );

//////// audio_fr

$table->id();
$table->bigInteger('word_fr_id');
$table->bigInteger('lesson_fr_id')->nullable();
$table->string( 'file_name', 90 );



********* WordFr

protected $table = 'word_fr';
protected $fillable = [
    'fr', 
    'ru',
    'transcription',
    'lesson_fr_id',

];
public $timestamps = false;



********* LessonFr

protected $table = 'lesson_fr';
protected $fillable = [
    'title', 
    'description',
    'level_name',
    'is_active',
    'order',
    'is_paid',

];
public $timestamps = false;


********* AudioFr

protected $table = 'audio_fr';
protected $fillable = [
    'word_fr_id', 
    'lesson_fr_id',
    'file_name',
];
public $timestamps = false;








------------------------------------------------------

ES
Es
es
php artisan make:migration create_word_es_table --create=word_es
php artisan make:migration create_lesson_es_table --create=lesson_es
php artisan make:migration create_audio_es_table --create=audio_es

php artisan make:model WordEs
php artisan make:model LessonEs
php artisan make:model AudioEs
//////// word_es

$table->id();
$table->string( 'es', 80 );
$table->string( 'ru', 80 )->nullable();
$table->string( 'transcription', 80 )->nullable();
$table->bigInteger('lesson_es_id')->nullable();

//////// lesson_es

$table->id();
$table->string( 'title', 255 )->nullable();
$table->string( 'description', 255 )->nullable();
$table->string( 'level_name', 50 )->nullable();
$table->boolean('is_active')->default( false );
$table->integer('order')->nullable();
$table->boolean('is_paid')->default( false );

//////// audio_es

$table->id();
$table->bigInteger('word_es_id');
$table->bigInteger('lesson_es_id')->nullable();
$table->string( 'file_name', 90 );



********* WordEs

protected $table = 'word_es';
protected $fillable = [
    'es', 
    'ru',
    'transcription',
    'lesson_es_id',

];
public $timestamps = false;



********* LessonEs

protected $table = 'lesson_es';
protected $fillable = [
    'title', 
    'description',
    'level_name',
    'is_active',
    'order',
    'is_paid',

];
public $timestamps = false;


********* AudioEs

protected $table = 'audio_es';
protected $fillable = [
    'word_es_id', 
    'lesson_es_id',
    'file_name',
];
public $timestamps = false;








------------------------------------------------------

IT
It
it
php artisan make:migration create_word_it_table --create=word_it
php artisan make:migration create_lesson_it_table --create=lesson_it
php artisan make:migration create_audio_it_table --create=audio_it

php artisan make:model WordIt
php artisan make:model LessonIt
php artisan make:model AudioIt

//////// word_it

$table->id();
$table->string( 'it', 80 );
$table->string( 'ru', 80 )->nullable();
$table->string( 'transcription', 80 )->nullable();
$table->bigInteger('lesson_it_id')->nullable();

//////// lesson_it

$table->id();
$table->string( 'title', 255 )->nullable();
$table->string( 'description', 255 )->nullable();
$table->string( 'level_name', 50 )->nullable();
$table->boolean('is_active')->default( false );
$table->integer('order')->nullable();
$table->boolean('is_paid')->default( false );

//////// audio_it

$table->id();
$table->bigInteger('word_it_id');
$table->bigInteger('lesson_it_id')->nullable();
$table->string( 'file_name', 90 );



********* WordIt

protected $table = 'word_it';
protected $fillable = [
    'it', 
    'ru',
    'transcription',
    'lesson_it_id',

];
public $timestamps = false;



********* LessonIt

protected $table = 'lesson_it';
protected $fillable = [
    'title', 
    'description',
    'level_name',
    'is_active',
    'order',
    'is_paid',

];
public $timestamps = false;


********* AudioIt

protected $table = 'audio_it';
protected $fillable = [
    'word_it_id', 
    'lesson_it_id',
    'file_name',
];
public $timestamps = false;








------------------------------------------------------

GR
Gr
gr
php artisan make:migration create_word_gr_table --create=word_gr
php artisan make:migration create_lesson_gr_table --create=lesson_gr
php artisan make:migration create_audio_gr_table --create=audio_gr

php artisan make:model WordGr
php artisan make:model LessonGr
php artisan make:model AudioGr

//////// word_gr

$table->id();
$table->string( 'gr', 80 );
$table->string( 'ru', 80 )->nullable();
$table->string( 'transcription', 80 )->nullable();
$table->bigInteger('lesson_gr_id')->nullable();

//////// lesson_gr

$table->id();
$table->string( 'title', 255 )->nullable();
$table->string( 'description', 255 )->nullable();
$table->string( 'level_name', 50 )->nullable();
$table->boolean('is_active')->default( false );
$table->integer('order')->nullable();
$table->boolean('is_paid')->default( false );

//////// audio_gr

$table->id();
$table->bigInteger('word_gr_id');
$table->bigInteger('lesson_gr_id')->nullable();
$table->string( 'file_name', 90 );



********* WordGr

protected $table = 'word_gr';
protected $fillable = [
    'gr', 
    'ru',
    'transcription',
    'lesson_gr_id',

];
public $timestamps = false;



********* LessonGr

protected $table = 'lesson_gr';
protected $fillable = [
    'title', 
    'description',
    'level_name',
    'is_active',
    'order',
    'is_paid',

];
public $timestamps = false;


********* AudioGr

protected $table = 'audio_gr';
protected $fillable = [
    'word_gr_id', 
    'lesson_gr_id',
    'file_name',
];
public $timestamps = false;








------------------------------------------------------

JP
Jp
jp
php artisan make:migration create_word_jp_table --create=word_jp
php artisan make:migration create_lesson_jp_table --create=lesson_jp
php artisan make:migration create_audio_jp_table --create=audio_jp

php artisan make:model WordJp
php artisan make:model LessonJp
php artisan make:model AudioJp

//////// word_jp

$table->id();
$table->string( 'jp', 80 );
$table->string( 'ru', 80 )->nullable();
$table->string( 'transcription', 80 )->nullable();
$table->bigInteger('lesson_jp_id')->nullable();

//////// lesson_jp

$table->id();
$table->string( 'title', 255 )->nullable();
$table->string( 'description', 255 )->nullable();
$table->string( 'level_name', 50 )->nullable();
$table->boolean('is_active')->default( false );
$table->integer('order')->nullable();
$table->boolean('is_paid')->default( false );

//////// audio_jp

$table->id();
$table->bigInteger('word_jp_id');
$table->bigInteger('lesson_jp_id')->nullable();
$table->string( 'file_name', 90 );



********* WordJp

protected $table = 'word_jp';
protected $fillable = [
    'jp', 
    'ru',
    'transcription',
    'lesson_jp_id',

];
public $timestamps = false;



********* LessonJp

protected $table = 'lesson_jp';
protected $fillable = [
    'title', 
    'description',
    'level_name',
    'is_active',
    'order',
    'is_paid',

];
public $timestamps = false;


********* AudioJp

protected $table = 'audio_jp';
protected $fillable = [
    'word_jp_id', 
    'lesson_jp_id',
    'file_name',
];
public $timestamps = false;








------------------------------------------------------

KR
Kr
kr
php artisan make:migration create_word_kr_table --create=word_kr
php artisan make:migration create_lesson_kr_table --create=lesson_kr
php artisan make:migration create_audio_kr_table --create=audio_kr

php artisan make:model WordKr
php artisan make:model LessonKr
php artisan make:model AudioKr

//////// word_kr

$table->id();
$table->string( 'kr', 80 );
$table->string( 'ru', 80 )->nullable();
$table->string( 'transcription', 80 )->nullable();
$table->bigInteger('lesson_kr_id')->nullable();

//////// lesson_kr

$table->id();
$table->string( 'title', 255 )->nullable();
$table->string( 'description', 255 )->nullable();
$table->string( 'level_name', 50 )->nullable();
$table->boolean('is_active')->default( false );
$table->integer('order')->nullable();
$table->boolean('is_paid')->default( false );

//////// audio_kr

$table->id();
$table->bigInteger('word_kr_id');
$table->bigInteger('lesson_kr_id')->nullable();
$table->string( 'file_name', 90 );



********* WordKr

protected $table = 'word_kr';
protected $fillable = [
    'kr', 
    'ru',
    'transcription',
    'lesson_kr_id',

];
public $timestamps = false;



********* LessonKr

protected $table = 'lesson_kr';
protected $fillable = [
    'title', 
    'description',
    'level_name',
    'is_active',
    'order',
    'is_paid',

];
public $timestamps = false;


********* AudioKr

protected $table = 'audio_kr';
protected $fillable = [
    'word_kr_id', 
    'lesson_kr_id',
    'file_name',
];
public $timestamps = false;








------------------------------------------------------

TR
Tr
tr
php artisan make:migration create_word_tr_table --create=word_tr
php artisan make:migration create_lesson_tr_table --create=lesson_tr
php artisan make:migration create_audio_tr_table --create=audio_tr

php artisan make:model WordTr
php artisan make:model LessonTr
php artisan make:model AudioTr

//////// word_tr

$table->id();
$table->string( 'tr', 80 );
$table->string( 'ru', 80 )->nullable();
$table->string( 'transcription', 80 )->nullable();
$table->bigInteger('lesson_tr_id')->nullable();

//////// lesson_tr

$table->id();
$table->string( 'title', 255 )->nullable();
$table->string( 'description', 255 )->nullable();
$table->string( 'level_name', 50 )->nullable();
$table->boolean('is_active')->default( false );
$table->integer('order')->nullable();
$table->boolean('is_paid')->default( false );

//////// audio_tr

$table->id();
$table->bigInteger('word_tr_id');
$table->bigInteger('lesson_tr_id')->nullable();
$table->string( 'file_name', 90 );



********* WordTr

protected $table = 'word_tr';
protected $fillable = [
    'tr', 
    'ru',
    'transcription',
    'lesson_tr_id',

];
public $timestamps = false;



********* LessonTr

protected $table = 'lesson_tr';
protected $fillable = [
    'title', 
    'description',
    'level_name',
    'is_active',
    'order',
    'is_paid',

];
public $timestamps = false;


********* AudioTr

protected $table = 'audio_tr';
protected $fillable = [
    'word_tr_id', 
    'lesson_tr_id',
    'file_name',
];
public $timestamps = false;






















*/


























